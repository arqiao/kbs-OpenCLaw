// 多语言配置
const I18N = {
  zh: {
    // 站点信息
    siteName: 'OpenClaw 知识库',
    siteDesc: 'ClawdBot / OpenClaw 中文知识库',
    // 导航
    home: '首页',
    product: '产品认知',
    deploy: '安装部署',
    config: '配置与技巧',
    integration: '生态集成',
    practice: '应用实战',
    trends: '趋势展望',
    articles: '精选文章',
    // 产品认知子菜单
    concepts: '核心概念',
    architecture: '架构原理',
    comparison: '竞品对比',
    scenarios: '适用场景',
    // 安装部署子菜单
    macos: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    docker: 'Docker',
    cloudCn: '国内云',
    cloudIntl: '国际云',
    nas: 'NAS',
    mobile: '手机端',
    // 配置与技巧子菜单
    mcp: 'MCP配置',
    prompt: 'Prompt优化',
    memory: '记忆管理',
    plugins: '插件扩展',
    // 生态集成子菜单
    feishu: '飞书对接',
    wechat: '微信对接',
    automation: '自动化工具',
    api: 'API开发',
    // 应用实战子菜单
    office: '办公自动化',
    dev: '开发辅助',
    content: '内容创作',
    data: '数据处理',
    // 趋势展望子菜单
    history: '发展历程',
    versions: '版本演进',
    industry: '行业动态',
    future: '未来方向',
    // 文章页面
    articlesTitle: '精选文章',
    articlesDesc: '精选原始文章，支持分类筛选、搜索、排序',
    totalArticles: '文章总数',
    currentFilter: '当前筛选',
    sourceCount: '来源数',
    categoryCount: '分类数',
    allCategories: '全部分类',
    allSubCategories: '全部二级',
    allDepths: '全部深度',
    searchPlaceholder: '搜索标题/来源/摘要...',
    total: '共',
    articles_unit: '篇',
    newestFirst: '最新优先',
    oldestFirst: '最早优先',
    hotnessFirst: '热度优先',
    mostWords: '字数最多',
    noMatch: '没有匹配的文章',
    words: '字',
    hotness: '热度',
    // 语言切换
    currentLang: '中文',
    switchLang: 'English',
    // 首页
    homeTitle: '欢迎来到 OpenClaw 知识库',
    homeDesc: '全面了解 ClawdBot / OpenClaw 智能体',
    // 通用
    learnMore: '了解更多',
    relatedArticles: '相关文章',
    comingSoon: '内容正在整理中...',
    // 首页卡片描述
    productDesc: '了解 OpenClaw 的核心概念、架构原理、与竞品对比及适用场景',
    deployDesc: 'macOS / Windows / Linux / Docker / 云平台 / NAS / 手机端部署指南',
    configDesc: 'MCP 配置、Prompt 优化、记忆管理、插件扩展等进阶技巧',
    integrationDesc: '飞书、微信对接，n8n 自动化工具，API 开发指南',
    practiceDesc: '办公自动化、开发辅助、内容创作、数据处理实战案例',
    trendsDesc: 'OpenClaw 发展历程、版本演进、行业动态与未来方向',
    // 产品认知子页面
    conceptsDesc: 'OpenClaw 是什么？核心理念与设计哲学',
    architectureDesc: '底层架构解析，运行机制与技术栈',
    comparisonDesc: '与其他 AI Agent 方案的对比分析',
    scenariosDesc: 'OpenClaw 能做什么？典型应用场景',
    // 安装部署子页面
    macosDesc: 'macOS 本地安装与配置指南',
    windowsDesc: 'Windows 本地安装与配置指南',
    linuxDesc: 'Linux 本地安装与配置指南',
    dockerDesc: 'Docker 容器化部署方案',
    cloudCnDesc: '阿里云、腾讯云等国内云平台部署',
    cloudIntlDesc: 'AWS、Azure 等国际云平台部署',
    nasDesc: '群晖等 NAS 设备部署方案',
    mobileDesc: '手机端远程访问配置',
    // 配置与技巧子页面
    mcpDesc: 'MCP 服务器配置与调优',
    promptDesc: 'Prompt 编写技巧与优化',
    memoryDesc: '记忆系统配置与管理',
    pluginsDesc: '插件安装与扩展开发',
    // 生态集成子页面
    feishuDesc: '飞书机器人对接方案',
    wechatDesc: '微信机器人对接方案',
    automationDesc: 'n8n 等自动化工具集成',
    apiDesc: 'API 开发与调用指南',
    // 应用实战子页面
    officeDesc: '日报、周报、文档自动化',
    devDesc: '代码生成、调试、重构辅助',
    contentDesc: '文章、视频脚本创作',
    dataDesc: '数据分析与处理案例',
    // 趋势展望子页面
    historyDesc: 'OpenClaw 的发展历程',
    versionsDesc: '版本更新与功能演进',
    industryDesc: 'AI Agent 行业动态',
    futureDesc: '技术趋势与未来展望',
  },
  en: {
    // Site info
    siteName: 'OpenClaw KB',
    siteDesc: 'ClawdBot / OpenClaw Knowledge Base',
    // Navigation
    home: 'Home',
    product: 'Product',
    deploy: 'Deploy',
    config: 'Config',
    integration: 'Integration',
    practice: 'Practice',
    trends: 'Trends',
    articles: 'Articles',
    // Product submenu
    concepts: 'Concepts',
    architecture: 'Architecture',
    comparison: 'Comparison',
    scenarios: 'Scenarios',
    // Deploy submenu
    macos: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    docker: 'Docker',
    cloudCn: 'China Cloud',
    cloudIntl: 'Global Cloud',
    nas: 'NAS',
    mobile: 'Mobile',
    // Config submenu
    mcp: 'MCP Setup',
    prompt: 'Prompt Tips',
    memory: 'Memory',
    plugins: 'Plugins',
    // Integration submenu
    feishu: 'Feishu',
    wechat: 'WeChat',
    automation: 'Automation',
    api: 'API Dev',
    // Practice submenu
    office: 'Office',
    dev: 'Dev Tools',
    content: 'Content',
    data: 'Data',
    // Trends submenu
    history: 'History',
    versions: 'Versions',
    industry: 'Industry',
    future: 'Future',
    // Articles page
    articlesTitle: 'Featured Articles',
    articlesDesc: 'Curated articles with filtering, search and sorting',
    totalArticles: 'Total',
    currentFilter: 'Filtered',
    sourceCount: 'Sources',
    categoryCount: 'Categories',
    allCategories: 'All Categories',
    allSubCategories: 'All Sub',
    allDepths: 'All Depths',
    searchPlaceholder: 'Search title/source/summary...',
    total: '',
    articles_unit: ' articles',
    newestFirst: 'Newest',
    oldestFirst: 'Oldest',
    hotnessFirst: 'Hottest',
    mostWords: 'Longest',
    noMatch: 'No matching articles',
    words: ' words',
    hotness: 'Hot',
    // Language switch
    currentLang: 'EN',
    switchLang: '中文',
    // Home
    homeTitle: 'Welcome to OpenClaw KB',
    homeDesc: 'Learn about ClawdBot / OpenClaw Agent',
    // Common
    learnMore: 'Learn More',
    relatedArticles: 'Related Articles',
    comingSoon: 'Content coming soon...',
    // Home card descriptions
    productDesc: 'Core concepts, architecture, comparison and use cases of OpenClaw',
    deployDesc: 'Deploy on macOS / Windows / Linux / Docker / Cloud / NAS / Mobile',
    configDesc: 'MCP setup, Prompt tips, Memory management, Plugin extensions',
    integrationDesc: 'Feishu, WeChat integration, n8n automation, API development',
    practiceDesc: 'Office automation, Dev tools, Content creation, Data processing',
    trendsDesc: 'OpenClaw history, version evolution, industry trends and future',
    // Product subpages
    conceptsDesc: 'What is OpenClaw? Core philosophy and design principles',
    architectureDesc: 'Architecture analysis, runtime mechanism and tech stack',
    comparisonDesc: 'Comparison with other AI Agent solutions',
    scenariosDesc: 'What can OpenClaw do? Typical use cases',
    // Deploy subpages
    macosDesc: 'macOS local installation and configuration guide',
    windowsDesc: 'Windows local installation and configuration guide',
    linuxDesc: 'Linux local installation and configuration guide',
    dockerDesc: 'Docker containerized deployment',
    cloudCnDesc: 'Deploy on Aliyun, Tencent Cloud and other China clouds',
    cloudIntlDesc: 'Deploy on AWS, Azure and other global clouds',
    nasDesc: 'Deploy on Synology and other NAS devices',
    mobileDesc: 'Mobile remote access configuration',
    // Config subpages
    mcpDesc: 'MCP server configuration and tuning',
    promptDesc: 'Prompt writing tips and optimization',
    memoryDesc: 'Memory system configuration and management',
    pluginsDesc: 'Plugin installation and extension development',
    // Integration subpages
    feishuDesc: 'Feishu bot integration',
    wechatDesc: 'WeChat bot integration',
    automationDesc: 'n8n and other automation tools integration',
    apiDesc: 'API development and usage guide',
    // Practice subpages
    officeDesc: 'Daily reports, weekly reports, document automation',
    devDesc: 'Code generation, debugging, refactoring assistance',
    contentDesc: 'Article and video script creation',
    dataDesc: 'Data analysis and processing cases',
    // Trends subpages
    historyDesc: 'OpenClaw development history',
    versionsDesc: 'Version updates and feature evolution',
    industryDesc: 'AI Agent industry trends',
    futureDesc: 'Technology trends and future outlook',
  }
};

// 当前语言
let currentLang = localStorage.getItem('lang') || 'zh';

// 获取翻译
function t(key) {
  return I18N[currentLang]?.[key] || I18N.zh[key] || key;
}

// 切换语言
function switchLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('lang', currentLang);
  // 触发页面更新
  if (typeof onLanguageChange === 'function') {
    onLanguageChange(currentLang);
  } else {
    location.reload();
  }
}

// 获取当前语言
function getLang() {
  return currentLang;
}
