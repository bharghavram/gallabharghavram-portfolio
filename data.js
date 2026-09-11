// ============================================================
// data.js — Portfolio content data
// Edit this file to update your portfolio without touching HTML
// ============================================================

// -- Experiences ---------------------------------------------
const experiences = {
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
        "Assisting with debugging, code reviews, and deployment support for ongoing projects.",
      ],
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
        "Implemented loan eligibility prediction using Qwen3.5 with LoRA fine-tuning for efficient, domain-specific inference.",
      ],
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
        "Debugged production issues, resolved application errors, and improved system stability through collaborative development.",
      ],
    },
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
        "Designed curriculum covering end-to-end AI development lifecycle including data processing, model building, and API integration.",
      ],
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
        "Mentored learners through capstone projects, helping them build production-ready GenAI solutions.",
      ],
    },
  ],
};

// -- Projects -------------------------------------------------
const projects = [
  {
    icon: "fa-solid fa-chart-line",
    badgeLabel: "Python, Pandas, Streamlit",
    title: "Stock Market Data Segregation",
    description:
      "Automated daily stock-market data segregation system for a trading client. Eliminates manual processing overhead and enables structured analysis workflows for financial decision-making.",
    achievements: [
      "Automated daily data collection and segregation pipeline",
      "Built interactive Streamlit dashboard for real-time monitoring",
      "Eliminated manual processing, saving significant time daily",
      "Improved data accuracy and consistency for trading decisions",
    ],
    tags: ["Python", "Pandas", "Streamlit", "Automation"],
  },
  {
    icon: "fa-solid fa-globe",
    badgeLabel: "Static Website",
    title: "Sports Company Website",
    url: "https://primesport.in/",
    description:
      "Fully static website built for PrimeSport, a sports company. Features a polished, high-performance frontend with smooth scroll-based animations, section reveal effects, and interactive micro-animations — delivering a premium brand experience without any backend dependency.",
    achievements: [
      "Built a fully static, zero-backend website optimised for speed and SEO",
      "Implemented smooth scrolling effects and scroll-triggered section reveals",
      "Added interactive micro-animations and hover transitions throughout",
      "Delivered a responsive, cross-browser-compatible layout for all devices",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Animations", "Static Site"],
  },
  {
    icon: "fa-solid fa-house",
    badgeLabel: "ML, Deep Learning",
    title: "Hybrid House Price Prediction",
    description:
      "Research-grade hybrid house price prediction system combining classical Machine Learning and Deep Learning, developed for a Master's thesis. Achieves superior accuracy by leveraging strengths of both paradigms.",
    achievements: [
      "Designed hybrid architecture blending ML regression with neural networks",
      "Performed in-depth feature engineering and EDA on real estate datasets",
      "Achieved improved prediction accuracy over single-model baselines",
      "Produced academic-grade documentation and model evaluation report",
    ],
    tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
  },
  {
    icon: "fa-solid fa-robot",
    badgeLabel: "LLM, LoRA Fine-tuning",
    title: "Loan Eligibility Prediction (Qwen3.5 + LoRA)",
    description:
      "Fine-tuned Qwen3.5 with LoRA (Low-Rank Adaptation) for domain-specific loan eligibility classification. Demonstrates efficient LLM adaptation for financial use-cases without full model retraining.",
    achievements: [
      "Applied LoRA fine-tuning on Qwen3.5 for financial classification",
      "Achieved high accuracy with significantly reduced compute cost",
      "Built inference pipeline for real-time loan eligibility decisions",
      "Documented fine-tuning methodology and evaluation benchmarks",
    ],
    tags: ["Qwen3.5", "LoRA", "Hugging Face", "Python"],
  },
  {
    icon: "fa-solid fa-brain",
    badgeLabel: "Python, LLMs, RAG",
    title: "AI Question Generator (SaaS)",
    description:
      "SaaS platform that automatically generates exam-quality questions from uploaded study materials, saving educational institutions hours of manual preparation time.",
    achievements: [
      "Implemented document parsing using PyMuPDF & LlamaIndex",
      "Created RAG pipeline with ChromaDB embeddings",
      "Supports MCQ, True/False, Fill-in-the-Blanks, Short Answer",
      "Generates structured question papers within seconds",
    ],
    tags: ["Python", "Flask", "LLMs", "ChromaDB", "React"],
  },
  {
    icon: "fa-solid fa-file-invoice",
    badgeLabel: "Python, GenAI, PDF",
    title: "Financial Auditing Intelligence System",
    description:
      "AI-powered system that automates the entire financial auditing workflow using advanced document processing and Gemini 2.5 Flash, significantly reducing manual analysis time.",
    achievements: [
      "Automated PDF extraction using PyPDF2 & Hugging Face embeddings",
      "Integrated Gemini 2.5 Flash for context-driven analysis",
      "Generates comprehensive audit reports with risk assessment",
      "Reduces manual analysis time significantly",
    ],
    tags: ["Python", "GenAI", "Gemini API", "PDF Processing"],
  },
];

// -- Technical Skills -----------------------------------------
const technicalSkills = {
  mlAndAI: {
    title: "Machine Learning & AI",
    icon: "fa-solid fa-brain",
    groups: [
      {
        label: "Deep Learning & NLP",
        type: "text",
        content:
          "Neural Networks, Ensemble Methods, Computer Vision, Time Series Analysis, Multimodal Language Models, NLP, Regression & Classification",
      },
      {
        label: "Libraries & Frameworks",
        type: "badges",
        items: [
          "TensorFlow", "PyTorch", "Keras", "Streamlit", "OpenCV",
          "Scikit-learn", "Pandas", "NumPy", "Seaborn", "Matplotlib",
          "Hugging Face", "LangChain", "LangFlow", "Multi-Agent Systems",
          "MCP Server", "Fine-tuning",
        ],
      },
    ],
  },
  fullstack: {
    title: "Fullstack Development",
    icon: "fa-solid fa-code",
    groups: [
      {
        label: "Frontend",
        type: "badges",
        items: ["HTML", "CSS", "JavaScript", "React.js", "AJAX", "DOM", "Figma"],
      },
      {
        label: "Backend & Databases",
        type: "badges",
        items: ["Flask", "FastAPI", "API Routing", "SQL", "MongoDB", "MySQL", "SQLite", "CRUD"],
      },
      {
        label: "AI Tools & Platforms",
        type: "badges",
        items: ["Claude", "GPT", "Gemini", "BoltAI", "Lovable AI"],
      },
      {
        label: "Deployment & Hosting",
        type: "badges",
        items: ["Hostinger", "AWS S3", "GitHub Pages"],
      },
    ],
  },
  aiCreative: {
    title: "Frontend Development with AI",
    icon: "fa-solid fa-wand-magic-sparkles",
    groups: [
      {
        label: "AI-Powered Design & Video Tools",
        type: "badges",
        items: [
          "Google Flow", "Stitch", "3D Animated Videos",
          "AI Video Generation", "Motion Graphics", "Prompt-to-UI",
        ],
      },
      {
        label: "Capabilities",
        type: "text",
        content:
          "Generating production-ready UI designs and 3D animated video content using AI tools. Building visually rich frontends assisted by AI-driven design workflows — from concept to polished, animated web experiences.",
      },
    ],
  },
  softSkills: [
    "Team Leadership",
    "Mentoring",
    "Technical Documentation",
    "Client Communication",
    "Agile Methodologies",
    "Public Speaking",
  ],
};

// -- Education -------------------------------------------------
const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Bapatla Engineering College",
    period: "2022 – 2026",
    result: "CGPA: 8.9",
  },
  {
    degree: "Class XII",
    institution: "DKNP Junior College, Vissannapet",
    period: "2020 – 2022",
    result: "Percentage: 94%",
  },
  {
    degree: "Class X",
    institution: "Sri Siddhartha High School, Vissannapet",
    period: "2019 – 2020",
    result: "Percentage: 97%",
  },
];
