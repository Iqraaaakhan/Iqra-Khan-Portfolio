export const profile = {
  name: "Iqra Fatima Khan",
  shortName: "Iqra Khan",
  role: "Full-Stack & AI/ML Developer",
  location: "Hubli, Karnataka, India",
  intro:
    "I build reliable web applications, backend systems, APIs and intelligent data products.",
  supportingLine:
    "React, TypeScript, FastAPI, Java, SQL, machine learning and LLM integrations.",
  availability:
    "Open to entry-level SDE, full-stack, backend and AI/ML roles.",
  email: "iqra58577@gmail.com",
  emailDisplay: "iqra58577 [at] gmail [dot] com",
  github: "https://github.com/Iqraaaakhan",
  linkedin: "https://linkedin.com/in/iqra-khan-540420265",
  resume: "/resume/Iqra-Fatima-Khan-Resume.pdf",
  photo: "/profile/iqra-fatima-khan.jpeg",
};

export type Project = {
  slug: "enverse" | "darksky" | "klever";
  name: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  proof: string;
  challenge: string;
  decision: string;
  stack: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  github: string;
  live?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "enverse",
    name: "Enverse",
    eyebrow: "01 · Flagship case study · Full-stack + ML + LLM",
    summary:
      "An energy intelligence platform that turns household usage data into appliance-level analytics, forecasts, anomaly alerts, cost simulations and multilingual, data-grounded answers.",
    contribution:
      "Designed and implemented the React interface, FastAPI services, ML workflows, authentication, resilient LLM path, Docker setup and deployment configuration.",
    proof:
      "Repository evaluation artifacts report R² 0.9971 for the main XGBoost forecast experiment and 0.9975 for the supervised appliance-level model.",
    challenge:
      "Keep analytical and conversational features useful when an external LLM is unavailable or quota-limited.",
    decision:
      "A layered response path uses live metrics, deterministic local answers, a configurable Groq model, a fallback model and a final local summary.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "XGBoost",
      "Isolation Forest",
      "Groq",
      "Docker",
    ],
    image: "/projects/enverse-dashboard.webp",
    imageAlt:
      "Enverse energy dashboard showing load metrics, appliance distribution, anomaly status and model-driven insights",
    imageCaption:
      "API-driven dashboard connecting energy analytics, appliance estimates and model insights.",
    github: "https://github.com/Iqraaaakhan/Enverse",
    live: "https://enverse-blue.vercel.app/",
    demo:
      "https://drive.google.com/file/d/10_RpEICfhTN9pnwdEslEIWD_MWbElFfi/view?usp=drive_link",
  },
  {
    slug: "darksky",
    name: "DarkSky Observation System",
    eyebrow: "02 · Java backend foundation",
    summary:
      "A Spring MVC application for authenticated users to create and manage satellite observation logs through a layered Controller-Service-DAO architecture.",
    contribution:
      "Built the session-authenticated CRUD flow, user-scoped authorization, Spring JDBC persistence, AOP logging and Maven WAR packaging.",
    proof:
      "Session authentication, ownership-aware authorization, JDBC persistence, Spring AOP logging and externalized configuration are implemented in the repository.",
    challenge:
      "Keep HTTP, business and persistence responsibilities separate while enforcing record ownership.",
    decision:
      "Controllers manage sessions and navigation, services orchestrate operations and DAO implementations isolate SQL access.",
    stack: ["Java", "Spring MVC", "Spring JDBC", "MySQL", "JSP", "Maven"],
    image: "/projects/darksky-dashboard.webp",
    imageAlt:
      "Dark Sky Console dashboard with navigation for creating and accessing satellite observation records",
    imageCaption:
      "Authenticated console routing users into create and user-scoped observation workflows.",
    github: "https://github.com/Iqraaaakhan/DarkSky-Observation-System",
  },
  {
    slug: "klever",
    name: "KLEver",
    eyebrow: "03 · Full product workflow",
    summary:
      "A smart canteen system connecting OTP access, searchable menu discovery, persistent cart and checkout, Razorpay payments, order tracking and operational admin workflows.",
    contribution:
      "Implemented customer and admin flows, MySQL-backed menu and order CRUD, payment verification, AJAX status updates and reporting views.",
    proof:
      "The source implements transactional order creation after payment verification, 10-second status polling, menu CRUD and reporting views.",
    challenge:
      "Coordinate customer checkout, verified payment, order persistence and kitchen status updates as one coherent workflow.",
    decision:
      "Payment verification precedes a database transaction that creates the order and its line items; the customer view then polls for status changes.",
    stack: ["PHP", "MySQL", "JavaScript", "AJAX", "Razorpay", "Chart.js"],
    image: "/projects/klever-home.webp",
    imageAlt:
      "KLEver smart canteen homepage with menu navigation, food search and order call to action",
    imageCaption:
      "Search-led homepage connecting menu discovery, ordering and order tracking.",
    github: "https://github.com/Iqraaaakhan/KLEver",
  },
];

export type AdditionalWork = {
  name: string;
  eyebrow: string;
  summary: string;
  stack: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  github?: string;
  live?: string;
  gallery?: Array<{ src: string; alt: string; caption: string }>;
};

export const additionalWork: AdditionalWork[] = [
  {
    name: "DigiDisha",
    eyebrow: "Hackathon · Team lead · 48 hours",
    summary:
      "An AI-powered rural-skilling platform built during the Infosys Tech for Good Hackathon. I led a team of five and worked on NLP-based job matching and an AI aptitude workflow.",
    stack: ["NLP", "AI workflow", "Product leadership"],
    image: "/projects/digidisha-kannada.webp",
    imageAlt:
      "Kannada-language DigiDisha landing page for rural skills and employment guidance",
    imageCaption:
      "Kannada-first product experience designed to make skilling guidance more accessible.",
    github: "https://github.com/Iqraaaakhan/studio",
  },
  {
    name: "KitchenKonnections",
    eyebrow: "Earlier work · Responsive marketplace",
    summary:
      "A responsive home-baker marketplace covering product discovery, catalogue browsing, wishlist, cart and checkout flows.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/projects/kitchenkonnections-home.webp",
    imageAlt:
      "KitchenKonnections homepage hero presenting a marketplace for homemade baked goods",
    imageCaption:
      "Homepage experience introducing the home-baker marketplace and discovery flow.",
    github: "https://github.com/Iqraaaakhan/kitchenkonnections",
    live: "https://kitchenkonnections.vercel.app/",
    gallery: [
      {
        src: "/projects/kitchenkonnections-catalog.webp",
        alt: "KitchenKonnections product catalogue with categories, pricing, ratings and add-to-cart actions",
        caption: "Catalogue discovery with product details and cart actions.",
      },
      {
        src: "/projects/kitchenkonnections-cart.webp",
        alt: "KitchenKonnections cart containing multiple products and a checkout action",
        caption: "Persistent multi-item cart leading into checkout.",
      },
    ],
  },
];

export const experience = [
  {
    period: "May 2026 - Present",
    role: "Software Development Intern",
    company: "IonIdea Interactive Pvt. Ltd.",
    summary:
      "Building full-stack academic attainment modules in an ERP product using React, TypeScript, FastAPI, REST APIs and MariaDB.",
    points: [
      "Build cascading data flows, calculation workflows and responsive module interfaces.",
      "Develop and integrate backend APIs, then debug and test the complete path.",
      "Deliver mentor-reviewed work while keeping proprietary code and logic confidential.",
    ],
  },
  {
    period: "July 2025",
    role: "Full-Stack AI Project Lead",
    company: "Infosys Tech for Good Hackathon",
    summary:
      "Led a five-person team and built DigiDisha, an AI-powered rural-skilling platform, in a 48-hour national hackathon.",
    points: [
      "Architected the product flow and coordinated end-to-end implementation.",
      "Built an NLP job-matching pipeline and AI aptitude engine.",
      "Competed among 200+ national teams.",
    ],
  },
  {
    period: "April 2024 - June 2024",
    role: "Web Development Intern",
    company: "Ultimez Technology Pvt. Ltd.",
    summary:
      "Developed and deployed a responsive web application with HTML, CSS, JavaScript, Git workflows and Vercel.",
    points: [
      "Implemented responsive, cross-browser interfaces.",
      "Used Git-based deployment and optimized front-end assets.",
    ],
  },
];

export const education = [
  {
    year: "2026",
    degree: "Master of Computer Applications",
    institution: "KLE Technological University",
    detail: "CGPA 8.7/10",
  },
];

export const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];
