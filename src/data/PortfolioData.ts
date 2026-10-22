import type { ProjectItem, ExperienceItem, SkillCategory, HonorItem } from '../types';
import cedarMenImg1 from '../assets/CedarMenscreenshot1.png';
import cedarMenImg2 from '../assets/CedarMenScreenshot2.png';
import fundwaveImg1 from '../assets/FundwaveSCreensht.png';
import fundwaveImg2 from '../assets/FundwaveSCreensht2.png';
import fundwaveImg3 from '../assets/FundwaveSCreensht3.png';
import visaroImg1 from '../assets/VisaroScreenshot1.png';
import visaroImg2 from '../assets/VisaroScreenshot2.png';
import fanhubImg1 from '../assets/Fanhubplus1.png';
// import fanhubImg2 from '../assets/Fanhubplus2.png';
import fanhubImg3 from '../assets/Fanhubplus3.png';
import fanhubImg4 from '../assets/Fanhubplus4.png';
import fanhubImg5 from '../assets/Fanhubplus5.png';
import fanhubImg6 from '../assets/Fanhubplus6.png';
import fanhubImg7 from '../assets/fanhubplus7.png';
import fanhubImg8 from '../assets/Fanhubplus8.png';
import fanhubImg9 from '../assets/Fanhubplus9.png';

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
    id: "fanhub-plus",
    title: "Fan Hub Plus",
    subtitle: "Fandom Universe & Community Portal (TechWiz 7)",
    description: "An end-to-end, immersive fandom web solution unifying Anime, Gaming, Movies, TV, K-Pop, Comics, Manga, and Cosplay into a single dynamic ecosystem.",
    points: [
      "Engineered full-stack architecture with multi-level filtering, media centers, and storytelling character profiles.",
      "Built location-aware event discovery for fan conventions and integrated an AI-powered conversational chatbot assistant.",
    ],
    techStack: ["React", "Django", "Python", "MySQL", "Tailwind CSS", "REST APIs", "AI Chatbot"],
    tag: "Fandom & Web",
    imageUrl: fanhubImg1,
    screenshots: [
      fanhubImg1,
      fanhubImg3,
      fanhubImg4,
      fanhubImg5,
      fanhubImg6,
      fanhubImg7,
      fanhubImg8,
      fanhubImg9,
    ],
    role: "Full-Stack Lead & Architecture",
    timeline: "TechWiz 7 World Tech Championship",
    overview: "Fan Hub Plus was engineered as a comprehensive solution for the TechWiz 7 global tech competition under the 'Fandom Universe' theme. The platform addresses the scattered, fragmented nature of fan communities by bringing rich multimedia, character hubs, merchandise showcases, location-aware event calendars, and intelligent AI concierge assistance into a single unified web experience.",
    challenge: "Fandom enthusiasts previously had to navigate disconnected forums, ad-ridden sites, and single-niche apps. Building a platform that handled high-throughput multimedia streaming, location-aware GPS convention mapping, and multi-domain filtering across 8 fandom genres required a scalable data architecture and responsive UI.",
    solution: "Designed and built an end-to-end web application with decoupled RESTful APIs, relational schema integrity, interactive media carousels, customizable user dashboards, and an AI-powered natural language assistant to guide discovery.",
    features: [
      {
        title: "Fandom Content Explorer",
        description: "Multi-level search, filtering, and sorting across 8 fandom domains (Anime, Gaming, Movies, TV Shows, K-Pop, Comics, Manga, Cosplay) by genre, release year, and popularity."
      },
      {
        title: "Interactive Multimedia Center",
        description: "High-performance streaming of embedded videos, trailers, audio soundtracks, and podcasts with rating systems and community feedback."
      },
      {
        title: "Character Profiles & Storytelling Hub",
        description: "Card-based character lore profiles, timeline-style event highlights, and fan convention coverage in immersive editorial format."
      },
      {
        title: "Location-Aware Event Discovery",
        description: "GPS-integrated convention discovery and interactive event calendar filterable by city with direct ticketing links."
      },
      {
        title: "AI-Powered Chatbot Assistant",
        description: "Conversational AI assistant that answers platform queries, remembers context, and provides personalized fandom recommendations."
      },
      {
        title: "Personalized Dashboard & Moderation",
        description: "Secure session authentication, editable favorite fandoms, bookmarking library, and admin control panels for content moderation."
      }
    ],
    databaseEntities: [
      "User (user_id, name, email, password_hash, created_at)",
      "Category (category_id, name, description)",
      "Content (content_id, category_id, title, type, description, release_date, popularity_score)",
      "CharacterProfile (character_id, category_id, name, bio, image_url)",
      "MerchandiseItem (item_id, category_id, name, image_url, tag, is_upcoming)",
      "Bookmark (bookmark_id, user_id, content_id, note, created_at)",
      "ChatbotQuery (query_id, user_id, message, response, created_at)",
      "Feedback (feedback_id, user_id, type, message, status)"
    ],
    architecturePoints: [
      "Relational schema with normalized 1-to-many and many-to-many integrity across users, fandoms, bookmarks, and chat logs.",
      "Asynchronous multimedia loading and responsive image optimizations for media-heavy browsing.",
      "Admin moderation workflows with role-based access control (Visitor, Registered User, Administrator)."
    ]
  },
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
    role: "Lead Backend & AI Engineer",
    timeline: "2025",
    overview: "Bukka AI is an autonomous conversational agent designed to eliminate ordering bottlenecks for university campus food vendors. It replaces manual chat-based order taking with a deterministic LLM state machine capable of managing vendor menus, processing modifications, and orchestrating webhook-based fulfillment.",
    challenge: "Handling unstructured user messages via chat while reliably maintaining cart state, item substitutions, price calculations, and instantaneous webhook payment verification.",
    solution: "Engineered a stateful FastAPI pipeline connected to LLM tool-calling routines and PostgreSQL persistence to guarantee deterministic order validation.",
    features: [
      {
        title: "Autonomous Conversational Ordering",
        description: "Natural language order extraction with stateful context management across interruptions and menu queries."
      },
      {
        title: "Webhook-Driven Payment Verification",
        description: "Real-time automated transaction confirmation and instant dispatch notifications to kitchen staff."
      },
      {
        title: "Vendor Inventory Sync",
        description: "Dynamic menu availability updates preventing overselling during peak lunchtime rushes."
      }
    ],
    architecturePoints: [
      "FastAPI asynchronous event loop handling high concurrent webhook dispatches.",
      "Structured JSON schema extraction for zero-hallucination cart modifications."
    ]
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
    role: "Full-Stack Developer",
    timeline: "AbkFinhack 2024",
    overview: "Fundwave was engineered during the AbkFinhack 2024 hackathon as a transparent, high-trust crowdfunding platform empowering grassroots campaigns with real-time financial telemetry and instant donor verification.",
    challenge: "Ensuring instant financial ledger synchronization and real-time visual chart updates upon incoming webhook payments.",
    solution: "Integrated Payaza API payment pipelines with a Django transactional backend and Chart.js dynamic telemetry visualizations.",
    features: [
      {
        title: "Beneficiary Milestone Dashboard",
        description: "Dynamic tracking of funding goals, donor breakdown, and campaign stage milestones."
      },
      {
        title: "Payaza Payment Gateway Integration",
        description: "Seamless card and bank transfer checkout with instant webhook reconciliation."
      },
      {
        title: "Real-Time Campaign Analytics",
        description: "Interactive Chart.js visualizations showing velocity of contributions over time."
      }
    ],
    architecturePoints: [
      "ACID-compliant relational ledger guaranteeing balance recalculations on every transaction.",
      "Modular dashboard templates optimized for rapid rendering across mobile and desktop."
    ]
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
    role: "Full-Stack Engineer",
    timeline: "2025",
    overview: "CedarMen Collection is a production menswear e-commerce storefront operating at cedarmen.shop, engineered for rapid catalog browsing, dynamic cart persistence, and seamless customer checkout experiences.",
    challenge: "Preventing race conditions during checkout and maintaining instantaneous inventory decrements across simultaneous customer sessions.",
    solution: "Implemented robust Django session architectures with database locking mechanisms and responsive storefront rendering.",
    features: [
      {
        title: "Dynamic Catalog & Filter Engine",
        description: "Real-time product filtering by size, collection, pricing, and availability."
      },
      {
        title: "Frictionless Session Cart",
        description: "Optimized server-side cart persistence reducing checkout abandonment."
      },
      {
        title: "Admin Inventory Management",
        description: "Real-time stock level monitoring and sales performance metrics."
      }
    ],
    architecturePoints: [
      "Optimized MySQL relational queries with indexed product lookup.",
      "Lightweight responsive storefront architecture delivering fast initial page loads."
    ]
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
    role: "Backend API Engineer",
    timeline: "2025",
    overview: "TSA Global Consulting is an educational technology and consulting platform providing global students with structured curriculum access, international admissions guidance, and course progress tracking.",
    challenge: "Structuring nested modular course hierarchies and handling secure student enrollment pipelines.",
    solution: "Designed scalable Django REST APIs with PostgreSQL data modeling and granular role-based permissions.",
    features: [
      {
        title: "Course Management Module",
        description: "Structured learning pathways with prerequisite tracking and enrollment state machines."
      },
      {
        title: "Secure RESTful API Gateway",
        description: "Stateless JSON endpoints consumed by decoupled web and mobile clients."
      }
    ],
    architecturePoints: [
      "PostgreSQL relational modeling with foreign-key constraint enforcement.",
      "JWT-authenticated endpoints with rate-limiting protection."
    ]
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
    role: "Full-Stack Developer",
    timeline: "2025 - 2026",
    overview: "Visaro (visaro.ng) is a commercial verification and business platform where I built frontend architectures, modular component systems, and client verification workflows.",
    challenge: "Delivering a clean, ultra-responsive user onboarding flow with zero friction across mobile and desktop environments.",
    solution: "Constructed a TypeScript React component library with Tailwind CSS styling and resilient API error handling.",
    features: [
      {
        title: "Minimalist Modern UI",
        description: "Polished, high-converting interfaces with smooth micro-interactions."
      },
      {
        title: "User Verification Pipelines",
        description: "Structured multi-step verification forms with client-side validation."
      }
    ],
    architecturePoints: [
      "Modular React component design with custom hooks for clean state separation.",
      "Strict TypeScript typing preventing runtime exceptions."
    ]
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
    title:" 1st Runner Up (African Entellignce Hub Hackathon) ",
    organization: "Deep Learning Indaba (DLI 2026)",
  },
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