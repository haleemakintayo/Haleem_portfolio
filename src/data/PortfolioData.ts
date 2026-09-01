import type { ProjectItem, ExperienceItem, SkillCategory, HonorItem } from '../types';
import cedarMenImg1 from '../assets/CedarMenscreenshot1.png';
import cedarMenImg2 from '../assets/CedarMenScreenshot2.png';
import fundwaveImg1 from '../assets/FundwaveSCreensht.png';
import fundwaveImg2 from '../assets/FundwaveSCreensht2.png';
import fundwaveImg3 from '../assets/FundwaveSCreensht3.png';
import visaroImg1 from '../assets/VisaroScreenshot1.png';
import visaroImg2 from '../assets/VisaroScreenshot2.png';

export const PERSONAL_INFO = {
  name: "Akintayo Haleem Opeyemi",
  role: "Full-Stack Developer & Junior AI Engineer",
  email: "haleemakintayo@gmail.com",
  education: {
    school: "Olabisi Onabanjo University, Ago-Iwoye Ogun, NG",
    degree: "Bachelor of Science in Computer Science",
    graduationYear: "Expected: 2027",
  },
  summary: "Full-Stack Developer & Junior AI Engineer with 3 years of experience building user-centered web applications from concept through deployment.",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Back-End",
    skills: ["Python", "Django", "FastAPI", "RESTful APIs", "MySQL", "PostgreSQL"],
  },
  {
    category: "Front-End",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "AI/ML & Data",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "LLM Fine-Tuning", "Prompt Engineering"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Figma", "Jira", "VS Code"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "bukka-ai",
    title: "Bukka AI",
    subtitle: "Autonomous AI Ordering Agent",
    description: "Agentic sales manager utilizing an AI persona to automate customer orders and state tracking for campus food vendors.",
    points: [
      "Engineered backend architecture to verify and process transactions seamlessly via webhooks.",
      "Integrated autonomous conversational workflows for hands-free order processing.",
    ],
    techStack: ["FastAPI", "Python", "LLMs", "PostgreSQL", "Webhooks"],
    tag: "AI & Automation",
  },
  {
    id: "fundwave",
    title: "Fundwave",
    subtitle: "Crowdfunding Dashboard (AbkFinhack 2024)",
    description: "Real-time crowdfunding analytics and donation processing dashboard.",
    points: [
      "Built beneficiary dashboard tracking case milestones, target goals, and active donors.",
      "Integrated Payaza API to process payments with instant live progress recalculation.",
    ],
    techStack: ["Django", "Chart.js", "Bootstrap", "Payaza API", "MySQL"],
    tag: "Fintech",
    imageUrl: fundwaveImg1,
    screenshots: [fundwaveImg1, fundwaveImg2, fundwaveImg3],
  },
  {
    id: "cedarmen",
    title: "CedarMen Collection",
    subtitle: "E-Commerce Storefront (cedarmen.shop)",
    description: "Live e-commerce platform with dynamic inventory and cart state management.",
    points: [
      "Architected backend for dynamic cataloging and real-time inventory adjustments.",
      "Engineered secure server-side session and cart handling for frictionless checkout.",
    ],
    techStack: ["Django", "Chart.js", "Bootstrap", "MySQL"],
    liveUrl: "https://cedarmen.shop",
    tag: "E-Commerce",
    imageUrl: cedarMenImg1,
    screenshots: [cedarMenImg1, cedarMenImg2],
  },
  {
    id: "tsa-global",
    title: "TSA Global Consulting",
    subtitle: "Educational Consulting Platform (tsaglobalconsulting.com)",
    description: "Scalable learning management infrastructure and course delivery system.",
    points: [
      "Engineered the core courses module for structured learning pathways and enrollment tracking.",
      "Designed and exposed secure RESTful APIs consumed by the frontend application.",
    ],
    techStack: ["Python", "Django", "RESTful APIs", "PostgreSQL"],
    liveUrl: "https://tsaglobalconsulting.com",
    tag: "EdTech",
  },
  {
    id: "visaro",
    title: "Visaro",
    subtitle: "Enterprise Platform (visaro.ng)",
    description: "A live commercial platform where I architected modern UI interfaces and handled technical user onboarding flows.",
    points: [
      "Designed and implemented modern, minimalist UI/UX components while ensuring seamless state integration.",
      "Executed technical communication guidelines and scripts for the platform's user verification and marketing phases.",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "TypeScript"],
    liveUrl: "https://visaro.ng",
    tag: "Commercial",
    imageUrl: visaroImg1,
    screenshots: [visaroImg1, visaroImg2],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Visaro Nigeria (visaro.ng)",
    location: "Remote",
    period: "December 2025 - August 2026",
    achievements: [
      "Designed and implemented modern, minimalist UI/UX components with seamless state integration.",
      "Executed technical communication guidelines and user verification onboarding pipelines.",
    ],
    techStack: ["React", "JavaScript", "REST APIs", "Tailwind CSS","TypeScript"],
  },
  {
    role: "Back-End Developer",
    company: "Jexhub Limited",
    location: "Remote",
    period: "November 2024 - January 2026",
    achievements: [
      "Co-developed and maintained Jexcelhub, an enterprise e-commerce platform using Django and MySQL.",
      "Built server-side business logic for cart, inventory, and order fulfillment pipelines.",
      "Engineered RESTful endpoints with strict data validation in Agile sprint cycles.",
    ],
    techStack: ["Python", "Django", "MySQL", "REST APIs", "Git"],
  },
  {
    role: "Intern",
    company: "HNG Tech",
    location: "Remote",
    period: "January 2024 - March 2024",
    achievements: [
      "Developed optimized Python data structures and algorithmic routines.",
      "Contributed features to open-source FastAPI and Django codebases.",
      "Built responsive front-end interfaces using HTML, CSS, and modern JavaScript.",
    ],
    techStack: ["Python", "FastAPI", "Django", "JavaScript"],
  },
];

export const HONORS: HonorItem[] = [
  {
    title: "1st Place (Faculty Level)",
    organization: "OOU Research Innovation Challenge",
  },
  {
    title: "Campus Ambassador",
    organization: "Cowrywise",
  },
  {
    title: "Campus Community Ambassador & Co-Lead",
    organization: "Data Science Nigeria",
  },
];