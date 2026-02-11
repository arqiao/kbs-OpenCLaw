// 导航渲染和主题切换
let NAV_DATA = null;

async function loadNav() {
    const resp = await fetch('nav.json');
    NAV_DATA = await resp.json();
    renderNav();
}

function getBasePath() {
    // 根据当前页面深度计算相对路径
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    if (path.includes('/site/')) {
        const afterSite = path.split('/site/')[1] || '';
        const subDepth = (afterSite.match(/\//g) || []).length;
        return '../'.repeat(subDepth) || './';
    }
    return './';
}

function renderNav() {
    const base = getBasePath();
    const currentPath = window.location.pathname;

    let html = `<span class="site-logo">${NAV_DATA.site_name}</span>`;
    html += '<nav class="site-nav">';

    for (const item of NAV_DATA.nav) {
        const isActive = currentPath.includes(item.path.replace('index.html', ''));
        const hasSub = item.sub && item.sub.length > 0;

        html += '<div class="nav-item">';
        if (hasSub) {
            html += `<a href="${base}${item.path}" class="${isActive ? 'active' : ''}">${item.name}</a>`;
            html += '<div class="nav-dropdown">';
            for (const sub of item.sub) {
                html += `<a href="${base}${sub.path}">${sub.name}</a>`;
            }
            html += '</div>';
        } else {
            html += `<a href="${base}${item.path}" class="${isActive ? 'active' : ''}">${item.name}</a>`;
        }
        html += '</div>';
    }

    html += '</nav>';
    html += '<button class="theme-toggle" onclick="toggleTheme()">🌙</button>';

    document.getElementById('site-header').innerHTML = html;
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const btn = document.querySelector('.theme-toggle');
    const isDark = document.documentElement.classList.contains('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
    loadNav();
});
