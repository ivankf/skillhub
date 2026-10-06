/* ==========================================================
   SkillHub — 应用逻辑
   路由 / 搜索 / 剪贴板 / 状态管理
   ========================================================== */
(function () {
  'use strict';

  const D = window.SKILLHUB_DATA;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const app = $('#app');
  const PKM = ['npm', 'pnpm', 'yarn', 'bun'];

  /* ---------------- 工具 ---------------- */

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const domainOf = (id) => D.DOMAINS.find(d => d.id === id) || D.DOMAINS[0];
  const skillOf = (id) => D.SKILLS.find(s => s.id === id);

  const fmtNum = (n) => (n >= 1000 ? n.toLocaleString('en-US') : String(n));

  // 收录总数：优先取数据层记录的统计值，回退到实际条目数。
  // 不写死数字，避免采集后首页与真实数据不一致。
  const totalIndexed = () =>
    (D.META && Number.isFinite(D.META.total) ? D.META.total : D.SKILLS.length);

  function debounce(fn, ms) {
    let t;
    return function (...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); };
  }

  function toast(msg, type) {
    const wrap = $('#toastWrap');
    const el = document.createElement('div');
    el.className = 'toast ' + (type || '');
    const icon = type === 'err'
      ? '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 5v6M10 14.2v.3"/><circle cx="10" cy="10" r="7.5"/></svg>'
      : '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5l4 4 7-7.5"/></svg>';
    el.innerHTML = '<span class="ti">' + icon + '</span><span>' + esc(msg) + '</span>';
    wrap.appendChild(el);
    setTimeout(() => {
      el.classList.add('out');
      setTimeout(() => el.remove(), 220);
    }, 2600);
  }

  /* ---------------- 剪贴板（含降级路径） ---------------- */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      ta.remove();
      ok ? resolve() : reject(new Error('copy failed'));
    });
  }

  // 复制并给出降级提示：失败时选中文本让用户手动 Cmd/Ctrl+C
  async function copyCmd(text, btn) {
    try {
      await copyText(text);
      if (btn) {
        const old = btn.innerHTML;
        btn.innerHTML = '<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5l4 4 7-7.5"/></svg> 已复制';
        btn.style.background = 'var(--success)';
        setTimeout(() => { btn.innerHTML = old; btn.style.background = ''; }, 1800);
      }
      toast('命令已复制，到项目根目录粘贴执行', 'ok');
    } catch (e) {
      // 降级：选中文本，提示手动复制
      const nodes = $$('.cmd-box .txt');
      nodes.forEach(n => {
        const r = document.createRange();
        r.selectNodeContents(n);
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
      });
      toast('浏览器拦截了剪贴板权限，请手动复制', 'err');
    }
  }

  /* ---------------- 环境自适应 ---------------- */

  function detectPM() {
    // 前端可探测的有限信号；生产环境应由后端 User-Agent / 客户端上报
    const ua = navigator.userAgent;
    if (/pnpm/i.test(ua)) return 'pnpm';
    if (/yarn/i.test(ua)) return 'yarn';
    if (/bun/i.test(ua)) return 'bun';
    return 'npm'; // 默认最通用
  }

  function cmdFor(pm, name) {
    if (pm === 'pnpm') return 'pnpm dlx skills add ' + name;
    if (pm === 'yarn') return 'yarn dlx skills add ' + name;
    if (pm === 'bun') return 'bunx skills add ' + name;
    return 'npx skills add ' + name;
  }

  /* ---------------- 搜索状态 ---------------- */

  const state = {
    q: '',
    domain: null,
    license: null,
    safeOnly: false,
    recent: false,
    sort: 'relevance',
    filtersOpen: false
  };

  function searchSkills() {
    const q = state.q.trim().toLowerCase();
    let list = D.SKILLS.slice();

    if (q) {
      list = list.map(s => {
        let score = 0;
        const name = s.name.toLowerCase();
        if (name === q) score += 100;
        else if (name.startsWith(q)) score += 50;
        else if (name.includes(q)) score += 30;
        if (s.desc.toLowerCase().includes(q)) score += 12;
        if (domainOf(s.domain).name.includes(q)) score += 8;
        if ((s.author || '').toLowerCase().includes(q)) score += 6;
        return { s, score };
      }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).map(x => x.s);
    }

    if (state.domain) list = list.filter(s => s.domain === state.domain);
    if (state.license) list = list.filter(s => s.license === state.license);
    if (state.safeOnly) list = list.filter(s => s.scan.state === 'pass');
    if (state.recent) list = list.filter(s => s.updatedDays <= 7);

    if (state.sort === 'installs') list.sort((a, b) => b.installs - a.installs);
    else if (state.sort === 'updated') list.sort((a, b) => a.updatedDays - b.updatedDays);

    return list;
  }

  function filterCount() {
    return [state.domain, state.license, state.safeOnly, state.recent].filter(Boolean).length;
  }

  /* ---------------- 组件片段 ---------------- */

  function iconCheck() {
    return '<svg viewBox="0 0 14 14" width="9" height="9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5l2.6 2.6L11 4"/></svg>';
  }

  function iconSearch() {
    return '<svg class="search-ico" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="9" r="6"/><path d="M13.5 13.5L17 17"/></svg>';
  }

  function iconCopy() {
    return '<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="9" height="9" rx="1.6"/><path d="M13 7V5.6A1.6 1.6 0 0011.4 4H5.6A1.6 1.6 0 004 5.6v5.8A1.6 1.6 0 005.6 13H7"/></svg>';
  }

  function iconArrow() {
    return '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h9M8.5 4l4 4-4 4"/></svg>';
  }

  function iconSearchBtn() {
    return '<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="9" r="6"/><path d="M13.5 13.5L17 17"/></svg>';
  }

  function skeletonList(n) {
    let h = '';
    for (let i = 0; i < (n || 4); i++) {
      h += '<div class="skel-card">'
        + '<div class="skel-line" style="width:38%;height:15px;margin-bottom:12px"></div>'
        + '<div class="skel-line" style="height:11px;margin-bottom:8px"></div>'
        + '<div class="skel-line" style="width:64%;height:11px;margin-bottom:16px"></div>'
        + '<div class="skel-line" style="width:26%;height:20px"></div>'
        + '</div>';
    }
    return '<div class="skel-list">' + h + '</div>';
  }

  function emptyState(q) {
    return '<div class="state">'
      + '<div class="state-icon">' + iconSearchBtn() + '</div>'
      + '<h3>没有找到匹配的 Skill</h3>'
      + '<p>' + (q ? '「' + esc(q) + '」暂时没有收录结果。换个关键词，或从下面的能力域开始逛。' : '试试调整筛选条件。') + '</p>'
      + '<div class="state-tags">'
      + D.DOMAINS.slice(0, 4).map(d =>
        '<a class="filter-pill on" href="#/search?domain=' + d.id + '">' + esc(d.name) + '</a>').join('')
      + '</div></div>';
  }

  function resultCard(s) {
    const d = domainOf(s.domain);
    return '<article class="result-card">'
      + '<div class="result-head-mobile">'
        + '<div class="result-icon">' + d.icon + '</div>'
        + '<a class="result-name" href="#/skill/' + s.id + '">' + esc(s.name) + '</a>'
      + '</div>'
      + '<div class="result-body">'
        + '<p class="result-desc">' + esc(s.desc) + '</p>'
        + '<div class="result-meta">'
          + '<span class="chip chip-lic">' + esc(s.license) + '</span>'
          + '<span class="chip chip-safe">✓ 无高危</span>'
          + '<span class="chip chip-ver">' + esc(s.version) + '</span>'
          + '<span class="stat">' + fmtNum(s.installs) + ' 次安装 · ' + esc(s.updated) + '更新</span>'
        + '</div>'
      + '</div>'
      + '<div class="result-side">'
        + '<button class="btn btn-primary btn-sm" data-copy="' + esc(s.name) + '">复制命令</button>'
        + '<span class="result-cmd">npx skills add …</span>'
      + '</div>'
      + '</article>';
  }

  /* ---------------- 视图：首页 ---------------- */

  function viewHome() {
    const top = D.SKILLS.filter(s => s.rank).sort((a, b) => a.rank - b.rank);

    let h = '<div class="hero"><div class="wrap"><div class="hero-inner">'
      + '<div class="hero-badge"><span class="pulse"></span>已收录 ' + fmtNum(totalIndexed()) + ' 个公开 Skill</div>'
      + '<h1 class="hero-title">找到能用的 Skill，<br>比记住它更快</h1>'
      + '<p class="hero-sub">聚合全网公开仓库的 AI Skill，标注来源、许可证与安全扫描结论。<br class="hero-sub-br">搜索后一键复制安装命令，无需注册登录。</p>'
      + '<div class="search-box">' + iconSearch()
        + '<input type="search" id="heroSearch" placeholder="搜索能力、工具链或仓库名" autocomplete="off" aria-label="搜索 Skill">'
        + '<span class="search-kbd">/</span>'
        + '<a class="btn btn-primary" href="#/search">搜索</a>'
      + '</div>'
      + '<div class="hot-row"><span class="hot-label">热门</span>'
        + D.HOT_SEARCHES.slice(0, 4).map(t => '<a class="hot-tag" href="#/search?q=' + encodeURIComponent(t) + '">' + esc(t) + '</a>').join('')
      + '</div>'
      + '</div></div></div>';

    // 能力域 Bento
    h += '<div class="section"><div class="wrap">'
      + '<div class="section-head"><div><h2 class="section-title">按能力域浏览</h2>'
      + '<p class="section-desc">每个 Skill 均标注来源仓库、许可证与安全扫描结论</p></div>'
      + '<a class="section-more" href="#/search">全部分类' + iconArrow() + '</a></div>'
      + '<div class="bento">';

    const [main, ...rest] = D.DOMAINS;
    h += domainCard(main, true);
    h += '<div class="bento-col">' + rest.slice(0, 2).map(d => domainCard(d)).join('') + '</div>';
    h += '</div>';

    // 补充其余能力域（移动端滑动可见）。
    // 行高用 auto，内容少时卡片不会被拉伸出大片空白
    h += '<div class="bento bento-extra">'
      + '<div class="bento-col">'
      + rest.slice(2).map(d => domainCard(d)).join('')
      + '</div></div>';

    h += '</div></div>';

    // 本周榜
    h += '<div class="section"><div class="wrap">'
      + '<div class="section-head"><div><h2 class="section-title">本周榜</h2>'
      + '<p class="section-desc">10.01 – 10.07 · 按匿名安装量排序</p></div>'
      + '<a class="section-more" href="#/rank">完整榜单' + iconArrow() + '</a></div>'
      + '<div class="rank-list">' + top.map(rankRow).join('') + '</div>'
      + '</div></div>';

    // 广告位插槽（配置化开关，默认关闭）
    h += '<div class="wrap"><div class="adslot"><div class="adslot-label">AdSlot · 广告位</div></div></div>';

    h += '</div>';
    return h;
  }

  function domainCard(d, big) {
    // 计数为 0 的能力域标为 empty，卡片收紧高度并给出明确说明，
    // 避免内容稀薄却被网格拉伸成一整块空白
    const empty = !d.count;
    return '<a class="domain-card' + (empty ? ' is-empty' : '') + '" href="#/search?domain=' + d.id + '">'
      + '<div class="domain-icon">' + d.icon + '</div>'
      + '<h3>' + esc(d.name) + '</h3><p>' + esc(d.desc) + '</p>'
      + '<div class="domain-foot"><span>' + (empty ? '待收录' : fmtNum(d.count) + ' 个 Skill') + '</span>'
      + '<span class="arrow">' + iconArrow() + '</span></div>'
      + '</a>';
  }

  function rankRow(s) {
    const d = domainOf(s.domain);
    return '<a class="rank-row" href="#/skill/' + s.id + '">'
      + '<span class="rank-no">' + (s.rank || '–') + '</span>'
      + '<span class="rank-icon">' + d.icon + '</span>'
      + '<span class="rank-main">'
        + '<span class="rank-name">' + esc(s.name) + '</span>'
        + '<span class="rank-desc">' + esc(s.desc.split(/[。\n]/)[0]) + '</span>'
      + '</span>'
      + '<span class="rank-meta">'
        + '<span class="chip chip-lic">' + esc(s.license) + '</span>'
        + '<span class="chip chip-safe">✓ 安全</span>'
      + '</span>'
      + '<span class="rank-stat"><b>' + fmtNum(s.installs) + '</b><span>次安装</span></span>'
      + '</a>';
  }

  /* ---------------- 视图：搜索 ---------------- */

  function viewSearch() {
    const list = searchSkills();
    const n = filterCount();

    let h = '<div class="search-hero"><div class="wrap">'
      + '<div class="search-box">' + iconSearch()
        + '<input type="search" id="q" placeholder="搜索能力、工具链或仓库名" autocomplete="off" value="' + esc(state.q) + '" aria-label="搜索 Skill">'
        + '<button class="btn btn-primary" id="qGo">搜索</button>'
      + '</div></div></div>';

    h += '<div class="wrap"><div class="search-body">';

    // 左栏筛选（桌面）/ 抽屉（移动）
    h += '<aside class="filters" id="filters">' + filterPanel() + '</aside>';

    h += '<div class="results">'
      + '<div class="results-head">'
        + '<div class="results-count">' + list.length + ' 个结果<small>' + (state.q ? '关键词「' + esc(state.q) + '」' : '全部 Skill') + '</small></div>'
        + '<div style="display:flex;align-items:center;gap:10px">'
          + '<button class="btn btn-ghost btn-sm filter-toggle-btn" id="openDrawer" style="display:none">☰ 筛选' + (n ? ' ' + n : '') + '</button>'
          + '<div class="sort-seg">'
            + sortBtn('relevance', '相关度') + sortBtn('installs', '安装量') + sortBtn('updated', '最近更新')
          + '</div>'
        + '</div>'
      + '</div>';

    // 已选条件
    if (n) {
      h += '<div class="active-filters">'
        + (state.domain ? '<span class="filter-pill on">' + esc(domainOf(state.domain).name) + '<button data-un="domain" aria-label="移除">✕</button></span>' : '')
        + (state.license ? '<span class="filter-pill on">' + esc(state.license) + '<button data-un="license" aria-label="移除">✕</button></span>' : '')
        + (state.recent ? '<span class="filter-pill on">一周内更新<button data-un="recent" aria-label="移除">✕</button></span>' : '')
        + (state.safeOnly ? '<span class="filter-pill on">仅无高危<button data-un="safeOnly" aria-label="移除">✕</button></span>' : '')
        + '</div>';
    }

    h += '<div id="resArea">';
    h += list.length ? '<div class="result-list">' + list.map(resultCard).join('') + '</div>'
                     : emptyState(state.q);
    h += '</div></div></div></div>';

    h += '<div class="wrap"><div class="adslot"><div class="adslot-label">AdSlot · 广告位</div></div></div>';
    return h;
  }

  function sortBtn(k, label) {
    return '<button data-sort="' + k + '" class="' + (state.sort === k ? 'on' : '') + '">' + label + '</button>';
  }

  function filterPanel() {
    let h = '<div class="filter-group"><p class="filter-title">能力域</p><div>'
      + D.DOMAINS.map(d => {
          const cnt = D.SKILLS.filter(s => s.domain === d.id).length;
          return '<button class="filter-opt' + (state.domain === d.id ? ' on' : '') + '" data-f="domain" data-v="' + d.id + '">'
            + '<span class="filter-check">' + iconCheck() + '</span>'
            + '<span>' + esc(d.name) + '</span>'
            + '<span class="filter-count">' + cnt + '</span></button>';
        }).join('')
      + '</div></div>';

    h += '<div class="filter-group"><p class="filter-title">许可证</p><div>'
      + D.LICENSES.map(l => '<button class="filter-opt' + (state.license === l.id ? ' on' : '') + '" data-f="license" data-v="' + esc(l.id) + '">'
        + '<span class="filter-check">' + iconCheck() + '</span>'
        + '<span>' + esc(l.id) + '</span></button>').join('')
      + '</div></div>';

    h += '<div class="filter-group"><p class="filter-title">安全扫描</p>'
      + '<button class="filter-switch' + (state.safeOnly ? ' on' : '') + '" data-f="safeOnly" data-v="1">'
      + '<span class="filter-check">' + iconCheck() + '</span><span>仅看无高危项</span><span class="switch"></span></button>'
      + '</div>';

    h += '<div class="filter-group"><p class="filter-title">更新时间</p><div class="seg">'
      + '<button data-f="recent" data-v="1" class="' + (state.recent ? 'on' : '') + '">一周</button>'
      + '<button class="on">一月</button><button>全部</button></div></div>';

    if (filterCount()) h += '<button class="filter-reset" id="resetFilters">✕ 清除全部筛选</button>';
    return h;
  }

  /* ---------------- 视图：详情 ---------------- */

  function viewDetail(id) {
    const s = skillOf(id);
    if (!s) {
      return '<div class="wrap"><div class="state">'
        + '<div class="state-icon">!</div>'
        + '<h3>Skill 不存在或已下架</h3>'
        + '<p>它可能已被作者删除，或因来源失效被自动下架。</p>'
        + '<div class="state-actions"><a class="btn btn-primary" href="#/search">去搜索</a></div>'
        + '</div></div>';
    }

    const d = domainOf(s.domain);
    const pm = detectPM();

    // 正文
    let main = '<div class="crumbs"><a href="#/">发现</a><span class="sep">/</span>'
      + '<a href="#/search?domain=' + s.domain + '">' + esc(d.name) + '</a><span class="sep">/</span>'
      + '<span>' + esc(s.name) + '</span></div>'
      + '<h1 class="detail-title">' + esc(s.name) + '</h1>'
      + '<p class="detail-desc">' + esc(s.desc) + '</p>'
      + '<div class="detail-meta">'
        + '<span class="meta-item">维护者 <b>@' + esc(s.author) + '</b></span>'
        + '<span class="meta-item">' + esc(s.repo) + '</span>'
        + '<span class="meta-item">Star <b>' + fmtNum(s.stars) + '</b></span>'
        + '<span class="meta-item">' + fmtNum(s.installs) + ' 次安装</span>'
      + '</div>'
      + '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">'
        + '<span class="chip chip-lic">' + esc(s.license) + '</span>'
        + '<span class="chip chip-safe">✓ 安全扫描通过</span>'
        + '<span class="chip chip-ver">' + esc(s.version) + '</span>'
        + '<span class="chip chip-plain">' + esc(s.updated) + '更新</span>'
      + '</div>';

    // 使用说明
    // 渲染后的 Markdown 作为正文，原始 SKILL.md 折叠收起。
    // 参考 PyPI / npm 的做法：正文永远是清洗过的结构化内容，
    // 想看原文给链接，不把裸 HTML 源码摊在页面上。
    const rawMd = String(s.skillmd == null ? '' : s.skillmd).trim();
    const mdHtml = rawMd ? md(rawMd) : '';

    // 有些仓库 README 开头全是徽章墙，渲染后几乎没有有效内容，
    // 这时退回采集时提取的 readme 摘要（已是纯文本）。
    const hasBody = mdHtml.replace(/<[^>]+>/g, '').trim().length > 40;
    const fallbackList = Array.isArray(s.readme) ? s.readme.filter(Boolean) : [];
    let bodyHtml;
    if (hasBody) {
      bodyHtml = '<div class="md-body">' + mdHtml + '</div>';
    } else if (fallbackList.length) {
      bodyHtml = '<div class="md-body">' + fallbackList
        .map(p => '<p>' + mdInline(String(p)) + '</p>').join('') + '</div>';
    } else {
      bodyHtml = '<p class="md-empty">该仓库未提供可渲染的说明文档，'
        + '建议直接查看下方原文链接。</p>';
    }

    main += '<section class="detail-block"><div class="block-head"><span class="block-bar"></span>'
      + '<h2 class="block-title">使用说明</h2></div>'
      + bodyHtml
      + '<div class="doc-foot">'
        + '<a class="doc-link" href="' + esc(s.repoUrl || ('https://github.com/' + s.repo)) + '"'
          + ' target="_blank" rel="noopener noreferrer">'
          + '在 GitHub 查看完整 README'
          + '<svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor"'
          + ' stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
          + '<path d="M7.5 12.5l5-5M8 7h5v5"/></svg></a>'
        + (rawMd
            ? '<button class="doc-fold" type="button" aria-expanded="false" data-fold>原始 SKILL.md</button>'
            : '')
      + '</div>'
      + (rawMd
          ? '<div class="md-raw" id="mdRaw" hidden><div class="code-box">'
            + '<div class="code-head"><span class="code-name">SKILL.md</span>'
            + '<button class="code-copy" data-copy-raw="' + esc(rawMd) + '">'
            + iconCopy() + '复制</button></div>'
            + '<pre class="code-body">' + hl(rawMd) + '</pre></div></div>'
          : '')
      + '</section>';

    // 安全扫描
    const sc = s.scan;
    main += '<section class="detail-block"><div class="scan-card">'
      + '<div class="scan-head"><div class="scan-icon">'
      + '<svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5l4 4 7-7.5"/></svg>'
      + '</div><div><h3 class="scan-title">安全扫描通过</h3>'
      + '<p class="scan-sub">扫描于 ' + esc(sc.scanned) + ' · 规则集 ' + esc(sc.ruleSet) + ' · 未发现高危项</p></div></div>'
      + '<div class="scan-grid">'
        + statCell(sc.high, '高危脚本', 'ok') + statCell(sc.ext, '外联行为', sc.ext ? 'warn' : 'ok')
        + statCell(sc.cred, '凭证读取', 'ok') + statCell(sc.low, '低危提示', sc.low ? 'warn' : 'ok')
      + '</div>'
      + '<div class="scan-detail">'
        + '<div class="scan-row"><span class="k">扫描来源</span><span class="v">GitHub 公开仓库自动采集</span></div>'
        + '<div class="scan-row"><span class="k">收录状态</span><span class="v">已收录 · 每日重新校验</span></div>'
        + (sc.extNote ? '<div class="scan-row"><span class="k">外联说明</span><span class="v" style="font-family:var(--font);color:var(--text-2)">' + esc(sc.extNote) + '</span></div>' : '')
        + '<div class="scan-row"><span class="k">申诉通道</span><span class="v" style="font-family:var(--font);color:var(--text-2)">如认为误判，<a href="#/feedback" style="color:var(--accent-text)">可提交申诉</a></span></div>'
      + '</div></div></section>';

    // 版本历史
    if (s.versions && s.versions.length) {
      main += '<section class="detail-block"><div class="block-head"><span class="block-bar"></span>'
        + '<h2 class="block-title">版本历史</h2></div><div class="ver-list">'
        + s.versions.map(v => '<div class="ver-row' + (v.cur ? ' cur' : '') + '">'
          + (v.cur ? '<span class="ver-tag">当前</span>' : '<span style="width:40px;flex:none"></span>')
          + '<span class="ver-v">' + esc(v.v) + '</span>'
          + '<span class="ver-d">' + esc(v.d) + '</span>'
          + '<span class="ver-t">' + esc(v.t) + '</span></div>').join('')
        + '</div></section>';
    }

    // 相似推荐
    const rel = (s.related || []).map(skillOf).filter(Boolean);
    if (rel.length) {
      main += '<section class="detail-block"><div class="block-head"><span class="block-bar"></span>'
        + '<h2 class="block-title">相似 Skill</h2></div><div class="rel-grid">'
        + rel.map(r => '<a class="rel-card" href="#/skill/' + r.id + '">'
          + '<span class="rel-name">' + esc(r.name) + '</span>'
          + '<p class="rel-desc">' + esc(r.desc.split(/[。]/)[0]) + '</p>'
          + '<span class="rel-meta">' + fmtNum(r.installs) + ' 次安装</span></a>').join('')
        + '</div></section>';
    }

    // 右栏安装面板
    let side = '<div class="install-panel">'
      + '<div class="panel-head"><h2 class="panel-title">安装到本地</h2>'
      + '<span class="env-badge"><span class="dot"></span>环境已识别</span></div>'
      + '<div class="pm-tabs" id="pmTabs">'
      + PKM.map(p => '<button data-pm="' + p + '" class="' + (p === pm ? 'on' : '') + '">' + p + '</button>').join('')
      + '</div>'
      + '<div class="cmd-box"><span class="pre">$</span>'
      + '<span class="txt" id="cmdTxt">' + esc(cmdFor(pm, s.name)) + '</span>'
      + '<button class="mini" data-copy-btn aria-label="复制命令">' + iconCopy() + '</button></div>'
      + '<button class="btn btn-primary btn-block" data-copy="' + esc(s.name) + '" data-pm-scope="1">复制安装命令</button>'
      + '<p class="panel-foot" id="panelFoot">命令已按当前环境生成（默认 npm）· 复制后到项目根目录执行。若识别有误，可在上方切换包管理器。</p>'
      + '</div>';

    // 失败原因对照表
    side += '<div class="trouble" id="trouble">'
      + '<button class="trouble-head" aria-expanded="false">'
        + '<span class="trouble-title">安装失败？对照原因查'
        + '<span class="trouble-badge">已展开</span></span>'
      + '<span class="trouble-caret">' + iconArrow() + '</span>'
      + '</button><div class="trouble-list">'
      + D.TROUBLES.map(t => '<div class="trouble-item">'
        + '<code class="trouble-err">' + esc(t.code) + '</code>'
        + '<p class="trouble-cause">' + esc(t.cause) + '</p>'
        + '<p class="trouble-fix">' + esc(t.fix) + '</p></div>').join('')
      + '</div></div>';

    // 页面 SEO 结构化数据
    const ld = {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: s.name, description: s.desc, applicationCategory: 'DeveloperApplication',
      license: s.license, codeRepository: 'https://' + s.repo,
      softwareVersion: s.version, author: { '@type': 'Person', name: s.author },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    };
    const ldTags = D.SKILLS.filter(x => x.domain === s.domain && x.id !== s.id).slice(0, 6)
      .map(x => '<a class="hot-tag" href="#/skill/' + x.id + '" style="margin:0">' + esc(x.name) + '</a>').join('');

    return '<div class="wrap">'
      + '<script type="application/ld+json">' + JSON.stringify(ld) + '<\/script>'
      + '<div class="detail">'
        + '<div class="detail-main">' + main + '</div>'
        + '<aside class="detail-side">' + side + '</aside>'
      + '</div>'
      + '<div class="section" style="padding-bottom:8px"><div class="block-head"><span class="block-bar"></span>'
      + '<h2 class="block-title">同域其他 Skill</h2></div>'
      + '<div class="hot-row" style="justify-content:flex-start;flex-wrap:wrap">' + ldTags + '</div></div>'
      + '</div>'
      // 移动端吸底
      + '<div class="sticky-cta">'
        + '<div class="sticky-info"><span class="sticky-name">' + esc(s.name) + '</span>'
        + '<span class="sticky-sub">' + esc(s.version) + ' · <span id="stickyPm">' + pm + '</span> · ✓ 无高危</span></div>'
        + '<button class="btn btn-primary" data-copy="' + esc(s.name) + '" data-pm-scope="1" data-sticky="1">复制安装命令</button>'
      + '</div>';
  }

  function statCell(v, label, tone) {
    return '<div class="scan-stat ' + tone + '"><b>' + v + '</b><span>' + esc(label) + '</span></div>';
  }

  function hl(code) {
    return esc(code)
      .replace(/^(\s*)(#.*)$/gm, '<span class="c">$1$2</span>')
      .replace(/\b([a-zA-Z-]+)(:)/g, '<span class="k">$1</span>$2')
      .replace(/(\[[^\]]*\])/g, '<span class="s">$1</span>');
  }

  /* ---------------- 轻量 Markdown 渲染 ----------------
   * 采集到的 README 是任意第三方仓库的不可信内容，直接 innerHTML
   * 等于把 XSS 交给别人。这里照 PyPI readme_renderer 的思路做白名单处理：
   *
   *   1. 删掉「整块无文本」的行——徽章墙、图片行，它们只是装饰
   *   2. 危险块（script/style/iframe）连内容一起删
   *   3. 无害标签（p/div/a/img…）只剥标签、留内部文本
   *   4. esc() 转义残余尖括号，此时已无任何标签能存活
   *   5. 从纯文本重建 Markdown 结构，只输出我们允许的少量标签
   *
   * 第4 步是关键：标签此时已只是文本，不是可执行元素，
   * 因此 XSS、onerror、javascript: 伪协议都不可能生效，
   * 也不需要维护容易漏项的黑名单。
   * ---------------------------------------------- */

  // 会连同内容一起删除的标签：里面的文本是代码不是给人读的
  const DANGEROUS_BLOCKS = /<(script|style|iframe|object|embed|noscript|svg|math)\b[\s\S]*?<\/\1\s*>/gi;

  // 排版类实体解成字符；& & < > " ' 交给 esc 处理，避免二次转义漏洞
  const HTML_ENTITIES = [
    [/&nbsp;/gi, ' '], [/&ensp;|&emsp;/gi, ' '],
    [/&mdash;/gi, '—'], [/&ndash;/gi, '–'], [/&hellip;/gi, '…'],
    [/&ldquo;|&rdquo;/gi, '”'], [/&lsquo;|&rsquo;/gi, '’'],
    [/&middot;/gi, '·'], [/&bull;/gi, '•'], [/&times;/gi, '×'],
    [/&copy;/gi, '©'], [/&reg;/gi, '®'], [/&trade;/gi, '™'],
  ];

  // 剥掉一行里的 HTML 标签，返回纯文本。用于判断「这行还有没有内容」
  //
  // 关键细节：块级标签（p/div/li/h1…）替换成两个换行而不是空格，
  // 它们在语义上是段落分隔。普通换行会被 md() 合并成同一段，
  // 只有空行才真正断段，否则整篇会黏成一大坨。
  const BLOCK_TAGS = 'p|div|li|ul|ol|tr|table|thead|tbody|section|article|header|footer|br|hr|h1|h2|h3|h4|h5|h6|blockquote|pre|center|details|summary|figure';

  function stripTags(line) {
    return String(line)
      .replace(DANGEROUS_BLOCKS, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<img\b[^>]*\balt\s*=\s*(?:"([^"]*)"|'([^']*)')[^\>]*>/gi,
        (m, a, b) => (a || b) ? '\n\n' + (a || b) + '\n\n' : ' ')
      .replace(new RegExp('</?(' + BLOCK_TAGS + ')\\b[^>]*>', 'gi'), '\n\n')
      .replace(/<[^>]*>/g, ' ');
  }

  // 清理 README 原文：去徽章行、去危险块、剥标签、解排版实体
  function cleanMd(raw) {
    const lines = String(raw == null ? '' : raw).replace(/\r\n?/g, '\n').split('\n');
    const kept = [];

    for (const line of lines) {
      // HTML 注释整行丢弃
      if (/^\s*<!--/.test(line)) continue;

      // 不含标签的行是纯 Markdown，原样保留
      if (!/<[a-z!/]/i.test(line)) {
        kept.push(line);
        continue;
      }

      // 含标签的行：剥完还剩文字才留。
      // 徽章墙 / 居中图片剥完是空的 → 丢掉；
      // <a href=...>说明文字</a> 剥完剩文字 → 留下。
      const bare = stripTags(line).replace(/[\s\u00a0|·•|]/g, '').trim();
      if (bare.length >= 2) kept.push(stripTags(line));
    }

    let s = kept.join('\n');
    s = s.replace(DANGEROUS_BLOCKS, ' ');
    s = s.replace(/<(script|style|iframe|object|embed)\b[^>]*\/?>/gi, ' ');

    // skillmd 只截 README 前 1200 字符，末尾常停在半个标签上
    // （形如 `<div><a id="the-core`）。这种截断痕迹展示给用户很难看，
    // 从末尾往前找最后一个未闭合的 '<'，整段丢掉。
    // 注意只认「再往后没有 '>'」的情况，否则会误伤 mermaid 代码块里
    // 合法的 <br/> —— 那类内容在围栏内，本该原样保留。
    const tail = s.slice(-200);
    const open = tail.lastIndexOf('<');
    if (open >= 0 && tail.indexOf('>', open) < 0) {
      s = s.slice(0, s.length - (tail.length - open));
    }

    // 图片：留alt 文字，丢掉相对路径（本站在必定 404）
    s = s.replace(/<img\b[^>]*\balt\s*=\s*(?:"([^"]*)"|'([^']*)')[^\>]*>/gi,
      (m, a, b) => (a || b) ? (a || b) : '');
    s = s.replace(/<[^>]*>/g, '');
    for (const [re, ch] of HTML_ENTITIES) s = s.replace(re, ch);
    return s;
  }

  // 行内元素：代码 → 粗体 → 斜体 → 链接
  // 顺序有讲究：代码里的 * _ 不应被当成强调，先用占位符把它挖走。
  function mdInline(text) {
    const codes = [];
    let s = String(text == null ? '' : text);

    // 行内代码优先挖出，后续规则不再碰它内部
    s = s.replace(/`([^`\n]+)`/g, (m, c) => {
      codes.push(c);
      return '\u0000' + (codes.length - 1) + '\u0000';
    });

    // 图片：相对路径在本站必然 404，只保留 alt 文字当说明
    s = s.replace(/!\[([^\]]*)\]\([^)]*\)/g, (m, alt) => (alt || '').trim());

    // 链接：只放行 http/https，其余降级为纯文本，避免 javascript: 伪协议
    s = s.replace(/\[([^\]]+)\]\(\s*([^)\s]+)[^)]*\)/g, (m, label, href) => {
      const u = /^https?:\/\//i.test(href) ? href : null;
      return u
        ? '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>'
        : label;
    });

    s = s.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
         .replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1<em>$2</em>')
         .replace(/__([^_\n]+)__/g, '<strong>$1</strong>');

    // 还原行内代码（内容已在 esc 后，保持原样）
    s = s.replace(/\u0000(\d+)\u0000/g, (m, i) => '<code>' + codes[+i] + '</code>');
    return s;
  }

  // 块级渲染。只支持标题 / 列表 / 引用 / 代码块 / 段落 / 分隔线，
  // 够用且可控；表格这类复杂结构一律降级成段落，不会破坏布局。
  function md(src) {
    // cleanMd 先剥掉所有 HTML 标签，esc 再确保没有尖括号能存活
    const lines = esc(cleanMd(src)).split('\n');
    const out = [];
    let para = [];
    let list = null;   // 'ul' | 'ol'
    let quote = [];

    const flushPara = () => {
      if (para.length) {
        out.push('<p>' + mdInline(para.join(' ')) + '</p>');
        para = [];
      }
    };
    const flushList = () => {
      if (list) { out.push('</' + list + '>'); list = null; }
    };
    const flushQuote = () => {
      if (quote.length) {
        out.push('<blockquote>' + mdInline(quote.join(' ')) + '</blockquote>');
        quote = [];
      }
    };
    const flushAll = () => { flushPara(); flushList(); flushQuote(); };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const t = line.trim();

      // 围栏代码块：原样保留，不做任何行内解析
      const fence = t.match(/^(`{3,}|~{3,})\s*([\w+-]*)\s*$/);
      if (fence) {
        flushAll();
        const mark = fence[1][0];
        const buf = [];
        i++;
        while (i < lines.length && !new RegExp('^\\s*' + mark + '{3,}\\s*$').test(lines[i])) {
          buf.push(lines[i]); i++;
        }
        i++; // 跳过收尾围栏
        out.push(
          '<div class="md-code"><div class="code-head">'
          + '<span class="code-name">' + esc(fence[2] || 'text') + '</span>'
          + '<button class="code-copy" data-copy-raw="' + esc(buf.join('\n')) + '">'
          + iconCopy() + '复制</button></div>'
          + '<pre class="code-body">' + hl(buf.join('\n')) + '</pre></div>'
        );
        continue;
      }

      if (!t) { flushAll(); continue; }

      // 标题：README 里 h1 层级混乱，统一压到 h3/h4 避免撑破排版
      const h = t.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        flushAll();
        const lv = Math.min(4, h[1].length + 1);
        out.push('<h' + lv + '>' + mdInline(h[2]) + '</h' + lv + '>');
        continue;
      }

      // 分隔线
      if (/^([-*_])\1{2,}$/.test(t)) { flushAll(); out.push('<hr>'); continue; }

      // 引用（esc 后 '>' 变成 &gt;）
      if (/^&gt;\s?/.test(t)) {
        flushPara(); flushList();
        quote.push(t.replace(/^&gt;\s?/, ''));
        continue;
      }
      flushQuote();

      // 列表
      const li = t.match(/^([-*+]|\d+[.)])\s+(.*)$/);
      if (li) {
        flushPara();
        const kind = /\d/.test(li[1]) ? 'ol' : 'ul';
        if (list !== kind) { flushList(); out.push('<' + kind + '>'); list = kind; }
        out.push('<li>' + mdInline(li[2]) + '</li>');
        continue;
      }
      flushList();

      para.push(t);
    }
    flushAll();
    return out.join('');
  }

  /* ---------------- 视图：静态页 ---------------- */

  function viewRules() {
    return '<div class="wrap"><div class="doc">'
      + '<h1>收录规则</h1>'
      + '<p class="lede">所有 Skill 在进入索引前都会经过自动化安全扫描。命中高危规则的 Skill 一律不予收录，判定依据公开可查。</p>'
      + '<div class="callout"><p>我们索引的是别人写的代码，它会在你的机器上执行。因此安全扫描是硬门槛，不是可选项。</p></div>'
      + '<h2>扫描项</h2>'
      + D.RULES.map(r => '<div class="rule-item"><h3>' + r.icon + ' ' + esc(r.title) + '</h3><p>' + esc(r.desc) + '</p></div>').join('')
      + '<h2>判定结果</h2>'
      + '<ul>'
      + '<li><b>高危</b> — 直接不收录，站内不可见，保留判定记录</li>'
      + '<li><b>低危</b> — 正常收录，扫描结论在详情页公开展示</li>'
      + '<li><b>无风险</b> — 正常收录</li>'
      + '</ul>'
      + '<h2>数据来源</h2>'
      + '<p>仅采集 GitHub 公开仓库。每个 Skill 都会标注原始仓库地址、许可证与最近同步时间。版权与安全结论归原作者所有。</p>'
      + '<h2>更新频率</h2>'
      + '<p>新增 Skill 每日采集一次，已收录 Skill 每日重新校验。来源失效或作者删除时自动下架。</p>'
      + '</div></div>';
  }

  function viewSubmit() {
    return '<div class="wrap"><div class="doc">'
      + '<h1>提交 Skill</h1>'
      + '<p class="lede">发现遗漏的 Skill？提交仓库地址，我们会进入采集队列。</p>'
      + '<div class="callout"><p>我们只索引公开仓库。提交后会先经过安全扫描，通过后才会出现在站内。</p></div>'
      + '<form id="submitForm">'
      + '<div class="field"><label for="f-repo">仓库地址 <span style="color:var(--danger)">*</span></label>'
      + '<input id="f-repo" name="repo" placeholder="github.com/author/skill-repo" required>'
      + '<p class="hint">必须是公开可访问的 GitHub 仓库</p></div>'
      + '<div class="field"><label for="f-name">Skill 名称</label><input id="f-name" name="name" placeholder="例如 pr-diff-reviewer"></div>'
      + '<div class="field"><label for="f-desc">一句话说明</label><textarea id="f-desc" name="desc" placeholder="它解决什么问题"></textarea></div>'
      + '<div class="field"><label for="f-note">补充信息（可选）</label><input id="f-note" name="note" placeholder="维护状态、依赖要求等"></div>'
      + '<button class="btn btn-primary" type="submit">提交</button>'
      + '</form></div></div>';
  }

  function viewFeedback() {
    return '<div class="wrap"><div class="doc">'
      + '<h1>问题反馈</h1>'
      + '<p class="lede">发现错误收录、扫描误判或信息有误？告诉我们。</p>'
      + '<div class="callout warn"><p>安全扫描申诉同样走这里。申诉会附带该 Skill 的扫描记录与规则命中详情。</p></div>'
      + '<form id="fbForm">'
      + '<div class="field"><label for="f-type">反馈类型</label><select id="f-type" name="type">'
      + '<option>收录信息有误</option><option>安全扫描误判（申诉）</option>'
      + '<option>Skill 已失效但仍可访问</option><option>搜索结果不相关</option><option>其他</option></select></div>'
      + '<div class="field"><label for="f-target">相关 Skill 或页面</label><input id="f-target" name="target" placeholder="pr-diff-reviewer 或搜索关键词"></div>'
      + '<div class="field"><label for="f-detail">详细说明</label><textarea id="f-detail" name="detail" placeholder="请描述具体情况" required></textarea></div>'
      + '<button class="btn btn-primary" type="submit">提交反馈</button>'
      + '</form></div></div>';
  }

  function viewRank() {
    const list = D.SKILLS.slice().sort((a, b) => b.installs - a.installs);
    return '<div class="wrap"><div class="section" style="padding-top:44px">'
      + '<div class="section-head"><div><h1 class="section-title">完整榜单</h1>'
      + '<p class="section-desc">按匿名安装量排序 · 数据每日更新</p></div></div>'
      + '<div class="rank-list">' + list.map((s, i) => {
          const r = Object.assign({}, s); r.rank = i + 1; return rankRow(r);
        }).join('') + '</div>'
      + '</div></div>';
  }

  /* ---------------- 路由 ---------------- */

  const routes = {
    '/': viewHome,
    '/search': viewSearch,
    '/rank': viewRank,
    '/rules': viewRules,
    '/submit': viewSubmit,
    '/feedback': viewFeedback
  };

  let lastPath = '';

  function parseHash() {
    const raw = location.hash.replace(/^#/, '') || '/';
    const [path, qs] = raw.split('?');
    const params = new URLSearchParams(qs || '');
    return { path: path || '/', params };
  }

  function render() {
    const { path, params } = parseHash();

    // 搜索参数同步到状态
    if (path === '/search') {
      state.q = params.get('q') || '';
      // 参数缺省即视为清空，避免上一路的筛选残留到下一路
      state.domain = params.get('domain');
      state.license = params.get('license');
      const s = params.get('sort');
      state.sort = (s === 'installs' || s === 'updated') ? s : 'relevance';
    }

    // 同步导航高亮
    const base = path.startsWith('/skill/') ? '/' : path;
    $$('#navDesktop a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + base);
    });
    $$('#tabbar a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + base);
    });

    const isDetail = path.startsWith('/skill/');
    const html = isDetail
      ? viewDetail(path.split('/')[2])
      : (routes[path] ? routes[path]() : viewHome());
    app.innerHTML = html;

    // 搜索页：进入时展示骨架屏，模拟真实请求
    if (path === '/search' && lastPath !== path + JSON.stringify(state)) {
      const area = $('#resArea');
      if (area) {
        area.innerHTML = skeletonList(4);
        setTimeout(() => {
          if ($('#resArea') === area) {
            const list = searchSkills();
            area.innerHTML = list.length
              ? '<div class="result-list">' + list.map(resultCard).join('') + '</div>'
              : emptyState(state.q);
          }
        }, 320);
      }
    }

    lastPath = path + JSON.stringify(state);
    bindView(path);

    // 移动端搜索浮层收起
    if (!document.getElementById('heroSearch')) closeMobileSearch();

    // 页面切换回顶
    if (path !== location.pathname) window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

    // 动态 title
    const t = {
      '/': 'SkillHub — 找到能用的 Skill，比记住它更快',
      '/search': '搜索 Skill — SkillHub',
      '/rank': '榜单 — SkillHub',
      '/rules': '收录规则 — SkillHub',
      '/submit': '提交 Skill — SkillHub',
      '/feedback': '问题反馈 — SkillHub'
    };
    const sk = isDetail ? skillOf(path.split('/')[2]) : null;
    document.title = isDetail
      ? (sk ? sk.name + ' — SkillHub' : 'Skill 未找到 — SkillHub')
      : (t[path] || t['/']);
  }

  /* ---------------- 事件绑定 ---------------- */

  function bindView(path) {
    // 首页搜索
    const hero = $('#heroSearch');
    if (hero) {
      hero.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && hero.value.trim()) location.hash = '#/search?q=' + encodeURIComponent(hero.value.trim());
      });
      document.addEventListener('keydown', onceKey);
    }

    // 搜索页输入
    const q = $('#q');
    if (q) {
      q.addEventListener('input', debounce(() => {
        state.q = q.value;
        const p = new URLSearchParams();
        if (state.q) p.set('q', state.q);
        if (state.domain) p.set('domain', state.domain);
        if (state.license) p.set('license', state.license);
        const qs = p.toString();
        history.replaceState(null, '', '#/search' + (qs ? '?' + qs : ''));
        const list = searchSkills();
        const area = $('#resArea');
        if (area) area.innerHTML = list.length
          ? '<div class="result-list">' + list.map(resultCard).join('') + '</div>'
          : emptyState(state.q);
        const c = $('.results-count');
        if (c) c.innerHTML = list.length + ' 个结果<small>' + (state.q ? '关键词「' + esc(state.q) + '」' : '全部 Skill') + '</small>';
      }, 220));
      const go = () => { if (q.value.trim() !== state.q) { q.dispatchEvent(new Event('input')); } };
      $('#qGo').addEventListener('click', go);
    }

    // 筛选
    $$('[data-f]').forEach(btn => {
      btn.addEventListener('click', () => {
        const f = btn.getAttribute('data-f');
        const v = btn.getAttribute('data-v');
        if (f === 'safeOnly' || f === 'recent') state[f] = !state[f];
        else state[f] = state[f] === v ? null : v;
        refreshSearch();
      });
    });
    $$('[data-sort]').forEach(b => b.addEventListener('click', () => { state.sort = b.getAttribute('data-sort'); refreshSearch(); }));
    $$('[data-un]').forEach(b => b.addEventListener('click', () => { state[b.getAttribute('data-un')] = null; refreshSearch(); }));
    const rf = $('#resetFilters');
    if (rf) rf.addEventListener('click', () => {
      state.domain = state.license = null; state.safeOnly = state.recent = false; refreshSearch();
    });

    // 抽屉
    const openBtn = $('#openDrawer');
    if (openBtn) openBtn.addEventListener('click', openDrawer);

    // 详情页：包管理器切换
    const tabs = $('#pmTabs');
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        const b = e.target.closest('[data-pm]');
        if (!b) return;
        const pm = b.getAttribute('data-pm');
        $$('#pmTabs button').forEach(x => x.classList.toggle('on', x === b));
        const id = location.hash.split('/')[2];
        const s = skillOf(id);
        if (!s) return;
        $('#cmdTxt').textContent = cmdFor(pm, s.name);
        const sp = $('#stickyPm'); if (sp) sp.textContent = pm;
        $('#panelFoot').textContent = '命令已按 ' + pm + ' 生成 · 复制后到项目根目录执行。';
        $$('[data-copy]').forEach(x => x.setAttribute('data-pm-current', pm));
      });
    }

    // 排查表折叠
    const tr = $('#trouble');
    if (tr) {
      $('.trouble-head', tr).addEventListener('click', () => {
        const on = tr.classList.toggle('open');
        $('.trouble-head', tr).setAttribute('aria-expanded', String(on));
      });
      tr.classList.add('open');
    }

    // 复制
    $$('[data-copy]').forEach(btn => btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-copy');
      const pm = btn.getAttribute('data-pm-current') || detectPM();
      copyCmd(cmdFor(pm, name), btn);
    }));
    $$('[data-copy-btn]').forEach(btn => btn.addEventListener('click', () => {
      const txt = $('#cmdTxt').textContent;
      copyCmd(txt, null);
    }));
    $$('[data-copy-raw]').forEach(btn => btn.addEventListener('click', () => {
      copyCmd(btn.getAttribute('data-copy-raw'), btn);
    }));

    // 原始 SKILL.md 折叠展开
    $$('[data-fold]').forEach(btn => btn.addEventListener('click', () => {
      const box = $('#mdRaw');
      if (!box) return;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      box.hidden = open;
      btn.classList.toggle('on', !open);
    }));

    // 表单
    const sf = $('#submitForm');
    if (sf) sf.addEventListener('submit', (e) => {
      e.preventDefault();
      toast('已收到，仓库会进入采集队列', 'ok');
      sf.reset();
    });
    const ff = $('#fbForm');
    if (ff) ff.addEventListener('submit', (e) => {
      e.preventDefault();
      toast('反馈已提交，我们会复核后回复', 'ok');
      ff.reset();
    });

    // 卡片鼠标位置（光晕效果）
    $$('.domain-card').forEach(c => {
      c.addEventListener('mousemove', (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  function refreshSearch() {
    const p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.domain) p.set('domain', state.domain);
    if (state.license) p.set('license', state.license);
    // 排序也要进 URL，否则刷新后回落到默认排序
    if (state.sort && state.sort !== 'relevance') p.set('sort', state.sort);
    const qs = p.toString();
    history.replaceState(null, '', '#/search' + (qs ? '?' + qs : ''));

    const f = $('#filters');
    if (f) f.innerHTML = filterPanel();
    const dbody = $('#drawerBody');
    if (dbody) dbody.innerHTML = filterPanel();

    const list = searchSkills();
    const area = $('#resArea');
    if (area) area.innerHTML = list.length
      ? '<div class="result-list">' + list.map(resultCard).join('') + '</div>'
      : emptyState(state.q);

    const c = $('.results-count');
    if (c) c.innerHTML = list.length + ' 个结果<small>' + (state.q ? '关键词「' + esc(state.q) + '」' : '全部 Skill') + '</small>';

    const af = $('.active-filters');
    if (af) {
      const n = filterCount();
      af.innerHTML = n ? af.innerHTML : '';
      if (n) {
        af.style.display = 'flex';
        af.innerHTML =
          (state.domain ? '<span class="filter-pill on">' + esc(domainOf(state.domain).name) + '<button data-un="domain" aria-label="移除">✕</button></span>' : '')
          + (state.license ? '<span class="filter-pill on">' + esc(state.license) + '<button data-un="license" aria-label="移除">✕</button></span>' : '')
          + (state.recent ? '<span class="filter-pill on">一周内更新<button data-un="recent" aria-label="移除">✕</button></span>' : '')
          + (state.safeOnly ? '<span class="filter-pill on">仅无高危<button data-un="safeOnly" aria-label="移除">✕</button></span>' : '');
        bindView('/search');
      } else af.style.display = 'none';
    }

    const ob = $('#openDrawer');
    if (ob) ob.textContent = '☰ 筛选' + (filterCount() ? ' ' + filterCount() : '');
  }

  /* ---------------- 移动端交互 ---------------- */

  function onceKey(e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const h = $('#heroSearch'); if (h) h.focus();
      document.removeEventListener('keydown', onceKey);
    }
  }

  function openMobileSearch() {
    $('#mobileSearchBar').classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => $('#mobileSearchInput').focus(), 100);
  }
  function closeMobileSearch() {
    const b = $('#mobileSearchBar');
    if (b) b.classList.remove('open');
    if (!$('.drawer.open')) document.body.style.overflow = '';
  }

  function openDrawer() {
    $('#drawerBody').innerHTML = filterPanel();
    $('#filterDrawer').classList.add('open');
    $('#drawerMask').classList.add('open');
    $('#filterDrawer').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    $('#filterDrawer').classList.remove('open');
    $('#drawerMask').classList.remove('open');
    $('#filterDrawer').setAttribute('aria-hidden', 'true');
    if (!$('#mobileSearchBar').classList.contains('open')) document.body.style.overflow = '';
  }

  /* ---------------- 启动 ---------------- */

  $('#topbarSearchBtn').addEventListener('click', openMobileSearch);
  $('#mobileSearchBack').addEventListener('click', closeMobileSearch);
  $('#mobileSearchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      location.hash = '#/search?q=' + encodeURIComponent(e.target.value.trim());
      closeMobileSearch();
    }
  });

  $('#navToggle').addEventListener('click', function () {
    const nav = $('#navDesktop');
    const on = nav.classList.toggle('open');
    this.setAttribute('aria-expanded', String(on));
  });
  $$('#navDesktop a').forEach(a => a.addEventListener('click', () => {
    $('#navDesktop').classList.remove('open');
    $('#navToggle').setAttribute('aria-expanded', 'false');
  }));

  $('#drawerClose').addEventListener('click', closeDrawer);
  $('#drawerMask').addEventListener('click', closeDrawer);
  $('#drawerReset').addEventListener('click', () => {
    state.domain = state.license = null; state.safeOnly = state.recent = false;
    refreshSearch(); closeDrawer();
  });
  $('#drawerApply').addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeDrawer(); closeMobileSearch(); }
  });

  window.addEventListener('hashchange', render);
  if (!location.hash) location.hash = '#/';
  render();
})();
