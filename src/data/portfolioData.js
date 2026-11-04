/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Venkatesh Malipatil (VNKY)
 * 
 * Edit any field in this file to update your portfolio website instantly!
 * =========================================================================
 */

export const personalInfo = {
  name: "Venkatesh Malipatil",
  displayName: "VNKY",
  title: "Python Developer | Full Stack Developer",
  animatedRoles: [
    "Python Developer",
    "Full Stack Developer",
    "FastAPI & Flask Specialist",
    "Software Developer"
  ],
  educationSummary: "B.E. Computer Science and Engineering @ VTU",
  university: "Visvesvaraya Technological University (VTU)",
  college: "K.N.S Institute of Technology, Bengaluru", // Fully editable
  graduationYear: "2025",                             // Fully editable
  cgpa: "8.59 / 10.0",                                // Fully editable
  location: "Bengaluru / Yadgir, Karnataka, India",
  email: "venkateshmalipatil188@gmail.com",            // Fully editable
  phone: "+91 9535048508",                            // Fully editable
  githubUrl: "https://github.com/venkateshmalipatil222-oss",
  linkedinUrl: "https://linkedin.com/in/venkatesh-malipatil-266013380",
  resumePath: "/Venkatesh_Malipatil_Resume.pdf",
  avatarUrl: "/avatar.jpg",
  openToWork: true,
  statusText: "Open to Placement & Software Developer Opportunities",

  careerGoal: "Python Developer / Full Stack Developer",

  professionalInterests: [
    "Python Development",
    "Full Stack Web Development",
    "Artificial Intelligence & NLP",
    "Backend Development & REST APIs",
    "Database Management & System Design"
  ],

  // Direct quote requested in prompt:
  professionalIntroduction: 
    "I am a Computer Science Engineering student passionate about software development and building practical digital solutions. I enjoy working with Python, web technologies and databases. I am continuously improving my technical skills and developing real-world projects to solve practical problems.",

  aboutParagraphs: [
    "As a Computer Science & Engineering graduate from Visvesvaraya Technological University (VTU), I focus on engineering robust web applications, high-performance backend systems, and practical AI-driven utilities. My journey is rooted in building real-world software that bridges data persistence, server-side logic, and modern frontend user experiences.",
    "I have hands-on experience designing and deploying scalable architectures using Python (FastAPI, Flask), JavaScript, React.js, and relational databases like MySQL. From architecting an institutional AI placement portal with multi-modal interview analysis to building machine-learning expense trackers with OCR receipt processing, I emphasize clean code, modular design, and measurable problem-solving.",
    "Driven by continuous learning and software craftsmanship, I am actively seeking roles as a Python Developer or Full Stack Developer where I can contribute to mission-critical products, collaborate with talented engineering teams, and deliver reliable solutions at scale."
  ],

  quickStats: [
    { label: "Full-Stack & AI Projects", value: "3+", icon: "Code" },
    { label: "Graduation CGPA", value: "8.59", icon: "GraduationCap" },
    { label: "Core Technologies", value: "10+", icon: "Layers" },
    { label: "Passion & Dedication", value: "100%", icon: "Zap" }
  ]
};

export const technicalSkills = [
  {
    category: "Programming",
    description: "Core languages for algorithmic logic, system scripting, and query design",
    skills: [
      { name: "Python", level: "Advanced", badge: "Primary", highlight: "FastAPI, Flask, OOP, Async I/O, Data Processing" },
      { name: "JavaScript", level: "Proficient", badge: "Frontend/ES6+", highlight: "Modern ES6+, DOM, Async/Await, Fetch APIs" },
      { name: "SQL", level: "Proficient", badge: "Relational", highlight: "Complex Queries, Joins, Indexing, CRUD Architecture" }
    ]
  },
  {
    category: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "HTML5", level: "Advanced", badge: "Markup", highlight: "Semantic Structure, Accessibility, Form Design" },
      { name: "CSS3", level: "Advanced", badge: "Styling", highlight: "Flexbox, CSS Grid, Responsive Design, Animations" },
      { name: "React.js", level: "Proficient", badge: "Framework", highlight: "Hooks, Component Architecture, State, SPA Routing" }
    ]
  },
  {
    category: "Backend",
    description: "Server architecture, microservices, and secure API gateways",
    skills: [
      { name: "FastAPI", level: "Proficient", badge: "Async API", highlight: "High-throughput REST, Pydantic validation, OpenAPI" },
      { name: "Flask", level: "Advanced", badge: "Microframework", highlight: "Blueprints, SQLAlchemy ORM, Session Security, Routing" },
      { name: "REST APIs", level: "Advanced", badge: "Architecture", highlight: "JSON endpoints, HTTP specs, Authentication, Error handling" }
    ]
  },
  {
    category: "Database",
    description: "Relational modeling, schema design, and query optimization",
    skills: [
      { name: "MySQL", level: "Proficient", badge: "RDBMS", highlight: "Relational Schema, Foreign Keys, Stored Procedures, Optimization" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Workflow versioning, development environments, and team collaboration",
    skills: [
      { name: "Git", level: "Proficient", badge: "Version Control", highlight: "Branching, Merges, Rebase, Repository Management" },
      { name: "GitHub", level: "Proficient", badge: "Collaboration", highlight: "Open Source, Code Reviews, Actions CI/CD, Releases" },
      { name: "VS Code", level: "Advanced", badge: "IDE", highlight: "Extensions, Python Virtualenvs, Debugger, Linters" }
    ]
  }
];

export const projects = [
  {
    id: "aitpms",
    title: "AI-Powered Training and Placement Management System",
    shortTitle: "AI Placement Portal",
    badge: "Featured Academic Project",
    category: "AI & Full Stack",
    filterKey: "ai",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Python 3.13",
      "MySQL",
      "AI / NLP",
      "YOLOv8",
      "MediaPipe",
      "ReportLab"
    ],
    summary:
      "An AI-powered academic and placement platform engineered to automate student training, performance evaluation, intelligent resume parsing, interview preparation, and institutional recruitment drives.",
    description:
      "Developed a comprehensive, enterprise-ready placement ecosystem bridging academic management with cutting-edge AI subsystems. Features deterministic criteria evaluation, multi-modal mock interview assessments (computer vision, voice acoustics, and NLP semantic scoring), and automated institutional PDF report generation.",
    features: [
      "Role-Based Access Control: Granular portals for Admin, Trainer, and Student roles with session security.",
      "Placement Eligibility Tracking: Deterministic engine comparing CGPA, attendance, and verified skills against job criteria with transparent pass/fail explanations.",
      "AI-Powered Resume Analysis: Automated PDF text extraction, structural section classification, and taxonomy-grounded skill verification.",
      "Multi-Modal AI Interview Assessment: Dynamic question generation, NLP semantic answer evaluation, acoustic speech fluency metrics (WPM, pauses), and YOLOv8/MediaPipe integrity monitoring.",
      "Student Performance Analytics: Continuous weak-area identification (<65% benchmarks) and early training intervention flags for mentors.",
      "Placement & Accreditation Reports: Institutional report generation and student research dossiers generated automatically via ReportLab."
    ],
    metrics: [
      { label: "Architecture", value: "FastAPI + React" },
      { label: "AI Models", value: "NLP + YOLOv8 + MediaPipe" },
      { label: "Database", value: "MySQL 8.0 / SQLite" }
    ],
    githubUrl: "https://github.com/venkateshmalipatil222-oss/ai-placement-portal",
    liveDemoUrl: null, // Set to string URL when deployed
    previewGradient: "from-cyan-500/20 via-indigo-500/20 to-purple-500/20"
  },
  {
    id: "expense-tracker",
    title: "Smart Expense Tracker (AI / ML Financial Platform)",
    shortTitle: "Smart Expense Tracker",
    badge: "AI / ML Financial Platform",
    category: "Full Stack & Python",
    filterKey: "fullstack",
    technologies: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "MySQL / SQLite",
      "Scikit-Learn",
      "RapidOCR",
      "OpenCV",
      "Chart.js",
      "Pandas"
    ],
    summary:
      "A personal finance management application designed to record, organize, and monitor expenses with machine learning spending pattern analysis, OCR receipt scanning, and statistical anomaly detection.",
    description:
      "Engineered a modular financial management suite featuring an optical character recognition (OCR) receipt intake pipeline, automated dual-tier expense classification, rolling trend analytics, forward-looking cash flow projections, and bank statement CSV/Excel ingestion with duplicate deduplication.",
    features: [
      "AI-Powered Financial Insights: Computes 30/60/90 day rolling trends, month-over-month category variance, and actionable recommendations distinguishing rule-based calculations from statistical-ML patterns.",
      "OCR Receipt Scanner: Computer vision preprocessing with OpenCV denoising and RapidOCR entity extraction to capture merchant, date, and amount with live user confirmation.",
      "Dual-Tier Expense Categorization: Hybrid pipeline coupling high-precision keyword heuristics with Scikit-Learn TF-IDF + Multinomial Naive Bayes classifier.",
      "Ethical Anomaly Detection: Calculates category-specific IQR baselines, modified Z-scores, and Isolation Forest multidimensional outlier scoring with clear non-alarmist rationales.",
      "Recurring Transactions & Cash Flow Forecaster: Daily/weekly/monthly schedules with idempotency, 30-day projection curves, and 95% statistical confidence bands.",
      "Bank Statement Ingestion & Deduplication: Native CSV and Excel statement parsing via Pandas with custom column mapping and automated duplicate row prevention."
    ],
    metrics: [
      { label: "Core Stack", value: "Flask + Scikit-Learn" },
      { label: "Vision", value: "RapidOCR + OpenCV" },
      { label: "Forecasting", value: "Time-Series Regression" }
    ],
    githubUrl: "https://github.com/venkateshmalipatil222-oss/expense-tracker",
    liveDemoUrl: null,
    previewGradient: "from-emerald-500/20 via-teal-500/20 to-blue-500/20"
  },
  {
    id: "ai-travel-planner",
    title: "AI Travel Planner",
    shortTitle: "AI Travel Planner",
    badge: "Web & Database Application",
    category: "Python & Backend",
    filterKey: "backend",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "REST APIs"
    ],
    summary:
      "A web-based travel planning application designed to help users organize travel information, generate personalized itineraries, and track trip histories with MySQL database integration.",
    description:
      "Built a travel management web service that generates customized travel schedules based on destination inputs, travel dates, passenger group sizes, and budget constraints. Implements persistent itinerary logging and a clean user interface for exploring destinations and trip expenses.",
    features: [
      "Personalized Trip Planning: User inputs for destination selection, departure and return dates, traveler headcount, and preferred budget tiers.",
      "Dynamic Itinerary & Recommendations: Synthesizes travel schedules including recommended attractions, lodging options, transport logistics, and estimated costs.",
      "Persistent Trip History & Tracking: Full MySQL database integration to store, inspect, and manage planned itineraries over time.",
      "RESTful API & Modular Architecture: Clean separation of route controllers, business logic services, and database query handlers.",
      "Responsive User Interface: Intuitive forms, interactive itinerary views, and summary breakdowns accessible across mobile and desktop devices."
    ],
    metrics: [
      { label: "Backend", value: "Python Flask" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Architecture", value: "MVC Pattern" }
    ],
    githubUrl: "https://github.com/venkateshmalipatil222-oss/ai-travel-planner",
    liveDemoUrl: null,
    previewGradient: "from-amber-500/20 via-orange-500/20 to-indigo-500/20"
  }
];

export const educationList = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "K.N.S Institute of Technology, Bengaluru",
    university: "Visvesvaraya Technological University (VTU)",
    duration: "2021 – 2025",
    score: "CGPA: 8.59 / 10.0",
    status: "Graduated with Distinction",
    highlights: [
      "Specialized in Software Engineering, Object-Oriented Systems, and Database Architectures.",
      "Completed Academic Major Project: AI-Powered Training & Placement Management System (AITPMS).",
      "Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Python Programming, Web Technologies."
    ]
  },
  {
    degree: "Pre-University Course (Class XII - Science PCMB)",
    institution: "JSS SM Independent PU College, Dharwad",
    university: "Karnataka Pre-University Education Board",
    duration: "2019 – 2021",
    score: "Percentage: 90.83%",
    status: "Completed with Distinction",
    highlights: [
      "Physics, Chemistry, Mathematics, Biology.",
      "Developed strong analytical, logical reasoning, and quantitative problem-solving foundations."
    ]
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Morarji Desai Residential School, Kembhavi",
    university: "KSEEB",
    duration: "2018 – 2019",
    score: "Percentage: 78.29%",
    status: "Completed with First Class",
    highlights: [
      "Rigorous residential curriculum focusing on scientific discipline, academics, and leadership."
    ]
  }
];

export const certifications = [
  {
    id: "cert-python",
    title: "Python Programming & Full Stack Development",
    issuer: "Professional Certification",
    category: "Python / Full Stack",
    date: "Certified",
    skillsGained: ["Python OOP", "FastAPI / Flask", "REST Architecture", "Data Structures"],
    description:
      "Comprehensive certification covering advanced Python programming, asynchronous processing, backend web frameworks, API security, and database ORM integration.",
    verificationType: "Certificate File / Upload Preview Supported",
    fileUrl: null
  },
  {
    id: "cert-sql",
    title: "Relational Database Management & SQL Certification",
    issuer: "Database Systems Certification",
    category: "Database & Backend",
    date: "Certified",
    skillsGained: ["MySQL", "Complex SQL Joins", "Schema Normalization", "Query Optimization"],
    description:
      "Rigorous evaluation on relational database design, indexing strategies, transaction ACID properties, complex multi-table joins, and stored procedure implementation in MySQL.",
    verificationType: "Certificate File / Upload Preview Supported",
    fileUrl: null
  }
];

