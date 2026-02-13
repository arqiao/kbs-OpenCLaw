// 导航渲染和主题切换
let NAV_DATA = null;

// 导航项的 i18n key 映射
const NAV_I18N_MAP = {
  '首页': 'home',
  '产品认知': 'product',
  '安装部署': 'deploy',
  '配置与技巧': 'config',
  '生态集成': 'integration',
  '应用实战': 'practice',
  '趋势展望': 'trends',
  '精选文章': 'articles',
  '核心概念': 'concepts',
  '架构原理': 'architecture',
  '竞品对比': 'comparison',
  '适用场景': 'scenarios',
  'macOS': 'macos',
  'Windows': 'windows',
  'Linux': 'linux',
  'Docker': 'docker',
  '国内云': 'cloudCn',
  '国际云': 'cloudIntl',
  'NAS': 'nas',
  '手机端': 'mobile',
  'MCP配置': 'mcp',
  'Prompt优化': 'prompt',
  '记忆管理': 'memory',
  '插件扩展': 'plugins',
  '飞书对接': 'feishu',
  '微信对接': 'wechat',
  '自动化工具': 'automation',
  'API开发': 'api',
  '办公自动化': 'office',
  '开发辅助': 'dev',
  '内容创作': 'content',
  '数据处理': 'data',
  '发展历程': 'history',
  '版本演进': 'versions',
  '行业动态': 'industry',
  '未来方向': 'future',
};

async function loadNav() {
  const base = getBasePath();
  const resp = await fetch(base + 'nav.json');
  NAV_DATA = await resp.json();
  renderNav();
}

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/site/')) {
    const afterSite = path.split('/site/')[1] || '';
    const subDepth = (afterSite.match(/\//g) || []).length;
    return '../'.repeat(subDepth) || './';
  }
  // 本地文件或根目录
  const segments = path.split('/').filter(s => s && !s.includes('.'));
  return '../'.repeat(segments.length) || './';
}

function getNavText(name) {
  const key = NAV_I18N_MAP[name];
  return key ? t(key) : name;
}

function renderNav() {
  const base = getBasePath();
  const currentPath = window.location.pathname;

  // 移动端：logo + 工具栏（含导航下拉）
  let html = `
    <span class="site-logo">${t('siteName')}</span>
    <div class="header-tools mobile-tools">
      <div class="nav-dropdown-wrapper" id="nav-dropdown">
        <button class="nav-menu-btn" onclick="toggleNavDropdown(event)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <div class="nav-menu">
  `;

  for (const item of NAV_DATA.nav) {
    if (item.name === '精选文章') continue;
    const isActive = currentPath.includes(item.path.replace('index.html', ''));
    html += `<a href="${base}${item.path}" class="${isActive ? 'active' : ''}">${getNavText(item.name)}</a>`;
  }

  html += `
        </div>
      </div>
      <div class="lang-dropdown" id="lang-dropdown-mobile">
        <button class="lang-btn" onclick="toggleLangDropdown(event, 'mobile')">
          <svg class="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
          </svg>
          <svg class="lang-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="lang-menu">
          <a href="#" onclick="selectLanguage('zh', event)" class="${currentLang === 'zh' ? 'active' : ''}">中文</a>
          <a href="#" onclick="selectLanguage('en', event)" class="${currentLang === 'en' ? 'active' : ''}">English</a>
        </div>
      </div>
      <button class="theme-toggle" onclick="toggleTheme()">🌙</button>
    </div>
  `;

  // 桌面端导航
  html += '<nav class="site-nav desktop-nav">';
  for (const item of NAV_DATA.nav) {
    if (item.name === '精选文章') continue;
    const isActive = currentPath.includes(item.path.replace('index.html', ''));
    const hasSub = item.sub && item.sub.length > 0;

    html += '<div class="nav-item">';
    if (hasSub) {
      html += `<a href="${base}${item.path}" class="${isActive ? 'active' : ''}">${getNavText(item.name)}</a>`;
      html += '<div class="nav-dropdown">';
      for (const sub of item.sub) {
        html += `<a href="${base}${sub.path}">${getNavText(sub.name)}</a>`;
      }
      html += '</div>';
    } else {
      html += `<a href="${base}${item.path}" class="${isActive ? 'active' : ''}">${getNavText(item.name)}</a>`;
    }
    html += '</div>';
  }
  html += '</nav>';

  // 桌面端右侧工具栏
  html += `
    <div class="header-tools desktop-tools">
      <div class="lang-dropdown" id="lang-dropdown-desktop">
        <button class="lang-btn" onclick="toggleLangDropdown(event, 'desktop')">
          <svg class="lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
          </svg>
          <span class="lang-text">${t('currentLang')}</span>
          <svg class="lang-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="lang-menu">
          <a href="#" onclick="selectLanguage('zh', event)" class="${currentLang === 'zh' ? 'active' : ''}">中文</a>
          <a href="#" onclick="selectLanguage('en', event)" class="${currentLang === 'en' ? 'active' : ''}">English</a>
        </div>
      </div>
      <button class="theme-toggle" onclick="toggleTheme()">🌙</button>
    </div>
  `;

  document.getElementById('site-header').innerHTML = html;
  updateThemeButton();
}

function toggleNavDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById('nav-dropdown');
  dropdown.classList.toggle('open');
}

function toggleLangDropdown(event, type) {
  event.stopPropagation();
  const id = type === 'desktop' ? 'lang-dropdown-desktop' : 'lang-dropdown-mobile';
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('open');
}

function selectLanguage(lang, event) {
  event.preventDefault();
  event.stopPropagation();
  if (lang !== currentLang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    if (typeof onLanguageChange === 'function') {
      onLanguageChange(lang);
    } else {
      location.reload();
    }
  }
  // 关闭所有语言下拉菜单
  document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('open'));
}

// 点击外部关闭下拉菜单
document.addEventListener('click', (e) => {
  document.querySelectorAll('.lang-dropdown').forEach(d => {
    if (!d.contains(e.target)) d.classList.remove('open');
  });
  const navDropdown = document.getElementById('nav-dropdown');
  if (navDropdown && !navDropdown.contains(e.target)) {
    navDropdown.classList.remove('open');
  }
});

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    const isDark = document.documentElement.classList.contains('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
  }
}

// 语言变化回调（可被页面覆盖）
function onLanguageChange(lang) {
  renderNav();
  // 页面可以定义自己的 updatePageLanguage 函数
  if (typeof updatePageLanguage === 'function') {
    updatePageLanguage(lang);
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  // 主题
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
  // 语言
  const savedLang = localStorage.getItem('lang');
  if (savedLang && typeof currentLang !== 'undefined') {
    currentLang = savedLang;
  }
  loadNav();
});
