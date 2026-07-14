export const personalInfo = {
  name: "Hrittik Bhattacharjee",
  title: "Software Developer",
  location: "Banasree, Dhaka",
  email: "bhrittik23@gmail.com",
  phone: "+8801724198636",
  website: "https://hrittik-portfolio.vercel.app/",
  github: "BhattacharjiHRB",
  linkedin: "hrittik-bhattacharjee-8a9178278",
  summary:
    "Dedicated and enthusiastic Developer with a strong passion for coding and a keen interest in frontend development. Skilled in building modern, responsive web applications with clean and efficient code. With a solid foundation in programming principles and a hunger for learning new technologies, I thrive on challenges and take pride in delivering high-quality solutions.",
};

export const experiences = [
  {
    company: "Blink Curacao",
    role: "Software Developer (Frontend)",
    type: "Remote",
    period: "June 2024 - April 2025",
    highlights: [
      "Developed a CMS dashboard with multivendor functionality using Next.js and TypeScript",
      "Built responsive UI using Tailwind CSS and ShadcnUI",
      "Managed application state with Zustand, improving performance",
      "Collaborated with cross-functional teams on business logic alignment",
    ],
  },
  {
    company: "Cycaf Pvt. Ltd.",
    role: "Junior Software Developer",
    type: "Banani, Dhaka",
    period: "May 2023 - May 2024",
    url: "https://cycaf.com/",
    highlights: [
      "Developed a Ticketing Management System using Next.js and TypeScript",
      "Integrated Tailwind CSS and ShadcnUI for responsive interfaces",
      "Utilized Axios for efficient API integrations",
      "Implemented state management using Zustand",
    ],
  },
];

export const education = [
  {
    institution: "American International University Bangladesh",
    degree: "Bachelor in Computer Science and Engineering",
    period: "2021 - 2026",
    gpa: "3.12",
    
    url: "https://www.aiub.edu/",
  },
  {
    institution: "Cambrian College",
    degree: "HSC in Science",
    period: "2018 - 2020",
    gpa: "4.75",
  },
];

export const skills = {
  languages: ["C++", "C#", "PHP", "Java", "JavaScript", "TypeScript", "Python"],
  frontend: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "ShadCn UI",
    "HTML",
    "CSS",
    "Axios",
    "Zustand",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Hono.js",
    "NestJS",
    "JavaScript",
    "TypeScript",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ],

  aiMl: [
    "LangChain",
    "OpenAI API",
    "Hugging Face",
    "Claude API",
    "TensorFlow",
    "RAG",
    "Azure AI",
    "Excel",
    "Matplotlib",
    "pyTorch",
  ]
   
};

export const projects = [
  {
    title: "CMS Dashboard",
    description:
      "A multivendor CMS dashboard with role-based access, content management, and analytics. Built for Blink Curacao.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCn UI", "Zustand"],
    category: "Frontend",
  },
  {
    title: "Ticketing Management System",
    description:
      "A full-featured ticketing system for managing support requests, assignments, and tracking. Built at Cycaf Pvt. Ltd.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Zustand"],
    category: "Frontend",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio with blog, services page, and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
  },
  {
    title: "Dove — Social Media Platform",
    description:
      "A full-stack social media platform featuring user profiles, real-time feeds, post creation, likes, comments, follow system, and messaging.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
  },
  {
    title: "E-Commerce Solution",
    description:
      "A complete e-commerce platform with product catalog, cart management, checkout flow, payment integration, order tracking, and admin panel.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Zustand"],
    category: "Full Stack",
  },
];

export const certifications = [
  {
    title: "Cyber Security & Ethical Hacking Career Track Program",
    issuer: "Ostad",
    date: "February 2026",
    description:
      "Comprehensive program focused on identifying, analyzing, and mitigating security vulnerabilities. Gained practical experience with penetration testing and security tools.",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Building Scalable CMS Dashboards with Next.js",
    excerpt:
      "A deep dive into architecting multivendor CMS platforms with modern frontend tools and best practices for scalability.",
    date: "2025-01-15",
    tags: ["Next.js", "TypeScript", "Architecture"],
    readTime: "5 min",
    content: `Building a scalable CMS dashboard requires careful planning and the right technology stack. In this post, I'll share my experience building a multivendor CMS dashboard using Next.js and TypeScript.\n\n## Choosing the Right Architecture\n\nWhen building a CMS, the architecture decisions you make early on will impact the entire project. I chose a modular approach with clear separation of concerns.\n\n## State Management with Zustand\n\nZustand provided a lightweight yet powerful state management solution that scaled well with our growing feature set.\n\n## Key Takeaways\n\n- Start with a clear data model\n- Use TypeScript for better developer experience\n- Keep components small and composable\n- Test early and often`,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS for Production Apps",
    excerpt:
      "Tips and tricks for using Tailwind CSS effectively in large-scale production applications.",
    date: "2024-11-20",
    tags: ["Tailwind CSS", "CSS", "Frontend"],
    readTime: "4 min",
    content: `Tailwind CSS has revolutionized the way we write styles. Here are some tips for using it effectively in production.\n\n## Custom Design Systems\n\nCreate a consistent design system by extending Tailwind's configuration.\n\n## Performance Optimization\n\nUse Tailwind's purge feature to remove unused styles in production builds.\n\n## Component Patterns\n\nBuild reusable component patterns that leverage Tailwind's utility-first approach.`,
  },
  {
    id: "3",
    title: "Getting Started with Cybersecurity",
    excerpt:
      "My journey into cybersecurity and ethical hacking, and why every developer should understand security fundamentals.",
    date: "2025-02-10",
    tags: ["Cybersecurity", "Ethical Hacking", "Career"],
    readTime: "6 min",
    content: `As a software developer, understanding cybersecurity is not just a nice-to-have — it's essential.\n\n## Why Developers Need Security Knowledge\n\nEvery line of code you write has security implications. Understanding common vulnerabilities helps you write safer code.\n\n## My Learning Path\n\nI completed the Cyber Security & Ethical Hacking Career Track Program at Ostad, which gave me hands-on experience with penetration testing and vulnerability assessment.\n\n## Essential Security Practices\n\n- Always validate user input\n- Use parameterized queries\n- Keep dependencies updated\n- Implement proper authentication and authorization`,
  },
  {
    id: "4",
    title: "The Rise of AI Coding Agents in 2026",
    excerpt:
      "How autonomous AI coding agents are reshaping software development workflows and what it means for developers.",
    date: "2026-04-12",
    tags: ["AI", "Developer Tools", "Industry"],
    content: `AI coding agents have moved from autocomplete helpers to autonomous teammates capable of planning, editing, and shipping features end-to-end.\n\n## From Copilots to Agents\n\nTools like Claude Code, Cursor, and Lovable now operate with longer context windows, tool use, and multi-step reasoning — turning prompts into pull requests.\n\n## Impact on Developers\n\n- Faster prototyping and shorter feedback loops\n- More time spent on architecture, review, and product thinking\n- Higher value on taste, system design, and security awareness\n\n## What's Next\n\nExpect deeper IDE integrations, better long-horizon memory, and agents that own entire workflows from issue to deploy.`,
  },
  {
    id: "5",
    title: "React 19 and the Server Components Era",
    excerpt:
      "A look at how React 19, Server Components, and the Next.js App Router are changing the way we build modern web apps.",
    date: "2026-03-05",
    tags: ["React", "Next.js", "Frontend"],
    content: `React 19 has finally made Server Components, Actions, and the new compiler mainstream — and the ecosystem is catching up fast.\n\n## Server Components by Default\n\nMoving data fetching to the server reduces client bundles and removes most useEffect-based fetching patterns.\n\n## Actions and Forms\n\nForm Actions simplify mutations with progressive enhancement built in, making forms feel native again.\n\n## The React Compiler\n\nManual useMemo and useCallback usage is shrinking thanks to the new compiler that auto-memoizes components.`,
  },
  {
    id: "6",
    title: "Bun, Deno, and the New JavaScript Runtimes",
    excerpt:
      "Node.js is no longer the only serious choice. Here's how Bun and Deno are pushing the JavaScript runtime landscape forward.",
    date: "2026-02-18",
    tags: ["JavaScript", "Node.js", "Tooling"],
    content: `JavaScript runtimes have entered a real competitive era, with Bun and Deno challenging Node.js on speed, DX, and built-in tooling.\n\n## Bun\n\nBun ships a fast bundler, test runner, and package manager in a single binary, with strong Node compatibility.\n\n## Deno\n\nDeno 2 doubles down on web standards, native TypeScript, and secure-by-default execution while keeping npm interop.\n\n## What to Pick\n\nNode.js remains the safe default for production, but Bun and Deno are excellent for new projects and tooling-heavy workflows.`,
  },
  {
    id: "7",
    title: "The State of Cybersecurity in the AI Era",
    excerpt:
      "AI is supercharging both attackers and defenders. Here are the trends every developer should be watching in 2026.",
    date: "2026-04-25",
    tags: ["Cybersecurity", "AI", "Industry"],
    content: `Generative AI has changed the threat landscape — phishing is more convincing, exploits are discovered faster, and defenders are racing to keep up.\n\n## AI-Powered Attacks\n\nAutomated reconnaissance, deepfake social engineering, and AI-assisted vulnerability discovery are now standard tools for attackers.\n\n## AI-Powered Defense\n\nSOC teams are adopting AI for anomaly detection, log triage, and rapid incident response.\n\n## Developer Takeaways\n\n- Treat dependencies and secrets with extreme care\n- Add security reviews to your AI-generated code\n- Adopt zero-trust principles in your architecture`,
  },
];
