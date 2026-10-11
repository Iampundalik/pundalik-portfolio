export const profile = {
  name: 'PUNDALIK MHAMAL',
  initials: 'PM',
  role: 'Senior Associate QA Engineer',
  company: 'Light & Wonder',
  tagline: 'iGaming · Automation · Mobile & Web',
  email: 'pundalik.mhamal.work@gmail.com',
  phone: '+91 98907 03905',
  github: 'https://github.com/Iampundalik',
  linkedin: 'https://linkedin.com/in/iampundalik',
  location: 'Goa, India · IST (UTC+5:30) · Remote / Hybrid / Open to Relocation',
  summary:
    'ISTQB-certified QA Engineer with 3.5 years across live, real-money gaming platforms and enterprise software — including 1.5 years fully remote across time zones. Manual and automation: functional, regression, integration and compatibility cycles on Android, iOS and web, a BDD suite wired into Jenkins CI/CD, and backend REST/SQL validation.',
};

export const metrics = [
  { v: '3.5+', l: 'Years XP' },
  { v: 'ISTQB', l: 'CTFL Certified' },
  { v: '7+', l: 'Studio Integrations' },
  { v: '1.5Y', l: 'Fully Remote' },
];

export const tickerItems = [
  'Selenium WebDriver', 'Cucumber / Gherkin', 'Python', 'Pytest', 'Allure Reporting',
  'Android & iOS QA', 'BrowserStack', 'Postman', 'RestAssured', 'REST API',
  'Jenkins CI/CD', 'Azure DevOps', 'SQL / SSMS', 'JIRA', 'TestRail',
  'GLI Compliance', 'ISTQB CTFL', 'Soak Testing', 'Live Production QA', 'Agile Scrum',
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
    title: 'Manual & Functional Testing',
    desc: 'End-to-end ownership of functional, regression, integration, compatibility and soak cycles on live real-money titles. Test plans, coverage matrices and exploratory charters authored in TestRail from product and math specs — with QA input at spec review, before implementation.',
    tags: [
      { label: 'Test Planning', tone: 'g' }, { label: 'Regression', tone: 'g' },
      { label: 'Integration', tone: 'g' }, { label: 'Compatibility', tone: 'g' },
      { label: 'Soak Testing', tone: 'g' }, { label: 'Exploratory', tone: 'g' },
      { label: 'Live Production QA', tone: 'g' }, { label: 'Release Validation', tone: 'g' },
    ],
    span: 8,
  },
  {
    icon: 'count',
    title: '3.5+ YEARS',
    desc: 'Years shipping quality',
    tags: [
      { label: 'iGaming', tone: 'b' }, { label: 'RPA', tone: 'b' },
      { label: 'Enterprise', tone: 'b' },
    ],
    span: 4,
  },
  {
    icon: 'bot',
    title: 'BDD Automation Framework',
    desc: 'Selenium + Cucumber + Gherkin + Python with Allure reporting, integrated into Jenkins CI/CD. Built and maintained in-house — expanded regression coverage ~40% and freed manual effort for deeper exploratory work.',
    tags: [
      { label: 'Selenium', tone: 'b' }, { label: 'Cucumber', tone: 'b' },
      { label: 'Python', tone: 'b' }, { label: 'Pytest', tone: 'b' },
      { label: 'Allure', tone: 'b' },
    ],
    span: 6,
  },
  {
    icon: 'phone',
    title: 'Mobile & Web QA',
    desc: 'Android and iOS clients alongside web — cross-device and OS-version compatibility, responsive behaviour, and client–server state consistency. BrowserStack for device coverage, Fiddler for network inspection.',
    tags: [
      { label: 'Android', tone: 'g' }, { label: 'iOS', tone: 'g' },
      { label: 'BrowserStack', tone: 'g' }, { label: 'Fiddler', tone: 'g' },
      { label: 'Responsive', tone: 'g' },
    ],
    span: 6,
  },
  {
    icon: 'zap',
    title: 'API & Database Validation',
    desc: 'Backend REST validation with Postman and RestAssured. Database state verified through SQL / SSMS for transactional correctness and client–server consistency.',
    tags: [
      { label: 'Postman', tone: 'o' }, { label: 'RestAssured', tone: 'o' },
      { label: 'REST API', tone: 'o' }, { label: 'SQL / SSMS', tone: 'o' },
    ],
    span: 4,
  },
  {
    icon: 'brain',
    title: 'AI-Assisted QA Tooling',
    desc: 'Built and rolled out an AI-assisted defect-intake tool — Spring Boot + Gemini API + Jira REST v2 — that cut the team’s bug-logging time from roughly 25 minutes to under 5.',
    tags: [
      { label: 'Spring Boot', tone: 'b' }, { label: 'Gemini API', tone: 'b' },
      { label: 'Jira REST v2', tone: 'b' }, { label: 'Java', tone: 'b' },
    ],
    span: 4,
  },
  {
    icon: 'dice',
    title: 'iGaming Domain',
    desc: 'Casino game QA across 7+ third-party studio integrations. Real-money platforms, math spec validation, GLI regulatory compliance testing.',
    tags: [
      { label: 'GLI Compliance', tone: 'o' }, { label: 'Real-Money', tone: 'o' },
      { label: 'Math Specs', tone: 'o' },
    ],
    span: 4,
  },
  {
    icon: 'rocket',
    title: 'CI/CD & Build Ownership',
    desc: 'Jenkins and Azure DevOps pipelines. Independently deploys and debugs client, settings and server builds without developer dependency — critical for unblocking work across time-zone gaps.',
    tags: [
      { label: 'Jenkins', tone: 'w' }, { label: 'Azure DevOps', tone: 'w' },
      { label: 'Git', tone: 'w' }, { label: 'Build Deploy', tone: 'w' },
    ],
    span: 6,
  },
  {
    icon: 'globe',
    title: 'Remote-Proven Delivery',
    desc: '1.5 years working fully remote across time zones — self-directed sprint execution, async written updates, no on-site supervision. Remote delivery is proven, not assumed.',
    tags: [
      { label: 'Async Comms', tone: 'w' }, { label: 'Self-Directed', tone: 'w' },
      { label: 'Distributed Teams', tone: 'w' },
    ],
    span: 6,
  },
];

export const experience = [
  {
    period: 'July 2024 – Present',
    badges: [{ label: 'CURRENT', tone: 'live' as const }, { label: 'PROMOTED', tone: 'promo' as const }],
    company: 'Light & Wonder',
    role: 'Senior Associate QA Engineer — Casino Game Platforms · Pune (Hybrid)',
    bullets: [
      'Own end-to-end QA for live, real-money titles from 7+ third-party studio integrations — functional, regression, integration, compatibility and soak testing across Android, iOS and web clients.',
      'Build and maintain a BDD automation framework (Selenium + Cucumber + Gherkin + Python, Allure reporting) integrated into Jenkins CI/CD — expanded regression coverage ~40% and freed manual effort for deeper exploratory work.',
      'Author test plans, coverage matrices and exploratory charters in TestRail from product and math specifications, contributing QA input at spec review before implementation.',
      'Validate backend REST APIs (Postman, RestAssured) and database state (SQL / SSMS) for transactional correctness and client–server state consistency.',
      'Log and track defects in JIRA with precise reproduction steps, severity and evidence; drive triage, re-test and closure with distributed engineering teams.',
      'Independently deploy and debug client, settings and server builds without developer dependency — critical for unblocking work across time-zone gaps.',
      'Built and rolled out an AI-assisted defect-intake tool (Spring Boot + Gemini API + Jira REST v2) that cut the team’s bug-logging time from ~25 minutes to under 5.',
    ],
    foot: 'Selenium · Cucumber BDD · Jenkins · GLI Compliance · Android / iOS · Gemini API',
    footTone: 'g' as const,
    accent: 'blue' as const,
  },
  {
    period: 'Feb 2023 – Jul 2024',
    badges: [{ label: '100% REMOTE', tone: 'promo' as const }],
    company: 'Claysys Technologies',
    role: 'Software Test Engineer — RPA Product Team · Goa (Fully Remote)',
    bullets: [
      'Delivered manual functional and regression testing for an enterprise RPA product across web and desktop as a fully remote team member — self-directed sprint execution, async written updates, no on-site supervision.',
      'Contributed to a 72% improvement in bug-detection efficiency through structured defect reporting and reproducible test documentation in Azure DevOps.',
      'Built API test suites in Postman and RestAssured; verified backend responses and data integrity with SQL.',
      'Participated in daily scrums and sprint planning, keeping QA aligned with delivery cycles across a distributed team.',
      'Resolved client incident tickets promptly and effectively, maintaining consistently high satisfaction scores.',
    ],
    foot: 'Azure DevOps · RPA · Postman · RestAssured · 72% Bug-Detection Gain',
    footTone: 'b' as const,
    accent: 'green' as const,
  },
];

export type Tool = { name: string; level: 'e' | 'p' | 'l' };
export const stack: { cat: string; tools: Tool[] }[] = [
  {
    cat: 'Test Automation',
    tools: [
      { name: 'Selenium WebDriver', level: 'e' }, { name: 'Cucumber / Gherkin BDD', level: 'e' },
      { name: 'Python', level: 'e' }, { name: 'Framework Design', level: 'e' },
      { name: 'Pytest', level: 'p' }, { name: 'RestAssured', level: 'p' },
      { name: 'Allure Reporting', level: 'p' }, { name: 'Playwright', level: 'l' },
      { name: 'Appium (Mobile)', level: 'l' }, { name: 'Robot Framework', level: 'l' },
    ],
  },
  {
    cat: 'Mobile & Web QA',
    tools: [
      { name: 'Android', level: 'e' }, { name: 'iOS', level: 'e' },
      { name: 'OS-Version Compatibility', level: 'e' }, { name: 'Client–Server Behaviour', level: 'e' },
      { name: 'BrowserStack', level: 'p' }, { name: 'Responsive Testing', level: 'p' },
      { name: 'Fiddler / Network', level: 'p' }, { name: 'Chrome DevTools', level: 'p' },
    ],
  },
  {
    cat: 'Test Types',
    tools: [
      { name: 'Functional', level: 'e' }, { name: 'Regression', level: 'e' },
      { name: 'Integration', level: 'e' }, { name: 'Compatibility', level: 'e' },
      { name: 'Exploratory', level: 'e' }, { name: 'Live Production QA', level: 'e' },
      { name: 'Release Validation', level: 'e' }, { name: 'Soak', level: 'p' },
      { name: 'Performance', level: 'p' },
    ],
  },
  {
    cat: 'CI/CD, API & Data',
    tools: [
      { name: 'Jenkins', level: 'e' }, { name: 'Azure DevOps', level: 'e' },
      { name: 'Git / Bitbucket', level: 'e' }, { name: 'Postman', level: 'e' },
      { name: 'REST API Validation', level: 'e' }, { name: 'SQL / SSMS', level: 'p' },
      { name: 'Swagger / OpenAPI', level: 'p' }, { name: 'GitHub Actions', level: 'l' },
      { name: 'Docker', level: 'l' },
    ],
  },
  {
    cat: 'Process & Tracking',
    tools: [
      { name: 'Agile / Scrum', level: 'e' }, { name: 'JIRA', level: 'e' },
      { name: 'TestRail', level: 'e' }, { name: 'Test Strategy Authoring', level: 'e' },
      { name: 'Defect Lifecycle', level: 'e' }, { name: 'SDLC / STLC', level: 'e' },
      { name: 'Confluence', level: 'p' }, { name: 'GLI Compliance', level: 'p' },
    ],
  },
  {
    cat: 'Engineering & AI',
    tools: [
      { name: 'Spring Boot', level: 'p' }, { name: 'Java REST Services', level: 'p' },
      { name: 'Gemini API (LLM)', level: 'p' }, { name: 'AI-Assisted Testing', level: 'p' },
      { name: 'TypeScript', level: 'p' }, { name: 'DSA', level: 'p' },
      { name: 'Linux', level: 'p' }, { name: 'Next.js', level: 'l' },
      { name: 'C / C++', level: 'l' },
    ],
  },
];

/** `href` omitted = employer-owned work with no public source to link to. */
export const projects = [
  {
    name: 'AI Defect-Intake Tool',
    desc: 'Shipped in production at Light & Wonder. A Spring Boot service wired to the Gemini API and Jira REST v2 that turns raw defect notes into structured, reproducible tickets — cutting the team’s bug-logging time from ~25 minutes to under 5.',
    tags: [
      { label: 'Spring Boot', tone: 'o' as const }, { label: 'Gemini API', tone: 'o' as const },
      { label: 'Jira REST v2', tone: 'o' as const }, { label: 'Java', tone: 'o' as const },
    ],
    note: 'Internal · Light & Wonder',
    accent: '#fbc964',
    image: 'ai',
  },
  {
    name: 'BDD Automation Suite',
    desc: 'Selenium + Cucumber + Gherkin + Python framework with Allure reporting, integrated into Jenkins CI/CD. Page Object architecture and living documentation — expanded regression coverage by roughly 40%.',
    tags: [
      { label: 'Selenium', tone: 'g' as const }, { label: 'Cucumber', tone: 'g' as const },
      { label: 'Python', tone: 'g' as const }, { label: 'Allure', tone: 'g' as const },
    ],
    note: 'Internal · Light & Wonder',
    accent: '#34d399',
    image: 'browser',
  },
  {
    name: 'SwagLabs Automation Framework',
    desc: 'E2E test automation for the SauceDemo storefront — Python + Selenium with Behave BDD, a Page Object layer and HTML reporting. Feature files cover the auth, cart and checkout journeys.',
    tags: [
      { label: 'Python', tone: 'g' as const }, { label: 'Selenium', tone: 'g' as const },
      { label: 'Behave BDD', tone: 'g' as const }, { label: 'POM', tone: 'g' as const },
    ],
    href: 'https://github.com/Iampundalik/SauceDemo-Automation_Framework',
    accent: '#34d399',
    image: 'dashboard',
  },
  {
    name: 'Flipkart DataScrapper',
    desc: 'Web scraping automation built on Selenium WebDriver. Structured product data extraction with error handling, anti-detection patterns and clean output.',
    tags: [
      { label: 'Python', tone: 'b' as const }, { label: 'Selenium', tone: 'b' as const },
      { label: 'Web Scraping', tone: 'b' as const },
    ],
    href: 'https://github.com/Iampundalik/Testing-Projects',
    accent: '#7dd3fc',
    image: 'terminal',
  },
];

export const certs = [
  { name: 'ISTQB Certified Tester — Foundation Level', date: 'CTFL · ACTIVE', star: true },
  { name: 'API Automation — RestAssured', date: 'APRIL 2024', star: false },
  { name: 'Agile & Scrum Fundamentals', date: 'FEB – MAR 2023', star: false },
  { name: 'Python Basics', date: 'JUN – SEP 2022', star: false },
  { name: 'Bachelor of Engineering — Goa University', date: 'GOA, INDIA · 2018 – 2022', star: false },
  { name: 'Higher Secondary — PCM + Computer Science', date: 'MAPUSA, GOA · 2016 – 2018', star: false },
];

/** Resume-backed outcomes — every figure here traces to a real delivery. */
export const impactStats = [
  '~40% REGRESSION COVERAGE ADDED',
  '25 MIN → 5 MIN BUG LOGGING',
  '72% BUG-DETECTION GAIN',
  '7+ STUDIO INTEGRATIONS',
  '3.5 YEARS SHIPPING QUALITY',
  '1.5 YEARS FULLY REMOTE',
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Capabilities' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'gallery', label: 'QA Lab' },
  { id: 'certs', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

/** Split form of the resume figures, for the scroll-driven marquee tiles. */
export const highlights = [
  { v: '~40%', l: 'Regression coverage added' },
  { v: '25 → 5', l: 'Minutes to log a defect' },
  { v: '72%', l: 'Bug-detection gain' },
  { v: '7+', l: 'Studio integrations' },
  { v: '3.5 YRS', l: 'Shipping quality' },
  { v: '1.5 YRS', l: 'Fully remote' },
];

/** Marquee word tiles — the tools the day-to-day actually runs on. */
export const marqueeWords = [
  { w: 'SELENIUM', c: 'WebDriver + Python' },
  { w: 'CUCUMBER', c: 'Gherkin BDD' },
  { w: 'JENKINS', c: 'CI/CD pipelines' },
  { w: 'POSTMAN', c: 'REST validation' },
  { w: 'ISTQB', c: 'CTFL certified' },
  { w: 'GLI', c: 'Regulatory compliance' },
  { w: 'TESTRAIL', c: 'Plans + coverage' },
  { w: 'ALLURE', c: 'Reporting' },
];

/** Sticky project stack — category label and the mockups each card renders. */
export const projectMeta: Record<string, { category: string; shots: [string, string, string] }> = {
  'AI Defect-Intake Tool': { category: 'Internal Tool', shots: ['ai', 'terminal', 'browser'] },
  'BDD Automation Suite': { category: 'Framework', shots: ['report', 'terminal', 'dashboard'] },
  'SwagLabs Automation Framework': { category: 'Open Source', shots: ['browser', 'report', 'terminal'] },
  'Flipkart DataScrapper': { category: 'Open Source', shots: ['terminal', 'dashboard', 'browser'] },
};
