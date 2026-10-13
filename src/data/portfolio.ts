import { Brain, Cloud, Code, Server } from "lucide-react";

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
    company: "Elevate Solutions Limited",
    role: "Technology Specialist",
    type: "Dhaka, Bangladesh",
    period: "June 2026 - Present",
    url: "https://elevateltd.net/",
    highlights: [
      'Built Power Apps canvas apps backed by SharePoint Lists as the data layer',
      'Automated business workflows with Power Automate',
      'Designed SharePoint list structures for data management, including columns, views and permissions',
      'Learned and applied Azure Automation Runbooks to script repeatable operations tasks.',
      'Provisioned infrastructure as code with Terraform and deployed and configured Azure Virtual Machines.',
      'Developed an AI chatbot for M365 support engineers.',
      'Built an agentic AI chatbot with a Next.js frontend and a Flask backend.'
    ]
  },
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
    type: "Dhaka, Bangladesh",
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
  ],
  microCloud:[
    "Azure",
    "Power Automate",
    "Power Apps",
    "Terraform",
    "Azure Automation Runbooks",
    "Microsoft 365",
    "SharePoint",
    "Terraform",
  ]
   
};

export const projects = [
  {
    title: "M365 Support AI Chatbot",
    description:
      "An AI chatbot built to assist M365 support engineers with Microsoft 365 support questions. Built at Elevate Solutions Limited.",
    tech: ["AI Chatbot", "Microsoft 365"],
    category: "AI / ML",
  },
  {
    title: "Agentic AI Chatbot",
    description:
      "An agentic AI chatbot with a Next.js frontend and a Flask backend. Built at Elevate Solutions Limited.",
    tech: ["Next.js", "TypeScript", "Flask", "Python", "LLM APIs"],
    category: "AI / ML",
  },
  {
    title: "Power Apps Canvas App & Workflow Automation",
    description:
      "Power Apps canvas apps backed by SharePoint Lists, with list structures designed for columns, views, and permissions, and business workflows automated using Power Automate. Built at Elevate Solutions Limited.",
    tech: ["Power Apps", "Power Automate", "SharePoint Lists"],
    category: "Microsoft & Cloud",
  },
  {
    title: "Azure Automation & Infrastructure as Code",
    description:
      "Repeatable operations tasks scripted with Azure Automation Runbooks, and Azure Virtual Machines provisioned and configured using Terraform. Built at Elevate Solutions Limited.",
    tech: ["Azure", "Azure Runbooks", "Terraform", "Azure Virtual Machines"],
    category: "Microsoft & Cloud",
  },
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
    {
    id: "8",
    title: "Building Business Apps with Power Apps Canvas and SharePoint Lists",
    excerpt:
      "How to turn a business process into a working app with Power Apps and SharePoint Lists, and the delegation and permission mistakes to avoid.",
    date: "2026-07-14",
    tags: ["Power Apps", "SharePoint", "Microsoft"],
    readTime: "5 min",
    content: `Power Apps canvas apps are a fast way to turn a business process into a working app, and SharePoint Lists are a practical data layer when you do not need a full database. Here is what I learned building apps this way.\n\n## Design the List First\n\nThe app is only as good as its data. Choose column types carefully (Choice, Person, Date, Number), keep column names short and consistent, and plan views and permissions before you build screens.\n\n## Respect Delegation\n\nPower Apps can only delegate some queries to SharePoint. Non-delegable formulas stop at a row limit (500 by default, up to 2,000), so large lists can silently return incomplete results. Filter on indexed columns and treat delegation warnings as bugs.\n\n## Keep Permissions Simple\n\nUse SharePoint groups instead of per-item permissions where possible. Per-item permissions are hard to maintain and slow down large lists.\n\n## Key Takeaways\n\n- Model the data before the screens\n- Treat delegation warnings as bugs\n- Index the columns you filter on\n- Use groups for permissions`,
  },
  {
    id: "9",
    title: "Power Automate Workflows That Don't Fail Silently",
    excerpt:
      "Practical habits for building reliable Power Automate flows: smart triggers, error handling, and configuration that survives change.",
    date: "2026-08-05",
    tags: ["Power Automate", "Automation", "Microsoft"],
    readTime: "5 min",
    content: `Power Automate connects apps and data without a full custom integration. Reliable flows need more than a trigger and a few actions.\n\n## Pick the Right Trigger\n\nUse event triggers such as when an item is created or modified instead of frequent schedules, and add trigger conditions so flows only run when they need to.\n\n## Handle Errors on Purpose\n\nGroup actions in a Scope and add a parallel branch configured to run after failure. This works like try and catch, and lets you log the error or notify someone instead of failing silently.\n\n## Avoid Hard-Coded Values\n\nStore environment-specific values in environment variables or a configuration list, so you can move a flow between environments without editing actions.\n\n## Own Your Connections\n\nFlows run with the connections they were built with. Use a service account where your organization allows it, so a flow does not break when one person leaves.\n\n## Key Takeaways\n\n- Use trigger conditions to avoid needless runs\n- Wrap logic in Scopes and handle failures\n- Keep configuration out of actions\n- Document each flow's purpose and owner`,
  },
  {
    id: "10",
    title: "Azure Runbooks and Terraform: Automating Cloud Operations",
    excerpt:
      "How Azure Automation Runbooks and Terraform fit together, and the habits that keep infrastructure as code safe.",
    date: "2026-08-27",
    tags: ["Azure", "Terraform", "DevOps"],
    readTime: "5 min",
    content: `Cloud work gets safer when it is scripted. Azure Automation Runbooks and Terraform cover two different parts of that: running operational tasks, and defining infrastructure.\n\n## Runbooks for Repeatable Operations\n\nAn Azure Automation Runbook runs a PowerShell or Python script on a schedule or from a webhook. Typical uses are starting and stopping virtual machines, cleaning up resources, and routine maintenance. Use the account's managed identity to authenticate so there are no stored passwords.\n\n## Terraform for Infrastructure as Code\n\nWith the azurerm provider you describe resources such as a resource group, network and virtual machine in code. The usual loop is init, plan and apply. Reading the plan before every apply is the best habit you can build.\n\n## Protect Your State\n\nTerraform state records what exists. Keep it in a remote backend such as an Azure Storage account, never in a repository, because it can contain sensitive values.\n\n## Key Takeaways\n\n- Script anything you do more than twice\n- Authenticate with managed identities\n- Always review the plan before you apply\n- Store state remotely and restrict access`,
  },
  {
    id: "11",
    title: "Building an Agentic AI Chatbot with Next.js and Flask",
    excerpt:
      "What separates an agent from a chatbot, and how to structure a Next.js frontend and a Flask backend around tool-calling.",
    date: "2026-09-18",
    tags: ["AI", "Agents", "Next.js", "Flask"],
    readTime: "6 min",
    content: `A chatbot answers questions. An agent decides what to do next, calls tools, and checks the results. Here is how I think about building one with Next.js and Flask.\n\n## Split the Responsibilities\n\nNext.js handles the chat interface and streams responses to the user. Flask owns the agent logic: the system prompt, the tool definitions, and calls to the LLM API. Keeping the model calls and keys on the server protects secrets and makes the logic easier to test.\n\n## Define Tools Clearly\n\nEach tool should do one job, with a precise name, a short description and a typed input schema. Clear tools help the model choose correctly and make failures easier to debug.\n\n## Add Guardrails\n\nLimit the number of steps, validate tool inputs, and require confirmation before actions that change data. Log every tool call so you can see why the agent did what it did.\n\n## Key Takeaways\n\n- Keep model calls and secrets on the backend\n- Keep tools small and well described\n- Cap agent loops and validate inputs\n- Log everything you may need to debug`,
  },
  {
    id: "12",
    title: "RAG Explained: Giving LLMs Your Own Knowledge",
    excerpt:
      "A practical introduction to Retrieval-Augmented Generation: embeddings, vector databases, and why retrieval quality matters most.",
    date: "2026-10-06",
    tags: ["AI", "RAG", "LLM"],
    readTime: "5 min",
    content: `Large language models do not know your private documents, and they can sound confident when they are wrong. Retrieval-Augmented Generation, or RAG, addresses both by giving the model relevant source text at question time.\n\n## How RAG Works\n\nDocuments are split into chunks and converted into embeddings, which are stored in a vector database. When a user asks a question, the question is embedded, the closest chunks are retrieved, and they are passed to the model together with the question.\n\n## Where RAG Succeeds or Fails\n\nChunk size, metadata and retrieval quality matter more than the choice of model. Chunks that are too large add noise, and chunks that are too small lose context.\n\n## Evaluate It\n\nBuild a small set of real questions with known answers and check whether the right chunks are retrieved before you judge the final answer.\n\n## Key Takeaways\n\n- Retrieval quality decides answer quality\n- Tune chunking and add metadata\n- Ask the model to cite its sources\n- Test with real questions`,
  },
];


export const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and performant web applications using React, Next.js, Tailwind CSS, and TypeScript. Pixel-perfect UI with smooth animations and seamless user experiences.",
    highlights: ["React & Next.js Apps", "Responsive Design", "UI/UX Implementation", "Performance Optimization"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing and developing robust server-side solutions with Node.js, Express, NestJS, and Hono.js. RESTful APIs, database architecture, and scalable backend systems.",
    highlights: ["REST API Development", "Database Design", "Authentication Systems", "Server Architecture"],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "Building intelligent AI chatbots, agentic AI workflows, and predictive classification systems that automate tasks and deliver data-driven insights.",
    highlights: ["AI Chatbot Development", "Agentic AI Workflows", "Predictive Classification", "AI Automation", "RAG - Retrieval-Augmented Generation" ],
  },
  {
    icon: Cloud,
    title: "Microsoft & Cloud Solutions",
    description:
      "Building business apps and automated workflows on Microsoft Power Platform, and automating cloud operations on Azure. Power Apps canvas apps, Power Automate flows, SharePoint-based data solutions, and infrastructure as code with Terraform.",
    highlights: [
      "Power Apps Canvas Apps",
      "Power Automate Workflows",
      "SharePoint Lists & Data Management",
      "Azure Runbook Automation",
      "Terraform (Infrastructure as Code)",
      "Azure Virtual Machines",
    ],
  }
];