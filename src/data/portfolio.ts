export const profile = {
  name: 'PUNDALIK MHAMAL',
  initials: 'PM',
  role: 'Senior Associate QA Engineer',
  company: 'Light & Wonder',
  tagline: 'iGaming · Automation · AI Testing',
  email: 'pundalik.mhamal.work@gmail.com',
  phone: '+91 98907 03905',
  github: 'https://github.com/Iampundalik',
  linkedin: 'https://linkedin.com/in/iampundalik',
  location: 'Goa, India · Remote / Hybrid / Open to Relocation',
  summary:
    '3+ years engineering quality at scale. Playwright, Selenium, API testing, CI/CD pipelines — with hands-on knowledge in AI-assisted testing, Kubernetes, networking, and DSA. ISTQB Certified. GLI compliant. Promotion-proven at Light & Wonder.',
};

export const metrics = [
  { v: '3+', l: 'Years XP' },
  { v: 'ISTQB', l: 'Certified' },
  { v: 'iGaming', l: 'Domain' },
  { v: 'AI+', l: 'Test Methods' },
];

export const tickerItems = [
  'Playwright', 'Selenium', 'Python', 'BDD / Cucumber', 'Postman', 'REST API',
  'Jenkins CI/CD', 'Azure DevOps', 'iGaming QA', 'GLI Compliance',
  'ISTQB Certified', 'TestRail', 'Kubernetes', 'AI Testing', 'DSA',
  'Linux', 'SQL / SSMS', 'Agile Scrum',
];

export type SkillCard = {
  icon: string;
  title: string;
  desc: string;
  tags: { label: string; tone: 'b' | 'g' | 'o' | 'w' }[];
  span: 8 | 6 | 4 | 3;
  delay?: number;
};

export const skills: SkillCard[] = [
  {
    icon: 'flask',
    title: 'MANUAL & FUNCTIONAL TESTING',
    desc: 'Test planning, risk-based strategies, exploratory sessions, defect lifecycle, structured documentation. SDLC/STLC ownership end to end.',
    tags: [
      { label: 'Test Planning', tone: 'g' }, { label: 'BDD', tone: 'g' },
      { label: 'TDD', tone: 'g' }, { label: 'Exploratory', tone: 'g' },
      { label: 'Risk-Based', tone: 'g' }, { label: 'Regression', tone: 'g' },
      { label: 'Smoke & Sanity', tone: 'g' }, { label: 'STLC', tone: 'g' },
    ],
    span: 8,
  },
  {
    icon: 'count',
    title: '3+ YEARS',
    desc: 'Years shipping quality',
    tags: [
      { label: 'iGaming', tone: 'b' }, { label: 'RPA', tone: 'b' },
      { label: 'Enterprise', tone: 'b' },
    ],
    span: 4,
  },
  {
    icon: 'theater',
    title: 'PLAYWRIGHT',
    desc: 'Modern E2E automation. Async/parallel execution, network interception, cross-browser. TypeScript-native and CI-ready.',
    tags: [
      { label: 'Playwright', tone: 'b' }, { label: 'TypeScript', tone: 'b' },
      { label: 'Cross-Browser', tone: 'b' }, { label: 'E2E', tone: 'b' },
    ],
    span: 4,
  },
  {
    icon: 'bot',
    title: 'SELENIUM AUTOMATION',
    desc: 'Python + Selenium POM frameworks. BDD with Cucumber. CI pipeline integration. Scalable, maintainable test architecture.',
    tags: [
      { label: 'Selenium', tone: 'b' }, { label: 'Python', tone: 'b' },
      { label: 'POM', tone: 'b' }, { label: 'Cucumber', tone: 'b' },
    ],
    span: 4,
  },
  {
    icon: 'zap',
    title: 'API TESTING',
    desc: 'REST & SOAP validation — schema, auth flows, negative cases, contract testing, data integrity checks.',
    tags: [
      { label: 'Postman', tone: 'o' }, { label: 'REST/SOAP', tone: 'o' },
      { label: 'RestAssured', tone: 'o' }, { label: 'Swagger', tone: 'o' },
    ],
    span: 4,
  },
  {
    icon: 'brain',
    title: 'AI-ASSISTED TESTING',
    desc: 'LLM-based test case generation, intelligent coverage gap analysis, anomaly detection in RNG outputs, visual regression using AI. Reduces regression cycle time and increases defect detection rate.',
    tags: [
      { label: 'AI Test Generation', tone: 'b' }, { label: 'LLM Eval', tone: 'b' },
      { label: 'Visual AI', tone: 'b' }, { label: 'Anomaly Detection', tone: 'b' },
    ],
    span: 6,
  },
  {
    icon: 'cloud',
    title: 'KUBERNETES & CLOUD',
    desc: 'Containerised test environments with Kubernetes and Docker. Scalable, isolated, repeatable infrastructure. Networking fundamentals — TCP/IP, DNS, load balancing — for distributed system QA.',
    tags: [
      { label: 'Kubernetes', tone: 'g' }, { label: 'Docker', tone: 'g' },
      { label: 'TCP/IP', tone: 'g' }, { label: 'DNS', tone: 'g' },
      { label: 'Load Balancing', tone: 'g' },
    ],
    span: 6,
  },
  {
    icon: 'dice',
    title: 'IGAMING DOMAIN',
    desc: 'Casino slot QA — RNG, paytables, free spins, jackpots. GLI standards. GDK / Crucible multi-provider expertise.',
    tags: [
      { label: 'GDK / Crucible', tone: 'o' }, { label: 'GLI', tone: 'o' },
      { label: 'Slots', tone: 'o' },
    ],
    span: 4,
  },
  {
    icon: 'graph',
    title: 'DSA',
    desc: 'Data Structures & Algorithms — arrays, trees, graphs, dynamic programming. Applied to efficient automation code and test logic.',
    tags: [
      { label: 'Arrays', tone: 'w' }, { label: 'Trees', tone: 'w' },
      { label: 'Graphs', tone: 'w' }, { label: 'DP', tone: 'w' },
    ],
    span: 4,
  },
  {
    icon: 'rocket',
    title: 'DEVOPS & CI/CD',
    desc: 'QA integrated into delivery pipelines. Independent build deployments, log analysis, and env debugging without dev dependency.',
    tags: [
      { label: 'Jenkins', tone: 'w' }, { label: 'Azure DevOps', tone: 'w' },
      { label: 'Git', tone: 'w' }, { label: 'Linux', tone: 'w' },
    ],
    span: 4,
  },
];

export const experience = [
  {
    period: 'July 2024 – Present',
    badges: [{ label: 'CURRENT', tone: 'live' as const }, { label: 'PROMOTED', tone: 'promo' as const }],
    company: 'Light & Wonder',
    role: 'Senior Associate QA Engineer — iGaming · Pune (Hybrid)',
    bullets: [
      'Lead game testing for Lightning Box, Big Time Gaming, ReelPlay, Boomerang, Crucible, HotRise Games and more — promoted for consistent delivery excellence.',
      'Built and enhanced BDD automation framework (Playwright + Cucumber) integrated into Jenkins CI/CD pipelines.',
      'Authored Test Plans, Testing Guides, and full test coverage from Game Spec Docs. Onboarding and mentoring junior QA engineers.',
      'Independently deploys Client, BetSettings & Game Server builds — resolves complex environment issues without dev support.',
      'Applied AI-assisted testing techniques — reduced regression cycle time, increased defect detection rate.',
      'XPath/XML log analysis for RNG validation; detailed JIRA defect reports with full reproduction steps.',
    ],
    foot: 'Playwright · BDD · GLI Compliance · Jenkins · AI Testing · GDK',
    footTone: 'g' as const,
    accent: 'blue' as const,
  },
  {
    period: 'Feb 2023 – Jul 2024',
    badges: [],
    company: 'Claysys Technologies',
    role: 'Software Test Engineer — RPA Product · Goa (Remote)',
    bullets: [
      'Full test ownership for RPA Genie — functional, reliability, and performance test coverage creation and execution.',
      'Regression, functional, and integration testing via Azure DevOps TFS across sprint cycles.',
      'Systematic defect reporting in Agile workflow — drove a measured 72% quality improvement across product releases.',
      'Daily scrums and sprint planning — QA fully aligned with delivery cycles from day one.',
      'Client incident ticket resolution maintaining consistently high satisfaction scores.',
    ],
    foot: 'Azure DevOps · UIPath RPA · Agile · 72% Quality Improvement',
    footTone: 'b' as const,
    accent: 'green' as const,
  },
];

export type Tool = { name: string; level: 'e' | 'p' | 'l' };
export const stack: { cat: string; tools: Tool[] }[] = [
  {
    cat: 'E2E & UI Automation',
    tools: [
      { name: 'Playwright', level: 'e' }, { name: 'Selenium', level: 'e' },
      { name: 'Cypress', level: 'p' }, { name: 'WebdriverIO', level: 'p' },
      { name: 'Puppeteer', level: 'p' }, { name: 'TestCafe', level: 'l' },
      { name: 'Appium (Mobile)', level: 'l' }, { name: 'Robot Framework', level: 'l' },
    ],
  },
  {
    cat: 'BDD, Languages & Unit',
    tools: [
      { name: 'Python', level: 'e' }, { name: 'TypeScript', level: 'e' },
      { name: 'JavaScript', level: 'e' }, { name: 'Cucumber / BDD', level: 'e' },
      { name: 'pytest', level: 'p' }, { name: 'Jest', level: 'p' },
      { name: 'Vitest', level: 'p' }, { name: 'Java (RestAssured)', level: 'p' },
    ],
  },
  {
    cat: 'API, Contract & Performance',
    tools: [
      { name: 'Postman', level: 'e' }, { name: 'REST / GraphQL', level: 'e' },
      { name: 'RestAssured', level: 'p' }, { name: 'Newman', level: 'p' },
      { name: 'Pact (Contract)', level: 'p' }, { name: 'Swagger / OpenAPI', level: 'p' },
      { name: 'k6', level: 'p' }, { name: 'JMeter', level: 'p' },
      { name: 'Locust', level: 'l' }, { name: 'Artillery', level: 'l' },
    ],
  },
  {
    cat: 'CI/CD, Cloud & Infrastructure',
    tools: [
      { name: 'Jenkins', level: 'e' }, { name: 'Azure DevOps', level: 'e' },
      { name: 'GitHub Actions', level: 'p' }, { name: 'GitLab CI', level: 'p' },
      { name: 'CircleCI', level: 'p' }, { name: 'Argo CD', level: 'l' },
      { name: 'Docker', level: 'p' }, { name: 'Kubernetes', level: 'p' },
      { name: 'Terraform', level: 'l' }, { name: 'AWS', level: 'p' },
      { name: 'Azure', level: 'p' }, { name: 'Linux', level: 'e' },
    ],
  },
  {
    cat: 'Reporting, Tracking & Observability',
    tools: [
      { name: 'JIRA', level: 'e' }, { name: 'TestRail', level: 'e' },
      { name: 'Zephyr Scale', level: 'p' }, { name: 'Xray', level: 'p' },
      { name: 'Confluence', level: 'p' }, { name: 'Allure Report', level: 'p' },
      { name: 'Datadog', level: 'l' }, { name: 'Grafana', level: 'l' },
      { name: 'Sentry', level: 'l' }, { name: 'New Relic', level: 'l' },
    ],
  },
  {
    cat: 'Cross-Browser, Visual & Accessibility',
    tools: [
      { name: 'BrowserStack', level: 'p' }, { name: 'Sauce Labs', level: 'p' },
      { name: 'LambdaTest', level: 'p' }, { name: 'Percy (Visual)', level: 'p' },
      { name: 'Applitools', level: 'l' }, { name: 'Chromatic', level: 'l' },
      { name: 'axe-core (a11y)', level: 'p' }, { name: 'Lighthouse', level: 'p' },
    ],
  },
  {
    cat: 'AI, Data & Modern QA',
    tools: [
      { name: 'AI Test Generation (LLM)', level: 'p' }, { name: 'Visual AI / ML', level: 'l' },
      { name: 'GitHub Copilot', level: 'p' }, { name: 'ChatGPT for QA', level: 'p' },
      { name: 'Anomaly Detection', level: 'l' }, { name: 'Model Validation', level: 'l' },
      { name: 'SQL / SSMS', level: 'p' }, { name: 'Kafka (Event QA)', level: 'l' },
    ],
  },
  {
    cat: 'Security, Networking & Foundations',
    tools: [
      { name: 'OWASP ZAP', level: 'l' }, { name: 'Burp Suite', level: 'l' },
      { name: 'Networking (TCP/IP)', level: 'p' }, { name: 'DNS / Load Balancing', level: 'p' },
      { name: 'DSA', level: 'p' }, { name: 'C/C++', level: 'l' },
      { name: 'Git / Bitbucket', level: 'e' }, { name: 'UIPath RPA', level: 'p' },
    ],
  },
];

export const projects = [
  {
    name: 'SwagLabs Automation Framework',
    desc: 'E2E test automation for e-commerce using Python + Selenium POM. Full checkout, cart, and auth flow coverage. CI-integrated and maintainable at scale.',
    tags: [
      { label: 'Python', tone: 'g' as const }, { label: 'Selenium', tone: 'g' as const },
      { label: 'POM', tone: 'g' as const }, { label: 'E2E', tone: 'g' as const },
    ],
    href: 'https://github.com/Iampundalik',
    accent: '#00ff9d',
    image: 'dashboard',
  },
  {
    name: 'Flipkart DataScrapper',
    desc: 'Web scraping automation using Selenium WebDriver. Structured product data extraction, error handling, anti-detection patterns, clean JSON output.',
    tags: [
      { label: 'Python', tone: 'b' as const }, { label: 'Selenium', tone: 'b' as const },
      { label: 'Web Scraping', tone: 'b' as const },
    ],
    href: 'https://github.com/Iampundalik',
    accent: '#00d4ff',
    image: 'terminal',
  },
  {
    name: 'Playwright BDD Framework',
    desc: 'E2E framework using Playwright + Cucumber BDD. Parallel execution, cross-browser support, HTML reports, TypeScript POM architecture, CI/CD integrated.',
    tags: [
      { label: 'Playwright', tone: 'b' as const }, { label: 'TypeScript', tone: 'b' as const },
      { label: 'Cucumber', tone: 'b' as const }, { label: 'Parallel', tone: 'b' as const },
    ],
    href: 'https://github.com/Iampundalik',
    accent: '#00d4ff',
    image: 'browser',
  },
  {
    name: 'AI Test Generator — PoC',
    desc: 'Uses LLMs to auto-generate test cases from spec documents, intelligent test prioritization, and anomaly detection in iGaming RNG validation data.',
    tags: [
      { label: 'AI/LLM', tone: 'o' as const }, { label: 'Python', tone: 'o' as const },
      { label: 'Test Gen', tone: 'o' as const }, { label: 'iGaming', tone: 'o' as const },
    ],
    href: 'https://github.com/Iampundalik',
    accent: '#ff6b35',
    image: 'ai',
  },
];

export const certs = [
  { name: 'ISTQB Foundation Level', date: 'CERTIFIED · ACTIVE', star: true },
  { name: 'API Automation — RestAssured', date: 'APRIL 2024', star: false },
  { name: 'Agile & Scrum Fundamentals', date: 'FEB – MAR 2023', star: false },
  { name: 'Python Basics', date: 'JUN – SEP 2022', star: false },
  { name: 'BE — Bachelor of Engineering', date: 'GOA · 2018 – 2022', star: false },
  { name: 'Higher Secondary — PCM + CS', date: 'MAPUSA, GOA · 2016 – 2018', star: false },
];

export const navLinks = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'QA Lab' },
  { id: 'certs', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];
