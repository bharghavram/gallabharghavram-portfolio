// ============================================================
// data.js — Portfolio Content Data (Single Source of Truth)
// Edit this file to update portfolio content without touching HTML
// ============================================================

const portfolioData = {

  // -- Personal & Social Info ----------------------------------
  personal: {
    name: "Galla Bharghav Ram",
    title: "AI Engineer & Python Full-Stack Developer",
    location: "Based in India · Working Worldwide",
    availability: "Available for selected projects",
    email: "bharghavramgalla@gmail.com",
    github: "https://github.com/bharghavram",
    githubDisplay: "github.com/bharghavram",
    linkedin: "https://linkedin.com/in/galla-bharghav-ram-b12a2a332",
    linkedinDisplay: "linkedin.com/in/galla-bharghav-ram"
  },

  // -- Hero Section Data --------------------------------------
  hero: {
    eyebrow: "AI Engineering · Automation · Software Development",
    titlePart1: "I Build",
    titleAccent: "AI-Powered Products",
    titlePart2: "That Solve Real<br>Business Problems.",
    description: "I help startups and businesses turn ideas into intelligent, scalable software — from Generative AI and automation systems to full-stack applications and production-ready APIs.",
    primaryCta: {
      label: "Start a Project",
      href: "#contact"
    },
    secondaryCta: {
      label: "View My Work",
      href: "#projects"
    },
    capabilities: [
      "Generative AI",
      "Machine Learning",
      "Automation",
      "Full-Stack",
      "LLMs & RAG"
    ]
  },

  // -- Tech Strip ---------------------------------------------
  techStrip: {
    title: "Building with",
    items: [
      { icon: "fa-brands fa-python", name: "Python" },
      { icon: "fa-brands fa-react", name: "React" },
      { icon: "fa-solid fa-flask", name: "Flask / FastAPI" },
      { icon: "fa-solid fa-robot", name: "LLMs & GenAI" },
      { icon: "fa-solid fa-database", name: "MongoDB / SQL" },
      { icon: "fa-solid fa-brain", name: "TensorFlow" }
    ]
  },

  // -- Services Section Data ----------------------------------
  services: {
    eyebrow: "WHAT I CAN BUILD",
    titleLine1: "From Business Problems",
    titleLine2: "to Intelligent Software.",
    description: "I combine AI engineering, automation, and full-stack development to build practical software solutions that improve operations, accelerate workflows, and create new digital capabilities.",
    items: [
      {
        num: "01",
        icon: "fa-solid fa-brain",
        title: "Generative AI & LLM Solutions",
        description: "Build intelligent assistants, RAG systems, AI agents, document intelligence platforms, and domain-specific LLM applications designed around real business workflows.",
        capabilities: ["LLMs", "RAG", "AI Agents", "Document Intelligence", "LLM Applications"]
      },
      {
        num: "02",
        icon: "fa-solid fa-gears",
        title: "Intelligent Automation",
        description: "Turn repetitive business processes into intelligent automated workflows that reduce manual effort, improve consistency, and accelerate operations.",
        capabilities: ["Workflow Automation", "Data Processing", "Report Automation", "AI Automation", "Process Optimization"]
      },
      {
        num: "03",
        icon: "fa-solid fa-chart-line",
        title: "Machine Learning & Predictive AI",
        description: "Develop machine learning solutions that transform business data into predictions, classifications, insights, and actionable intelligence.",
        capabilities: ["Predictive Models", "Classification", "Data Analysis", "Computer Vision", "AI Analytics"]
      },
      {
        num: "04",
        icon: "fa-solid fa-code",
        title: "Full-Stack Product Engineering",
        description: "Design and develop reliable business applications, APIs, dashboards, and web platforms that integrate AI capabilities with modern software architecture.",
        capabilities: ["Python", "FastAPI / Flask", "React", "REST APIs", "SQL / MongoDB"]
      }
    ],
    footerText: "Need something more specific? I can design a custom AI or software solution around your workflow, data, and business requirements.",
    footerCta: {
      label: "Discuss a Project",
      href: "#contact"
    }
  },

  // -- About Section Data -------------------------------------
  about: {
    eyebrow: "ABOUT",
    titleLine1: "Building Intelligent Software",
    titleLine2: "With a Product Mindset.",
    intro: "I specialize in designing and building AI-driven software solutions that connect intelligent technology with practical business needs.",
    profileImage: "public/profile.jpeg",
    role: "AI ENGINEER",
    roleSub: "Generative AI · Automation · Full-Stack",
    paragraphs: [
      "My work spans Machine Learning, Deep Learning, Generative AI, automation, and modern full-stack development. I build solutions such as intelligent document processing systems, AI assistants, predictive applications, automated workflows, and business-focused web platforms.",
      "I work across the full development lifecycle — from understanding a problem and designing the solution to building APIs, integrating AI capabilities, developing interfaces, and preparing applications for deployment. My focus is on clean architecture, practical implementation, and software that delivers measurable value."
    ],
    metrics: [
      { num: "5+", label: "Client Solutions" },
      { num: "15+", label: "AI & Software Projects" },
      { num: "8.9", label: "B.Tech CGPA" }
    ],
    approachTitle: "How I Approach Technology",
    approachDesc: "I focus on building solutions that are practical, maintainable, and aligned with the problem they are meant to solve. AI is not the objective by itself — it is a tool for creating better workflows, smarter applications, and useful business outcomes.",
    principles: [
      { num: "01", name: "Problem First", text: "Understand the workflow and business requirement before choosing the technology." },
      { num: "02", name: "Build for Use", text: "Focus on practical, reliable software rather than technology for technology's sake." },
      { num: "03", name: "AI Where It Matters", text: "Apply AI where it can meaningfully improve automation, intelligence, or user experience." }
    ]
  },

  // -- Experience Section Data --------------------------------
  experience: {
    eyebrow: "EXPERIENCE",
    titleLine1: "Building Across AI, Software",
    titleLine2: "& Product Engineering.",
    sub: "My experience spans AI engineering, full-stack development, client solutions, and technical mentorship — combining practical software development with emerging AI technologies.",
    projectExperience: [
      {
        title: "Software Development Intern",
        company: "KVK Technoid",
        period: "Jun 2026 – Present",
        badgeClass: "badge-green",
        cardClass: "card-accent-green",
        bullets: [
          "Contributing to full-stack and AI-driven feature development using Python and modern web frameworks.",
          "Collaborating with the engineering team on building and testing backend services and APIs.",
          "Assisting with debugging, code reviews, and deployment support for ongoing projects."
        ]
      },
      {
        title: "Freelance Python & AI Developer",
        company: "Self-Employed | Remote",
        period: "Jun 2025 – Present",
        badgeClass: "badge-green",
        cardClass: "card-accent-green",
        bullets: [
          "Delivered AI-based solutions to 5+ clients, developing Machine Learning and Deep Learning models for prediction, classification, and anomaly detection using Python.",
          "Built Generative AI applications using Large Language Models (LLMs), including document Q&A systems, conversational assistants, and vector-database retrieval pipelines.",
          "Automated a daily stock-market data segregation system for a trading client using Pandas, Streamlit, and Python, reducing manual processing and enabling structured analysis workflows.",
          "Developed a full-stack website for a sports company using ReactJS, delivering a responsive and performant user experience.",
          "Built a hybrid house price prediction system combining Machine Learning and Deep Learning for a Master's research project.",
          "Implemented loan eligibility prediction using Qwen3.5 with LoRA fine-tuning for efficient, domain-specific inference."
        ]
      },
      {
        title: "Software Development Engineer (SDE) Intern",
        company: "SHNOOR International LLC",
        period: "Jan 2026 – Mar 2026",
        badgeClass: "badge-green",
        cardClass: "card-accent-green",
        bullets: [
          "Developed and maintained full-stack web modules using ReactJS, JavaScript, and backend APIs.",
          "Worked on admin dashboards, authentication systems, and role-based access control features.",
          "Integrated frontend interfaces with backend services, handling API communication and error management.",
          "Debugged production issues, resolved application errors, and improved system stability through collaborative development."
        ]
      }
    ],
    traineeExperience: [
      {
        title: "AI Fullstack Trainer — Batch 1",
        company: "Generative AI Training Program | In-person / Remote",
        period: "Completed",
        badgeClass: "badge-purple",
        cardClass: "card-accent-purple",
        bullets: [
          "Conducted a complete AI Fullstack course covering Python, Machine Learning, Deep Learning, and Generative AI from scratch to deployment.",
          "Guided learners through hands-on projects, prompt engineering techniques, LLM application development, and real-world implementation scenarios.",
          "Designed curriculum covering end-to-end AI development lifecycle including data processing, model building, and API integration."
        ]
      },
      {
        title: "Generative AI Trainer — Batches 2 & 3",
        company: "Generative AI Training Program | In-person / Remote",
        period: "2 Batches Completed",
        badgeClass: "badge-purple",
        cardClass: "card-accent-purple",
        bullets: [
          "Conducted 2 dedicated Generative AI training batches, covering LLM fundamentals, prompt engineering, RAG pipelines, and agent-based architectures.",
          "Delivered practical sessions on integrating LLMs into real-world applications using LangChain, LangFlow, and vector databases.",
          "Mentored learners through capstone projects, helping them build production-ready GenAI solutions."
        ]
      }
    ]
  },

  // -- Projects Section Data ----------------------------------
  projects: [
    {
      num: "01",
      category: "CLIENT SOLUTION",
      featured: true,
      title: "Stock Market Data Segregation",
      concept: "Automating repetitive market-data processing workflows for a trading client.",
      problem: "Repetitive manual stock-market data segregation causing processing overhead and analysis delays.",
      solution: "Python & Streamlit automated processing pipeline for real-time segregation and structured monitoring.",
      achievements: [
        "Automated daily data collection and segregation pipeline",
        "Built interactive Streamlit dashboard for real-time monitoring",
        "Eliminated manual processing, saving significant time daily",
        "Improved data accuracy and consistency for trading decisions"
      ],
      tags: ["Python", "Pandas", "Streamlit", "Automation"],
      links: { live: "", github: "" }
    },
    {
      num: "02",
      category: "GENERATIVE AI / SaaS",
      featured: true,
      title: "AI Question Generator",
      concept: "Turning study materials into structured exam questions using Retrieval-Augmented Generation.",
      problem: "Time-consuming manual creation of exam questions, quizzes, and assessment materials for educators.",
      solution: "SaaS platform using PyMuPDF parsing, ChromaDB vector embeddings, and RAG pipelines to generate structured tests in seconds.",
      achievements: [
        "Implemented document parsing using PyMuPDF & LlamaIndex",
        "Created RAG pipeline with ChromaDB embeddings",
        "Supports MCQ, True/False, Fill-in-the-Blanks, Short Answer",
        "Generates structured question papers within seconds"
      ],
      tags: ["Python", "Flask", "LLMs", "ChromaDB", "React"],
      links: { live: "", github: "" }
    },
    {
      num: "03",
      category: "GENERATIVE AI / AUTOMATION",
      featured: true,
      title: "Financial Auditing Intelligence System",
      concept: "Transforming unstructured financial documents into structured audit intelligence.",
      problem: "Unstructured financial PDFs requiring complex manual analysis and risk assessment by auditing teams.",
      solution: "AI audit pipeline combining PyPDF2 extraction, Hugging Face embeddings, and Gemini 2.5 Flash for context-driven risk reports.",
      achievements: [
        "Automated PDF extraction using PyPDF2 & Hugging Face embeddings",
        "Integrated Gemini 2.5 Flash for context-driven analysis",
        "Generates comprehensive audit reports with risk assessment",
        "Reduces manual analysis time significantly"
      ],
      tags: ["Python", "GenAI", "Gemini API", "PDF Processing"],
      links: { live: "", github: "" }
    },
    {
      num: "04",
      category: "FULL-STACK / WEB",
      featured: false,
      title: "Sports Company Website",
      description: "Fully static website built for PrimeSport, a sports company. Features a polished, high-performance frontend with smooth scroll-based animations, section reveal effects, and interactive micro-animations.",
      achievements: [
        "Built a fully static, zero-backend website optimised for speed and SEO",
        "Implemented smooth scrolling effects and scroll-triggered section reveals",
        "Added interactive micro-animations and hover transitions throughout",
        "Delivered a responsive, cross-browser-compatible layout for all devices"
      ],
      tags: ["HTML", "CSS", "JavaScript", "Animations", "Static Site"],
      links: { live: "https://primesport.in/", github: "" },
      ctaText: "Visit Website"
    },
    {
      num: "05",
      category: "RESEARCH / MACHINE LEARNING",
      featured: false,
      title: "Hybrid House Price Prediction",
      description: "Research-grade hybrid house price prediction system combining classical Machine Learning and Deep Learning, developed for a Master's thesis.",
      achievements: [
        "Designed hybrid architecture blending ML regression with neural networks",
        "Performed in-depth feature engineering and EDA on real estate datasets",
        "Achieved improved prediction accuracy over single-model baselines",
        "Produced academic-grade documentation and model evaluation report"
      ],
      tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      links: { live: "", github: "" }
    },
    {
      num: "06",
      category: "GENERATIVE AI / MACHINE LEARNING",
      featured: false,
      title: "Loan Eligibility Prediction",
      description: "Fine-tuned Qwen3.5 with LoRA (Low-Rank Adaptation) for domain-specific loan eligibility classification.",
      achievements: [
        "Applied LoRA fine-tuning on Qwen3.5 for financial classification",
        "Achieved high accuracy with significantly reduced compute cost",
        "Built inference pipeline for real-time loan eligibility decisions",
        "Documented fine-tuning methodology and evaluation benchmarks"
      ],
      tags: ["Qwen3.5", "LoRA", "Hugging Face", "Python"],
      links: { live: "", github: "" }
    }
  ],

  // -- Skills Section Data ------------------------------------
  skills: {
    eyebrow: "THE ENGINEERING STACK",
    titleLine1: "Technologies I Use to Build",
    titleLine2: "Intelligent Software.",
    sub: "From machine learning and Generative AI to backend systems and modern web applications, I work across the stack to turn ideas into usable software.",
    flowSteps: [
      { num: "01", text: "AI Models & RAG" },
      { num: "02", text: "Data & Embeddings" },
      { num: "03", text: "Backend APIs & Logic" },
      { num: "04", text: "Product Interfaces" },
      { num: "05", text: "Deployment & Delivery" }
    ],
    categories: [
      {
        num: "01",
        category: "AI & GENERATIVE AI",
        isCore: true,
        badge: "CORE CAPABILITY",
        description: "Designing intelligent applications around LLMs, retrieval, agents, and domain-specific AI workflows.",
        groups: [
          {
            label: "LLMs & Agentic Architectures",
            tags: ["Large Language Models / LLMs", "RAG", "LangChain", "LangFlow", "Multi-Agent Systems", "MCP Server", "Generative AI"]
          },
          {
            label: "Model Customization & Embeddings",
            tags: ["Hugging Face", "Fine-tuning", "Prompt Engineering", "Vector DB Retrieval"]
          },
          {
            label: "AI Applications",
            tags: ["Conversational Assistants", "Document Intelligence", "AI Application Development"]
          }
        ]
      },
      {
        num: "02",
        category: "MACHINE LEARNING & COMPUTER VISION",
        isCore: false,
        badge: null,
        description: "Building predictive, classification, analytical, and computer-vision solutions using modern ML and DL frameworks.",
        groups: [
          {
            label: "Frameworks & Libraries",
            tags: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"]
          },
          {
            label: "Data Science & Analysis",
            tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
          },
          {
            label: "Core Domains",
            tags: ["Neural Networks", "Deep Learning", "Computer Vision", "Time Series Analysis", "NLP", "Regression & Classification"]
          }
        ]
      },
      {
        num: "03",
        category: "FULL-STACK ENGINEERING",
        isCore: false,
        badge: null,
        description: "Building the application layer around AI — from APIs and backend services to responsive web interfaces and data systems.",
        groups: [
          {
            label: "Languages & Core",
            tags: ["Python", "JavaScript", "HTML", "CSS"]
          },
          {
            label: "Backend & APIs",
            tags: ["FastAPI", "Flask", "REST APIs", "API Routing", "CRUD"]
          },
          {
            label: "Frontend & Databases",
            tags: ["React.js", "DOM", "AJAX", "SQL", "MySQL", "SQLite", "MongoDB"]
          }
        ]
      },
      {
        num: "04",
        category: "AI PRODUCT DEVELOPMENT",
        isCore: false,
        badge: null,
        description: "Using modern AI-assisted development and creative tools to accelerate product design, interfaces, prototypes, and digital experiences.",
        groups: [
          {
            label: "AI Assistants & Builders",
            tags: ["Claude", "GPT", "Gemini", "BoltAI", "Lovable AI"]
          },
          {
            label: "UI & Creative Tech",
            tags: ["Figma", "Google Flow", "Stitch", "Prompt-to-UI", "AI Video Generation", "Motion Graphics", "3D Animated Videos"]
          }
        ]
      },
      {
        num: "05",
        category: "DATA, CLOUD & DELIVERY",
        isCore: false,
        badge: null,
        description: "Working with data stores, version control, hosting, and deployment-oriented tooling.",
        groups: [
          {
            label: "Deployment & Hosting",
            tags: ["Git", "GitHub Pages", "Hostinger", "AWS S3"]
          },
          {
            label: "Interactive Apps & Data",
            tags: ["Streamlit", "SQL Databases", "MongoDB", "Data Pipelines"]
          }
        ]
      }
    ],
    softSkills: [
      "Team Leadership",
      "Mentoring",
      "Technical Documentation",
      "Client Communication",
      "Agile Methodologies",
      "Public Speaking"
    ]
  },

  // -- Education Section Data ---------------------------------
  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Bapatla Engineering College",
      period: "2022 – 2026",
      result: "CGPA: 8.9",
      isPrimary: true
    },
    {
      degree: "Class XII",
      institution: "DKNP Junior College, Vissannapet",
      period: "2020 – 2022",
      result: "Percentage: 94%",
      isPrimary: false
    },
    {
      degree: "Class X",
      institution: "Sri Siddhartha High School, Vissannapet",
      period: "2019 – 2020",
      result: "Percentage: 97%",
      isPrimary: false
    }
  ],

  // -- Contact Section Data -----------------------------------
  contact: {
    eyebrow: "START A PROJECT",
    title: "Let's Build Something Useful.",
    sub: "Have an AI idea, automation challenge, or software product in mind? Let's turn it into something real.",
    primaryCta: {
      label: "START A PROJECT",
      href: "mailto:bharghavramgalla@gmail.com?subject=Project%20Inquiry&body=Hi%20Bharghav%2C%20I'd%20like%20to%20discuss%20a%20project..."
    },
    services: [
      "AI Engineering",
      "Generative AI",
      "Automation",
      "Full-Stack Development"
    ],
    links: [
      {
        label: "EMAIL",
        val: "bharghavramgalla@gmail.com",
        href: "mailto:bharghavramgalla@gmail.com",
        icon: "fa-solid fa-envelope",
        arrowIcon: "fa-solid fa-arrow-right",
        external: false
      },
      {
        label: "GITHUB",
        val: "github.com/bharghavram",
        href: "https://github.com/bharghavram",
        icon: "fab fa-github",
        arrowIcon: "fa-solid fa-arrow-up-right-from-square",
        external: true
      },
      {
        label: "LINKEDIN",
        val: "linkedin.com/in/galla-bharghav-ram",
        href: "https://linkedin.com/in/galla-bharghav-ram-b12a2a332",
        icon: "fab fa-linkedin-in",
        arrowIcon: "fa-solid fa-arrow-up-right-from-square",
        external: true
      }
    ],
    availability: "Available for selected projects",
    location: "Based in India · Working Worldwide"
  }
};

// Aliases for backwards compatibility
const experiences = portfolioData.experience;
const projects = portfolioData.projects;
const technicalSkills = portfolioData.skills;
const education = portfolioData.education;
