export const profile = {
  name: 'PUNDALIK MHAMAL',
  initials: 'PM',
  role: 'SDET',
  company: 'Amazon',
  tagline: 'Test Automation · API & Integration · GenAI Evaluation',
  email: 'pundalik.mhamal.work@gmail.com',
  phone: '+91 98907 03905',
  github: 'https://github.com/Iampundalik',
  linkedin: 'https://linkedin.com/in/iampundalik',
  location: 'Hyderabad, India · IST (UTC+5:30)',
  summary:
    'SDET with 3.5+ years building test automation and owning quality on multi-service platforms — most recently a GLI-regulated, AWS-hosted casino platform where an escaped defect is a compliance failure. Builds frameworks from scratch in Playwright + TypeScript and Python + Selenium, runs them in CI as build gates, and builds and tests LLM-powered services.',
};

export const metrics = [
  { v: '3.5+', l: 'Years building quality' },
  { v: 'ISTQB', l: 'CTFL certified' },
  { v: '7+', l: 'Product lines tested' },
  { v: '25→5', l: 'Min to log a defect' },
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
    icon: 'bot',
    title: 'Test Automation Frameworks',
    desc: 'Built a Playwright + TypeScript framework from scratch and co-built a Python + Selenium + Cucumber/BDD suite. Layered design with page objects and typed modules, UI and API checks in one suite, unit tests on the core logic, and Allure and HTML reports with the evidence attached.',
    tags: [
      { label: 'Playwright', tone: 'g' }, { label: 'TypeScript', tone: 'g' },
      { label: 'Selenium', tone: 'g' }, { label: 'PyTest', tone: 'g' },
      { label: 'Cucumber / BDD', tone: 'g' }, { label: 'Page Object Model', tone: 'g' },
    ],
    span: 8,
  },
  {
    icon: 'count',
    title: '3.5+ YEARS',
    desc: 'Years building quality',
    tags: [
      { label: 'SDET', tone: 'b' }, { label: 'iGaming', tone: 'b' },
      { label: 'Enterprise', tone: 'b' },
    ],
    span: 4,
  },
  {
    icon: 'zap',
    title: 'API & Integration Testing',
    desc: 'REST and SOAP services and the flows between them — sync and async requests, parallel calls with timeouts and fallback, and the failed, duplicate and retried transactions that only surface across service boundaries. Backend state verified directly in SQL.',
    tags: [
      { label: 'REST', tone: 'o' }, { label: 'SOAP', tone: 'o' },
      { label: 'REST Assured', tone: 'o' }, { label: 'Postman', tone: 'o' },
      { label: 'Swagger', tone: 'o' }, { label: 'SQL', tone: 'o' },
    ],
    span: 6,
  },
  {
    icon: 'brain',
    title: 'GenAI & Agentic Systems',
    desc: 'Built and maintained BugLogger, an agentic LLM service on the Gemini API wired into Jira, so I know first-hand how non-deterministic output misbehaves. Familiar with evaluating it through rubric and property-based checks, golden datasets, LLM-as-judge scoring and regression runs on every prompt change.',
    tags: [
      { label: 'Gemini API', tone: 'b' }, { label: 'LLM Evaluation', tone: 'b' },
      { label: 'Golden Datasets', tone: 'b' }, { label: 'Spring Boot', tone: 'b' },
    ],
    span: 6,
  },
  {
    icon: 'rocket',
    title: 'CI/CD & Quality Gates',
    desc: 'Suites that run in Jenkins and GitHub Actions as build gates, with same-day failure triage so the pipeline stays green and releases keep moving. At home in AWS-hosted environments and on Linux, with a working base in Docker and Kubernetes.',
    tags: [
      { label: 'Jenkins', tone: 'w' }, { label: 'GitHub Actions', tone: 'w' },
      { label: 'Git', tone: 'w' }, { label: 'AWS', tone: 'w' },
      { label: 'Linux', tone: 'w' }, { label: 'Docker', tone: 'w' },
    ],
    span: 6,
  },
  {
    icon: 'flask',
    title: 'Strategy, Regression & Root Cause',
    desc: 'Test strategy and plans agreed with developers before build, regression suites designed for coverage rather than count, and root cause chased through logs, configuration and data. Defect lifecycle in Jira, TestRail and Azure DevOps, on ISTQB test-design foundations.',
    tags: [
      { label: 'Test Strategy', tone: 'g' }, { label: 'Regression Design', tone: 'g' },
      { label: 'Root-Cause Analysis', tone: 'g' }, { label: 'Jira', tone: 'g' },
      { label: 'TestRail', tone: 'g' },
    ],
    span: 6,
  },
  {
    icon: 'dice',
    title: 'Regulated, Real-Money Platforms',
    desc: 'Over two years on a GLI-certified, AWS-hosted casino platform where an escaped defect is a compliance failure — 7+ product lines across web, Android and iOS, with game configuration verified against live servers before release.',
    tags: [
      { label: 'GLI Compliance', tone: 'o' }, { label: 'Real-Money', tone: 'o' },
      { label: 'Web', tone: 'o' }, { label: 'Android', tone: 'o' },
      { label: 'iOS', tone: 'o' },
    ],
    span: 4,
  },
];

export const experience = [
  {
    period: 'Oct 2026 – Present',
    badges: [{ label: 'CURRENT', tone: 'live' as const }],
    company: 'Amazon',
    role: 'SDET — Software Development Engineer in Test · Hyderabad',
    bullets: [
      'SDET with an Amazon engineering team since October 2026.',
      'Focus areas: test automation frameworks, API and integration testing, and quality gates in CI.',
    ],
    foot: 'SDET @ Amazon · Test Automation · API & Integration · CI Quality Gates',
    footTone: 'g' as const,
    accent: 'blue' as const,
  },
  {
    period: 'Jul 2024 – Sep 2026',
    badges: [{ label: 'PROMOTED', tone: 'promo' as const }],
    company: 'Light & Wonder',
    role: 'Senior Associate QA Engineer — iGaming · Pune (Hybrid)',
    bullets: [
      'Designed and built the BetSettings Automation Tool from scratch in Playwright + TypeScript — page objects and typed modules for parsing, calculation and the API client. It reads configuration from GitHub, calls the live game server and checks the response, cutting a 5–7 minute manual check per currency to about 10–15 seconds.',
      'Probed several game-server environments in parallel with short timeouts and ordered fallback, and compared EU and US configuration across currencies to flag mismatches before release.',
      'Co-built a Python + Selenium + Cucumber/BDD framework with API checks, run in Jenkins as a build gate; triaged failures quickly to keep the pipeline green and releases moving.',
      'Tested web clients and REST/SOAP services end to end across 7+ product lines on a GLI-certified, AWS-hosted platform, covering backend state in SQL and failed, duplicate and retried transactions between services.',
      'Built BugLogger, an agentic LLM service (Spring Boot + Gemini API + Jira REST API) that generates structured defect reports — logging time fell from about 25 minutes to under 5, and the team used it daily.',
      'Reviewed specifications and test approach with developers before build, drove root cause through logs, configuration and data, and mentored junior QAs on test design.',
      'Promoted to Senior Associate in March 2026; recognised with Team of the Month (iGaming) and Game of the Quarter.',
    ],
    foot: 'Playwright · TypeScript · Selenium BDD · Jenkins · REST / SOAP · Gemini API',
    footTone: 'g' as const,
    accent: 'green' as const,
  },
  {
    period: 'Feb 2023 – Jul 2024',
    badges: [{ label: '100% REMOTE', tone: 'promo' as const }],
    company: 'ClaySys Technologies',
    role: 'Software Test Engineer — RPA Product Team · Goa (Fully Remote)',
    bullets: [
      'Tested an enterprise automation product end to end, including multi-step workflows, integrations, exception handling, retries and recovery in long-running processes.',
      'Built automated validation flows in Python, Selenium and UiPath, contributing to a 72% improvement in tracked work-quality metrics.',
      'Built API test suites in Postman and REST Assured, and verified backend responses and data integrity with SQL.',
      'Reproduced customer-reported issues, drove root cause with developers and turned recurring failures into regression tests.',
    ],
    foot: 'Python · Selenium · UiPath · REST Assured · Azure DevOps',
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
      { name: 'Page Object Model', level: 'e' }, { name: 'Framework Design', level: 'e' },
      { name: 'Playwright', level: 'p' }, { name: 'PyTest', level: 'p' },
      { name: 'REST Assured', level: 'p' }, { name: 'Unit Testing', level: 'p' },
      { name: 'Allure Reporting', level: 'p' }, { name: 'Appium (Mobile)', level: 'l' },
    ],
  },
  {
    cat: 'Languages',
    tools: [
      { name: 'Python', level: 'e' }, { name: 'TypeScript', level: 'p' },
      { name: 'Java (Spring Boot)', level: 'p' }, { name: 'SQL', level: 'p' },
      { name: 'JavaScript', level: 'p' }, { name: 'DSA in Python', level: 'p' },
    ],
  },
  {
    cat: 'API & Integration',
    tools: [
      { name: 'REST APIs', level: 'e' }, { name: 'Postman', level: 'e' },
      { name: 'SOAP', level: 'p' }, { name: 'Swagger / OpenAPI', level: 'p' },
      { name: 'Service-to-Service Flows', level: 'p' }, { name: 'Async, Retry & Fallback', level: 'p' },
    ],
  },
  {
    cat: 'GenAI & LLM',
    tools: [
      { name: 'Gemini API', level: 'p' }, { name: 'Agentic Services', level: 'p' },
      { name: 'LLM Evaluation', level: 'l' }, { name: 'Golden Datasets', level: 'l' },
      { name: 'LLM-as-Judge', level: 'l' }, { name: 'Prompt Regression', level: 'l' },
    ],
  },
  {
    cat: 'CI/CD & Cloud',
    tools: [
      { name: 'Jenkins', level: 'e' }, { name: 'Git / GitHub', level: 'e' },
      { name: 'GitHub Actions', level: 'p' }, { name: 'AWS-hosted Environments', level: 'p' },
      { name: 'Linux', level: 'p' }, { name: 'Docker', level: 'l' },
      { name: 'Kubernetes', level: 'l' },
    ],
  },
  {
    cat: 'Strategy & Process',
    tools: [
      { name: 'Test Strategy & Plans', level: 'e' }, { name: 'Regression Suite Design', level: 'e' },
      { name: 'Root-Cause Analysis', level: 'e' }, { name: 'Jira', level: 'e' },
      { name: 'TestRail', level: 'e' }, { name: 'Agile / Scrum', level: 'e' },
      { name: 'Azure DevOps', level: 'p' }, { name: 'GLI Compliance', level: 'p' },
    ],
  },
  {
    cat: 'Platforms & Devices',
    tools: [
      { name: 'Web Clients', level: 'e' }, { name: 'Android', level: 'e' },
      { name: 'iOS', level: 'e' }, { name: 'BrowserStack', level: 'p' },
      { name: 'Fiddler / Network', level: 'p' }, { name: 'UiPath RPA', level: 'p' },
    ],
  },
];

/**
 * `href` omitted = no public source to link to; `note` explains why instead.
 * Internal work is described at the level of the public resume — no repo,
 * environment or file names.
 */
export const projects = [
  {
    name: 'BetSettings Automation Tool',
    desc: 'A one-command tool built from scratch in Playwright + TypeScript. It reads a game’s configuration from GitHub, calculates the default, minimum and maximum bet for every currency, then calls each game server’s API to confirm the live game returns the same values — probing environments in parallel with short timeouts and fallback, and flagging EU vs US configuration mismatches. A 5–7 minute manual check per currency now takes about 10–15 seconds for all of them, and its first real runs caught genuine misconfigurations.',
    tags: [
      { label: 'Playwright', tone: 'g' as const }, { label: 'TypeScript', tone: 'g' as const },
      { label: 'API Testing', tone: 'g' as const }, { label: 'Parallel Requests', tone: 'g' as const },
    ],
    note: 'Internal · Light & Wonder',
    accent: '#34d399',
    image: 'terminal',
  },
  {
    name: 'BugLogger',
    desc: 'An agentic, LLM-powered defect-reporting service built on Spring Boot, the Gemini API and the Jira REST API. It turns rough notes into structured, reproducible Jira reports — logging time fell from about 25 minutes to under 5, and the team used it daily. Living with its non-deterministic output is what pulled me into LLM evaluation.',
    tags: [
      { label: 'Spring Boot', tone: 'o' as const }, { label: 'Gemini API', tone: 'o' as const },
      { label: 'Jira REST API', tone: 'o' as const }, { label: 'Java', tone: 'o' as const },
    ],
    note: 'Internal · Light & Wonder',
    accent: '#fbc964',
    image: 'ai',
  },
  {
    name: 'Autonomous AI Video Pipeline',
    desc: 'An unattended pipeline that runs on a schedule in GitHub Actions: it pulls sources, writes a script with an LLM, synthesises voiceover, renders a captioned video with ffmpeg and publishes through the YouTube Data API. A layer of autonomous agents reviews performance and proposes tuning — but every value they emit is validated and clamped in code before it can reach the pipeline. Never let a model write straight to production config.',
    tags: [
      { label: 'Python', tone: 'b' as const }, { label: 'LLM APIs', tone: 'b' as const },
      { label: 'GitHub Actions', tone: 'b' as const }, { label: 'ffmpeg', tone: 'b' as const },
    ],
    note: 'Personal · private repo',
    accent: '#7dd3fc',
    image: 'dashboard',
  },
  {
    name: 'BDD Automation Suite',
    desc: 'Co-built a Python + Selenium + Cucumber/BDD framework with API checks and Allure reporting, run in Jenkins as a build gate — with failures triaged quickly so the pipeline stayed green and releases kept moving.',
    tags: [
      { label: 'Selenium', tone: 'g' as const }, { label: 'Cucumber', tone: 'g' as const },
      { label: 'Python', tone: 'g' as const }, { label: 'Jenkins', tone: 'g' as const },
    ],
    note: 'Internal · Light & Wonder',
    accent: '#34d399',
    image: 'browser',
  },
  {
    name: 'SwagLabs Automation Framework',
    desc: 'End-to-end web framework for the SauceDemo storefront — Python + Selenium with PyTest and Behave BDD, a Page Object layer, config-driven test data, parallel runs and HTML reports.',
    tags: [
      { label: 'Python', tone: 'g' as const }, { label: 'Selenium', tone: 'g' as const },
      { label: 'PyTest', tone: 'g' as const }, { label: 'POM', tone: 'g' as const },
    ],
    href: 'https://github.com/Iampundalik/SauceDemo-Automation_Framework',
    accent: '#34d399',
    image: 'report',
  },
];

export const certs = [
  { name: 'ISTQB Certified Tester — Foundation Level (CTFL 4.0)', date: 'CERTIFIED · ACTIVE', star: true },
  { name: 'API Automation — REST Assured', date: 'APRIL 2024', star: false },
  { name: 'Agile & Scrum Fundamentals', date: 'FEB – MAR 2023', star: false },
  { name: 'Python Basics', date: 'JUN – SEP 2022', star: false },
  { name: 'Bachelor of Engineering — Goa University', date: 'GOA, INDIA · 2018 – 2022', star: false },
  { name: 'Higher Secondary — PCM + Computer Science', date: 'MAPUSA, GOA · 2016 – 2018', star: false },
];

/** Resume-backed outcomes — every figure here traces to a real delivery. */
export const impactStats = [
  '15 SEC ALL-CURRENCY BET CHECK',
  '25 MIN → 5 MIN DEFECT LOGGING',
  '7+ PRODUCT LINES TESTED',
  '72% WORK-QUALITY GAIN',
  '3.5+ YEARS BUILDING QUALITY',
  'ISTQB CTFL CERTIFIED',
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
  { v: '15 SEC', l: 'All-currency bet check — was 5–7 min each' },
  { v: '25 → 5', l: 'Minutes to log a defect' },
  { v: '7+', l: 'Product lines tested end to end' },
  { v: '72%', l: 'Tracked work-quality gain' },
  { v: '3.5+ YRS', l: 'Building test automation' },
  { v: 'CTFL', l: 'ISTQB certified' },
];

/** Marquee word tiles — the tools the day-to-day actually runs on. */
export const marqueeWords = [
  { w: 'PLAYWRIGHT', c: 'TypeScript' },
  { w: 'SELENIUM', c: 'WebDriver + Python' },
  { w: 'GEMINI', c: 'Agentic LLM services' },
  { w: 'JENKINS', c: 'CI build gates' },
  { w: 'REST ASSURED', c: 'API automation' },
  { w: 'CUCUMBER', c: 'Gherkin BDD' },
  { w: 'ISTQB', c: 'CTFL certified' },
  { w: 'ALLURE', c: 'Reporting' },
];

/** Sticky project stack — category label and the mockups each card renders. */
export const projectMeta: Record<string, { category: string; shots: [string, string, string] }> = {
  'BetSettings Automation Tool': { category: 'Framework · Built from scratch', shots: ['terminal', 'report', 'browser'] },
  'BugLogger': { category: 'Agentic LLM Service', shots: ['ai', 'terminal', 'dashboard'] },
  'Autonomous AI Video Pipeline': { category: 'Personal Project', shots: ['terminal', 'ai', 'dashboard'] },
  'BDD Automation Suite': { category: 'Framework · CI Build Gate', shots: ['report', 'terminal', 'browser'] },
  'SwagLabs Automation Framework': { category: 'Open Source', shots: ['browser', 'report', 'terminal'] },
};
