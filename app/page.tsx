import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { BusinessProcess } from "@/components/ui/business-process";
import { SkillOrbitSection } from "@/components/ui/skill-orbit-section";
import { ThemeComparison } from "@/components/ui/theme-comparison";

const navItems = [
  ["About", "#about"],
  ["Theme", "#theme"],
  ["Process", "#process"],
  ["Stack", "#stack"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const highlights = [
  {
    kicker: "AI",
    title: "AI Engineer",
    text: "RAG pipelines, LLM integration, n8n workflows, MCP, and autonomous AI agents with OpenAI and Anthropic APIs.",
  },
  {
    kicker: "FS",
    title: "Full-Stack Architect",
    text: "End-to-end systems with React, Next.js, Vue, Nuxt, NestJS, Node.js, PostgreSQL, MongoDB, and Redis.",
  },
  {
    kicker: "CL",
    title: "DevOps & Cloud",
    text: "Docker, Kubernetes, AWS ECS, EC2, Lambda, Terraform, GitHub Actions CI/CD, and observability stacks.",
  },
];

const experiences = [
  {
    initials: "CT",
    role: "Software Engineer",
    date: "Oct 2025 - Present",
    company: "Connation Technology - Pakistan",
    bullets: [
      "Built a large-scale real-time trading app with WebSocket, Redis pub/sub, and sub-100ms React UI updates.",
      "Delivered an e-learning platform with video streaming, Stripe payments, and progress tracking.",
      "Shipped across Vue, Nuxt, React, and Next codebases with shared product standards.",
      "Optimized SSR and SSG flows to reach Lighthouse scores above 95.",
    ],
    tags: ["React", "Next.js", "Vue", "Nuxt", "NestJS", "WebSocket", "Redis", "Stripe"],
  },
  {
    initials: "CA",
    role: "Fullstack Developer, AI & Healthcare",
    date: "Sep 2024 - Present",
    company: "Canadatel.net - Remote",
    bullets: [
      "Integrated an LLM triage chatbot with RAG over patient records using OpenAI and Anthropic APIs.",
      "Built healthcare platforms including Afyango, AfyaLink, and Tedo HMS for thousands of patients.",
      "Reduced API latency by 35% with NestJS, PostgreSQL, Redis caching, and targeted query tuning.",
      "Deployed services on AWS ECS and Fargate with Terraform and blue-green GitHub Actions releases.",
    ],
    tags: ["React", "NestJS", "RAG", "OpenAI", "AWS", "Terraform", "Docker"],
  },
  {
    initials: "FS",
    role: "Software Developer",
    date: "Feb 2023 - Dec 2024",
    company: "FillinkxSol - Faisalabad",
    bullets: [
      "Created an n8n and OpenAI internal assistant that reduced manual data entry by 60%.",
      "Built high-performance full-stack products with React, Next.js, Node.js, Express, and MongoDB.",
      "Improved render performance by roughly 40% through Redux Toolkit and Recoil optimization.",
    ],
    tags: ["React", "Next.js", "n8n", "MongoDB", "Docker", "Nginx"],
  },
  {
    initials: "NF",
    role: "Frontend Developer",
    date: "Oct 2021 - Jan 2023",
    company: "Next Frontier Labs - Lahore",
    bullets: [
      "Built responsive product interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
      "Integrated early OpenAI API workflows for LLM text generation in a content SaaS product.",
      "Raised Lighthouse performance scores to 95+ using code splitting and lazy loading.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "GraphQL", "React Query"],
  },
  {
    initials: "NB",
    role: "React Developer",
    date: "Mar 2021 - Aug 2021",
    company: "NextBridge - Lahore",
    bullets: [
      "Built Chart.js and D3.js analytics dashboards with real-time WebSocket data streaming.",
      "Reduced production bugs by 40% through Jest unit tests and Cypress end-to-end coverage.",
      "Improved accessibility across modules with WCAG 2.1 oriented UI patterns.",
    ],
    tags: ["React", "D3.js", "Chart.js", "Redux", "Jest", "Cypress"],
  },
];

const skills: Array<[string, string[]]> = [
  ["Frontend", ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "MUI", "Shadcn UI", "Redux Toolkit", "React Native"]],
  ["Backend", ["Node.js", "NestJS", "Express.js", "GraphQL", "REST APIs", "WebSocket", "JWT/OAuth2", "Swagger"]],
  ["AI & Agents", ["OpenAI API", "Anthropic Claude", "LangChain", "RAG", "MCP", "n8n Agents", "Pinecone", "Prompt Engineering"]],
  ["DevOps & Cloud", ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "Nginx", "CloudWatch", "Datadog"]],
  ["Databases", ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "TypeORM", "Query Optimization"]],
  ["Testing & Tools", ["Jest", "Cypress", "Git", "Sentry", "Plasmo.js", "Agile/Scrum", "SOLID", "Clean Architecture"]],
];

const projects = [
  {
    code: "TE",
    title: "Traders Empire",
    url: "https://tradersempire.com/",
    text: "Trading product experience focused on market workflows, fast interfaces, and conversion-ready landing and application surfaces.",
    tags: ["Trading", "React", "Next.js", "Realtime UI", "Product UX"],
  },
  {
    code: "DP",
    title: "Daily Profit",
    url: "https://dailyprofit.vip/",
    text: "Finance and trading platform work with member-facing screens, performance-sensitive UI, and deployment-ready web delivery.",
    tags: ["Trading", "Dashboard", "React", "API Integration"],
  },
  {
    code: "IN",
    title: "Infusion Ministries",
    url: "https://www.infusionnow.org/",
    text: "Public ministry and resource website supporting conferences, EPIC videos, counseling content, donations, and community engagement.",
    tags: ["CMS", "Responsive UI", "Content", "Nonprofit"],
  },
  {
    code: "AG",
    title: "Agape Driver Hub",
    url: "https://agapeny.com/driver-hub",
    text: "Driver portal experience for Agape Transportation that centralizes resources and keeps transportation teams informed on the road.",
    tags: ["Portal", "Responsive UI", "Transport", "UX"],
  },
  {
    code: "AY",
    title: "Afyayangu",
    url: "https://afyayangu.go.ke/",
    text: "Kenya digital health portal work connected to patient-facing access, healthcare services, and national health ecosystem workflows.",
    tags: ["Healthcare", "GovTech", "Portal", "Secure UX"],
  },
  {
    code: "AL",
    title: "AfyaLink API Gateway",
    url: "https://afyalink.dha.go.ke/",
    text: "Developer-first health information exchange platform for secure facility integration, API credentials, registries, and healthcare data exchange.",
    tags: ["Healthcare", "HIE", "API Gateway", "Developer Portal"],
  },
  {
    code: "TD",
    title: "Tapday App Builder",
    url: "https://www.tapday.com/app-builder",
    text: "Shopify mobile app builder experience with drag-and-drop editing, integrations, analytics, push notifications, and migration flows.",
    tags: ["Shopify", "SaaS", "App Builder", "No-Code"],
  },
  {
    code: "KW",
    title: "KW Thrive",
    url: "https://thrive.kw.com/",
    text: "Keller Williams career growth platform highlighting training, coaching, technology, communities, and real estate business development.",
    tags: ["Real Estate", "Marketing Site", "CMS", "Responsive UI"],
  },
  {
    code: "SN",
    title: "Shopney",
    url: "https://shopney.co/",
    text: "Shopify mobile app builder platform helping brands launch mobile apps with design editor, push notifications, campaigns, chat, and integrations.",
    tags: ["Shopify", "SaaS", "Mobile Commerce", "Growth"],
  },
  {
    code: "MB",
    title: "Metabilia",
    url: "https://metabilia.io/",
    text: "Sports memorabilia marketplace and auction technology for authenticated game-used, team-issued, and signed collectibles.",
    tags: ["Marketplace", "Auctions", "Sports", "Mobile App"],
  },
  {
    code: "RT",
    title: "Real-Time Trading Platform",
    url: "https://tradersempire.com/",
    text: "High-frequency trading platform with WebSocket feeds, Redis pub/sub messaging, and optimized React dashboards delivering sub-100ms UI updates.",
    tags: ["WebSocket", "Redis", "React", "Next.js", "NestJS"],
  },
  {
    code: "ED",
    title: "E-Learning Platform",
    url: "#contact",
    text: "Courses platform with video streaming, Stripe payment integration, progress tracking, and multi-role access control for instructors and students.",
    tags: ["Next.js", "Nuxt.js", "Stripe", "Node.js", "MongoDB"],
  },
  {
    code: "AI",
    title: "n8n AI Agent Pipeline",
    url: "#contact",
    text: "Multi-step AI agents orchestrating email, calendar, and EHR integrations through n8n, reducing admin workload by 60%.",
    tags: ["n8n", "OpenAI", "MCP", "REST APIs", "Webhooks"],
  },
  {
    code: "MS",
    title: "Scalable Microservices",
    url: "#contact",
    text: "Event-driven NestJS microservices on Kubernetes with RabbitMQ message bus, Helm deployments, and zero-downtime release flows.",
    tags: ["Kubernetes", "NestJS", "RabbitMQ", "Helm", "Docker"],
  },
  {
    code: "EX",
    title: "AI Chrome Extension",
    url: "#contact",
    text: "Plasmo.js browser extension using Claude API for contextual page summarization, intelligent form-fill assistance, and content analysis.",
    tags: ["Plasmo.js", "Claude API", "TypeScript", "React"],
  },
];

function escapeSvgText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createProjectThumbnail(
  project: (typeof projects)[number],
  index: number
) {
  const palettes = [
    ["#49d3ff", "#5ee6a8", "#111827"],
    ["#9b8cff", "#ff6f91", "#13111f"],
    ["#f8c15c", "#49d3ff", "#17140d"],
    ["#5ee6a8", "#f8c15c", "#0f1c18"],
    ["#ff6f91", "#9b8cff", "#1a1018"],
  ];
  const [primary, secondary, base] = palettes[index % palettes.length];
  const title = escapeSvgText(project.title);
  const code = escapeSvgText(project.code);
  const tags = escapeSvgText(project.tags.slice(0, 3).join(" / "));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="640" viewBox="0 0 900 640">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${base}"/>
          <stop offset="62%" stop-color="#333333"/>
          <stop offset="100%" stop-color="#242424"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${primary}"/>
          <stop offset="100%" stop-color="${secondary}"/>
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="22" result="blur"/>
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.52 0"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="900" height="640" rx="34" fill="url(#bg)"/>
      <path d="M0 112H900M0 224H900M0 336H900M0 448H900M0 560H900M112 0V640M224 0V640M336 0V640M448 0V640M560 0V640M672 0V640M784 0V640" stroke="white" stroke-opacity=".06"/>
      <circle cx="690" cy="142" r="240" fill="${primary}" opacity=".12" filter="url(#glow)"/>
      <circle cx="146" cy="540" r="210" fill="${secondary}" opacity=".12" filter="url(#glow)"/>
      <rect x="64" y="64" width="772" height="508" rx="28" fill="white" opacity=".035" stroke="white" stroke-opacity=".14"/>
      <rect x="94" y="94" width="104" height="42" rx="21" fill="url(#accent)" opacity=".9"/>
      <text x="146" y="122" text-anchor="middle" fill="#333333" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="900">${code}</text>
      <text x="94" y="276" fill="#f7fbff" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="900">${title}</text>
      <text x="96" y="330" fill="#a9b4c7" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">${tags}</text>
      <path d="M96 420 C210 365 320 474 430 420 S650 360 768 424" fill="none" stroke="url(#accent)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="96" cy="420" r="10" fill="${primary}"/>
      <circle cx="430" cy="420" r="10" fill="${secondary}"/>
      <circle cx="768" cy="424" r="10" fill="${primary}"/>
      <text x="96" y="510" fill="#dfe7f5" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" opacity=".8">Production system / real users / scalable delivery</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const heroProducts = projects.map((project, index) => ({
  title: project.title,
  link: project.url,
  thumbnail: createProjectThumbnail(project, index),
}));

const education = [
  {
    date: "Aug 2016 - Aug 2020",
    title: "BS Computer Science",
    school: "Govt College University Faisalabad",
    text: "EQF Level 6 foundations in algorithms, data structures, software engineering, and systems design.",
  },
  {
    date: "Aug 2020 - Mar 2021",
    title: "MERN Stack Training",
    school: "Panacloud",
    text: "EQF Level 4 intensive full-stack training across MongoDB, Express, React, and Node.js.",
  },
  {
    date: "Jan 2026 - Present",
    title: "Agentic AI Bootcamp",
    school: "AI Agents with Python, n8n, MCP & RAG",
    text: "EQF Level 4 advanced AI training in multi-agent systems, RAG pipelines, MCP, and vector databases.",
  },
];

const contacts = [
  ["Email", "munir787898@gmail.com", "mailto:munir787898@gmail.com"],
  ["Phone", "+92 03041672724", "tel:+923041672724"],
  ["GitHub", "muhammadimran787898", "https://github.com/muhammadimran787898"],
  ["LinkedIn", "muhammad-imran-0822b51aa", "https://www.linkedin.com/in/muhammad-imran-0822b51aa/"],
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="site-nav">
        <a className="nav-logo" href="#home" aria-label="Muhammad Imran home">
          MI.
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:munir787898@gmail.com">
          Hire Me
        </a>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <HeroParallax products={heroProducts} />

      <ThemeComparison />

      <section className="process-section" id="process">
        <BusinessProcess />
      </section>

      <SkillOrbitSection />

      <section className="content-section" id="about">
        <SectionHeader label="About Me" title="Building the future, one system at a time" />
        <div className="about-grid">
          <div className="rich-copy">
            <p>
              As a highly motivated <strong>Full-Stack Engineer and AI Engineer</strong> progressing toward Enterprise Architecture, I craft dynamic, intelligent web applications for e-commerce, healthcare, trading systems, and AI-powered products.
            </p>
            <p>
              My expertise spans the modern stack: sleek frontends, robust backends, <strong>cloud infrastructure</strong>, LLM integration, RAG pipelines, agentic workflows, and autonomous AI agents.
            </p>
            <p>
              I focus on solving complex challenges with elegant, efficient code while keeping user experience, performance, and deployment quality at the center.
            </p>
          </div>
          <div className="highlight-stack">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section band" id="experience">
        <SectionHeader
          label="Career"
          title="Work Experience"
          subtitle="Six years building scalable products across healthcare, finance, e-learning, and AI."
        />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-dot">{item.initials}</div>
              <div className="experience-body">
                <div className="experience-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <time>{item.date}</time>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <TagList tags={item.tags} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="skills">
        <SectionHeader
          label="Expertise"
          title="Technical Skills"
          subtitle="A battle-tested stack spanning frontend, backend, AI, and cloud infrastructure."
        />
        <div className="skills-grid">
          {skills.map(([category, items]) => (
            <article className="skill-card" key={category}>
              <h3>{category}</h3>
              <TagList tags={items} />
            </article>
          ))}
        </div>
      </section>

      <section className="content-section band" id="projects">
        <SectionHeader
          label="Work"
          title="Key Projects"
          subtitle="Production systems handling real users, real data, and real scale."
        />
        <ProjectShowcase projects={projects} />
      </section>

      <section className="content-section" id="education">
        <SectionHeader label="Learning" title="Education & Training" />
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.title}>
              <time>{item.date}</time>
              <h3>{item.title}</h3>
              <p className="school">{item.school}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <SectionHeader label="Contact" title="Let's build something extraordinary" />
        <div className="contact-grid">
          <div className="contact-list">
            {contacts.map(([label, value, href]) => (
              <a
                className="contact-item"
                href={href}
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span>{label.slice(0, 2).toUpperCase()}</span>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </a>
            ))}
          </div>
          <div className="contact-panel">
            <p className="availability"><span /> Open to Remote & Canada Roles</p>
            <h3>Ready to collaborate?</h3>
            <p>
              Whether it is an AI system, a full-stack product, or a DevOps pipeline, I can help turn the idea into a clean production release.
            </p>
            <a className="button primary" href="mailto:munir787898@gmail.com">
              Send a Message
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Designed and built by Muhammad Imran - AI Engineer & Enterprise Architect - Faisalabad, Pakistan</p>
      </footer>
    </main>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
