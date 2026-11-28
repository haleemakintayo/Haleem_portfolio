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
import healthyarnLandingImg from '../assets/healthyarn-landing.png';
import healthyarnVoiceImg from '../assets/healthyarn-voice-triage.png';
import healthyarnAnswerImg from '../assets/healthyarn-dual-track-answer.png';
import healthyarnAlertImg from '../assets/healthyarn-red-flag-alert.png';
import healthyarnPortalImg from '../assets/healthyarn-governance-portal.png';

export const PERSONAL_INFO = {
  name: "Akintayo Haleem Opeyemi",
  role: "Full-Stack & AI Engineer",
  email: "haleemakintayo@gmail.com",
  linkedin: "https://www.linkedin.com/in/haleemakintayo/",
  github: "https://github.com/haleemakintayo",
  twitter: "https://x.com/haleemakintayo",
  education: {
    school: "Olabisi Onabanjo University, Ago-Iwoye Ogun, NG",
    degree: "Bachelor of Science in Computer Science",
    graduationYear: "Expected Nov 2027",
  },
  summary:
    "Full-Stack & AI Engineer with 3 years of experience building Python backends, React applications, and stateful AI workflows.",
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Back-End",
    skills: ["Python", "Django", "FastAPI", "RESTful APIs", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    category: "Front-End",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "AI/ML & Data",
    skills: ["PyTorch", "Hugging Face", "scikit-learn", "TensorFlow", "OpenCV", "LLM Fine-Tuning", "Prompt Engineering"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Linux/Bash", "Postman", "Figma", "Jira"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "healthyarn",
    title: "HealthYarn",
    subtitle: "Offline-first voice health guidance PWA (NCS ITDC 2026)",
    featured: true,
    status: "Competition Build",
    tag: "Healthcare AI",
    role: "Solo Full-Stack & Voice AI Engineer",
    timeline: "Nov 2026",
    description:
      "Voice-first multilingual health guidance PWA across English, Yorùbá, and Nigerian Pidgin, pairing deterministic emergency triage with schema-constrained Gemini routing and offline audio playback.",
    metrics: [
      { label: "Safety", value: "100% Red-Flag Recall" },
      { label: "Languages", value: "EN · Yorùbá · Pidgin" },
      { label: "Verification", value: "77 Passing Tests" },
    ],
    points: [
      "Built a pre-inference danger-sign safety gate that intercepts emergency queries in English and local languages before any AI output runs.",
      "Paired schema-constrained Gemini voice routing with automatic fallback to local speech-to-text, fuzzy FAQ matching, and cached offline audio.",
      "Implemented a role-based staff review workflow separating clinical sign-off from translation approval, backed by 77 automated backend and frontend tests.",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "FastAPI",
      "SQLModel",
      "Google Gemini API",
      "Workbox PWA",
      "scikit-learn",
    ],
    githubUrl: "https://github.com/haleemakintayo/HealthYarn",
    imageUrl: healthyarnLandingImg,
    screenshots: [
      {
        src: healthyarnLandingImg,
        caption:
          "Daylight-triage landing page built for low-bandwidth devices with voice sample triggers and English, Yorùbá, and Pidgin language switching.",
        alt: "HealthYarn landing page hero with voice sample controls and daylight palette",
      },
      {
        src: healthyarnVoiceImg,
        caption:
          "Voice triage hub combining browser audio normalization with Workbox-cached health topics for offline browsing.",
        alt: "HealthYarn voice triage hub showing offline-ready status, microphone trigger, and starter questions",
      },
      {
        src: healthyarnAnswerImg,
        caption:
          "Dual-track answer screen separating guidance for untested vs. clinician-diagnosed callers with playback speed controls (1.0x / 0.75x).",
        alt: "HealthYarn verified answer screen with dual-track diagnosis toggle and audio speed controls",
      },
      {
        src: healthyarnAlertImg,
        caption:
          "Deterministic danger-sign alert that interrupts normal Q&A to display urgent clinic contacts and a 5-second safety lock.",
        alt: "HealthYarn full-screen crimson urgent danger-sign alert with state-filtered Nigerian clinics",
      },
      {
        src: healthyarnPortalImg,
        caption:
          "Staff review portal enforcing separate clinical and language sign-off stages before multilingual health answers go live.",
        alt: "HealthYarn staff governance portal editing multilingual malaria FAQ across English, Yorùbá, and Pidgin",
      },
    ],
    overview:
      "Standard health portals assume fluent written English and continuous 4G data, leaving non-English speakers and low-connectivity communities underserved. HealthYarn delivers verified, voice-first guidance in English, Yorùbá, and Nigerian Pidgin with deterministic emergency triage and offline playback.",
    challenge:
      "Open-ended LLM chat risks inventing medical diagnoses or dosages, while short browser voice recordings on entry-level phones often produce empty transcripts or misclassify code-switched local speech.",
    solution:
      "Built a guardrailed three-tier voice pipeline: every query runs through diacritic-stripped danger-sign checks before schema-bound Gemini routing maps to vetted answers, falling back cleanly to local speech-to-text, fuzzy FAQ matching, and Workbox-cached audio when offline or rate-limited.",
    features: [
      {
        title: "Pre-Inference Red-Flag Safety Gate",
        description:
          "Scans normalized transcripts in English and the active local language before AI routing, locking urgent cases into a clinic-call screen with direct phone links.",
      },
      {
        title: "Offline Voice Triage & Fallback Routing",
        description:
          "Normalizes browser audio for reliable transcription and degrades cleanly from Gemini routing to fallback speech APIs, local text matching, and cached audio playback.",
      },
      {
        title: "Dual-Track Clinical Governance",
        description:
          "Separates guidance for untested vs. diagnosed callers and requires independent clinical and language sign-offs before any edited FAQ publishes.",
      },
    ],
    architecturePoints: [
      "Deterministic safety gate and strict FAQ-ID JSON schemas prevent unvetted medical claims from reaching callers.",
      "Zero-PII RAM-only voice handling ensures audio buffers, IP addresses, and device IDs are never written to disk or logs.",
      "Workbox service worker caches core health topics and multilingual audio clips for uninterrupted offline playback.",
    ],
    tradeoffs: [
      "Pre-generated offline compressed audio clips and ran an in-memory fuzzy/TF-IDF matcher as fallback instead of hosting heavy local speech models requiring dedicated GPUs.",
      "Excluded public user accounts, saved chat histories, and dosage calculators so callers never expose personal health data or receive automated prescriptions.",
    ],
    outcome:
      "Shipped a Dockerized NCS ITDC 2026 competition build covering 5 core health topics across English, Yorùbá, and Pidgin, verified with 97.1% FAQ match accuracy, 100% red-flag recall, and 77 passing automated tests.",
  },
  {
    id: "bukka-ai",
    title: "Bukka AI",
    subtitle: "Autonomous AI Ordering Agent for Food Vendors",
    status: "Pilot & Grant-Backed",
    tag: "AI & Automation",
    role: "Backend & AI Engineer",
    timeline: "Dec 2025 - Present",
    description:
      "Agentic order-intake system that classifies inbound customer messages, confirms menu orders, and reconciles webhook payments without manual vendor involvement.",
    metrics: [
      { label: "Grant Funding", value: "Project I2M" },
      { label: "Stage", value: "Live Pilot Tested" },
      { label: "Core Stack", value: "FastAPI + LLMs" },
    ],
    points: [
      "Built an intent-classification and persona response pipeline to route and confirm food orders automatically.",
      "Engineered asynchronous webhook reconciliation with idempotency keys and retries so duplicate callbacks never double-count payments.",
      "Awarded prototype development grant funding from Project I2M (Innovation to Market) after live pilot testing.",
    ],
    techStack: ["Python", "FastAPI", "Hugging Face", "LLMs", "PostgreSQL", "Webhooks"],
    overview:
      "Campus food vendors manage rush-hour orders through manual chat messages, leading to missed item substitutions and unverified transfer receipts. Bukka AI automates inbound customer conversations from intent classification through webhook-verified checkout inside a single FastAPI backend.",
    challenge:
      "Customers phrase orders unpredictably in chat, while payment gateways can deliver duplicate or delayed webhook callbacks during network spikes. An AI ordering backend needs deterministic cart math alongside idempotent ledger writes.",
    solution:
      "Separated natural-language intent extraction from strict relational order state. Inbound messages route through Hugging Face transformer models and constrained JSON schemas, while payment callbacks pass through idempotency-key checks before confirming kitchen tickets.",
    features: [
      {
        title: "Intent Classification & Order Intake",
        description:
          "Parses free-form chat messages, handles item substitutions, and resolves vendor menu availability in one stateful flow.",
      },
      {
        title: "Idempotent Webhook Reconciliation",
        description:
          "Verifies provider signatures, deduplicates repeated gateway callbacks using idempotency keys, and schedules safe retries.",
      },
      {
        title: "Live Vendor Menu Synchronization",
        description:
          "Prevents customers from ordering out-of-stock dishes during peak service hours through real-time availability checks.",
      },
    ],
    architecturePoints: [
      "FastAPI async event pipeline decoupling conversational turns from downstream payment callback handling.",
      "Idempotency-key storage and transactional state transitions preventing double-counted customer orders.",
      "Structured JSON extraction schemas keeping LLM output deterministic before touching pricing or order records.",
    ],
    tradeoffs: [
      "Used deterministic database state machines for pricing and order totals instead of letting the LLM compute sums directly, eliminating arithmetic errors.",
      "Stored webhook payload keys locally before processing side effects instead of relying on gateway delivery-once guarantees.",
    ],
    outcome:
      "Validated in live vendor pilot testing and awarded prototype development grant funding from Project I2M (Innovation to Market).",
  },
  {
    id: "cedarmen",
    title: "CedarMen Collection",
    subtitle: "Production E-Commerce Backend (cedarmen.shop)",
    featured: true,
    status: "Production",
    tag: "E-Commerce",
    role: "Full-Stack Engineer",
    timeline: "2025",
    description:
      "Live menswear storefront serving 100+ SKUs with relational inventory tracking, cross-device session carts, and live sales velocity analytics.",
    metrics: [
      { label: "Catalog Scale", value: "100+ SKUs" },
      { label: "Environment", value: "cedarmen.shop" },
      { label: "Core Stack", value: "Django + MySQL" },
    ],
    points: [
      "Built the Django and MySQL backend managing 100+ SKUs with relational stock levels and order fulfillment state.",
      "Implemented server-side cart and session persistence so customer carts carry across devices and browser sessions.",
      "Built Chart.js dashboards surfacing live stock levels, sales velocity, and repeat purchasing patterns.",
    ],
    techStack: ["Python", "Django", "MySQL", "Chart.js", "Bootstrap"],
    liveUrl: "https://cedarmen.shop",
    imageUrl: cedarMenImg1,
    screenshots: [
      {
        src: cedarMenImg1,
        caption: "Product detail page showing size variant selection, quantity controls, and server-backed Add to Cart state.",
        alt: "CedarMen Collection product detail screen",
      },
      {
        src: cedarMenImg2,
        caption: "Storefront collection landing page with category navigation, search bar, customer account menu, and cart counter.",
        alt: "CedarMen Collection storefront homepage",
      },
    ],
    overview:
      "CedarMen Collection needed a custom storefront capable of managing over 100 apparel SKUs without losing customer carts across mobile and desktop sessions or overselling limited-run pieces.",
    challenge:
      "Client-only cart storage broke when shoppers switched devices before checkout, and concurrent orders on small clothing batches risked inventory discrepancies without transactional stock updates.",
    solution:
      "Engineered a relational MySQL schema backed by Django server-side sessions and transactional stock decrements on checkout, paired with Chart.js dashboards for inventory and order visibility.",
    features: [
      {
        title: "Relational 100+ SKU Catalog",
        description:
          "Supports product variants, pricing updates, and stock availability queries across active collections.",
      },
      {
        title: "Cross-Device Server Carts",
        description:
          "Persists cart line items on the server so returning shoppers keep selections across sessions and devices.",
      },
      {
        title: "Sales & Inventory Analytics",
        description:
          "Tracks daily unit velocity, low-stock items, and fulfillment progress inside Chart.js admin views.",
      },
    ],
    architecturePoints: [
      "Indexed MySQL catalog tables keeping collection filter queries fast across 100+ product variants.",
      "Server-side session persistence linked cleanly to authenticated customer order records at checkout.",
    ],
    tradeoffs: [
      "Chose server-rendered Django templates + Bootstrap over a separate SPA bundle to ship initial page loads faster on mobile connections.",
      "Stored cart lines in relational session records rather than browser localStorage to maintain accuracy during inventory changes.",
    ],
    outcome:
      "Running in production at cedarmen.shop serving 100+ active menswear SKUs and live customer orders.",
  },
  {
    id: "visaro",
    title: "Visaro",
    subtitle: "Commercial Platform & Verification UI (visaro.ng)",
    status: "Production",
    tag: "Commercial",
    role: "Full-Stack Developer",
    timeline: "Dec 2025 - Aug 2026",
    description:
      "Commercial fintech and HR platform where I built customer onboarding and identity verification components in React and TypeScript.",
    metrics: [
      { label: "Environment", value: "visaro.ng" },
      { label: "Core Scope", value: "Onboarding & KYC UI" },
      { label: "Core Stack", value: "React + TypeScript" },
    ],
    points: [
      "Built modular React and Tailwind CSS interfaces for customer onboarding and identity verification workflows.",
      "Standardized client-server API contracts, defining request schemas and async verification error handling.",
    ],
    techStack: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://visaro.ng",
    imageUrl: visaroImg1,
    screenshots: [
      {
        src: visaroImg1,
        caption: "Visaro Fly Now, Pay Later landing screen directing users into account login and installment onboarding.",
        alt: "Visaro installment payment landing screen",
      },
      {
        src: visaroImg2,
        caption: "Visaro HR & Credit on Request showcase highlighting employee advance workflows and interactive help.",
        alt: "Visaro HR and credit product screen",
      },
    ],
    overview:
      "At Visaro Nigeria, customer onboarding spans installment financing and workforce credit checks. I built the frontend React components and defined predictable client-server API contracts for multi-step verification.",
    challenge:
      "Asynchronous identity verification requests return partial statuses and external validation errors that previously required ad-hoc UI handling across forms.",
    solution:
      "Built typed React onboarding steps with Tailwind CSS and standardized client-server request/response schemas plus uniform error states for async verification calls.",
    features: [
      {
        title: "Modular Verification Components",
        description:
          "Reusable form inputs, step states, and confirmation views across personal and business onboarding flows.",
      },
      {
        title: "Standardized API Contracts",
        description:
          "Consistent TypeScript payload types and structured client error recovery for asynchronous backend checks.",
      },
    ],
    architecturePoints: [
      "Strict TypeScript payload schemas shared across form state hooks and API request wrappers.",
      "Explicit loading, retry, and field-level error states for external verification timeouts.",
    ],
    tradeoffs: [
      "Standardized error response parsing in one shared client layer instead of handling status codes inside individual React views.",
    ],
    outcome:
      "Shipped across the live visaro.ng platform supporting personal installment onboarding and business portal signups.",
  },
  {
    id: "tsa-global",
    title: "TSA Global Consulting",
    subtitle: "Course Delivery & Enrollment Backend (tsaglobalconsulting.com)",
    status: "Production",
    tag: "EdTech",
    role: "Backend API Engineer",
    timeline: "2025",
    description:
      "Course-delivery backend infrastructure managing curriculum modules, student enrollments, and 15+ documented RESTful API endpoints.",
    metrics: [
      { label: "API Surface", value: "15+ REST Endpoints" },
      { label: "Environment", value: "tsaglobalconsulting.com" },
      { label: "Core Stack", value: "Django + PostgreSQL" },
    ],
    points: [
      "Architected backend curriculum modules and automated student enrollment tracking in Django and PostgreSQL.",
      "Built and documented 15+ RESTful API endpoints with custom serializers and request-level validation.",
    ],
    techStack: ["Python", "Django", "RESTful APIs", "PostgreSQL"],
    liveUrl: "https://tsaglobalconsulting.com",
    overview:
      "TSA Global Consulting needed structured backend infrastructure to manage international study programs, curriculum tracks, and student enrollment workflows across decoupled frontend views.",
    challenge:
      "Supporting nested curriculum modules and enrollment state checks while enforcing clear permission boundaries between advisors and applicants.",
    solution:
      "Built 15+ Django REST API endpoints backed by normalized PostgreSQL relations, custom payload serializers, and endpoint documentation for frontend integration.",
    features: [
      {
        title: "Curriculum & Enrollment Engine",
        description:
          "Models structured course modules, prerequisites, and automated student enrollment status transitions.",
      },
      {
        title: "Documented REST API Layer",
        description:
          "15+ validated endpoints with custom serializers separating advisor administration from student views.",
      },
    ],
    architecturePoints: [
      "PostgreSQL relational foreign-key constraints ensuring enrollment integrity across course cohorts.",
      "Custom Django serializers enforcing strict payload validation before database commits.",
    ],
    tradeoffs: [
      "Chose explicit custom serializers per workflow over generic ModelViewSet defaults to keep API contracts clean for frontend consumers.",
    ],
    outcome:
      "Deployed in production at tsaglobalconsulting.com powering course catalog delivery and enrollment management.",
  },
  {
    id: "fanhub-plus",
    title: "Fan Hub Plus",
    subtitle: "Multi-Fandom Content & Event Portal (TechWiz 7)",
    status: "Competition Build",
    tag: "Fandom & Web",
    role: "Full-Stack Lead",
    timeline: "TechWiz 7",
    description:
      "Full-stack fandom portal unifying 8 categories across an 8-table relational schema, multimedia streaming, event discovery, and an AI FAQ assistant.",
    metrics: [
      { label: "Categories", value: "8 Fandoms" },
      { label: "Data Model", value: "8 Entities" },
      { label: "Competition", value: "TechWiz 7" },
    ],
    points: [
      "Built multi-level search, category filtering, and popularity sorting across 8 fandom universes.",
      "Implemented multimedia streaming with 5-star ratings, character lore profiles, GPS convention radar, and admin moderation.",
    ],
    techStack: ["React", "Django", "Python", "MySQL", "Tailwind CSS", "REST APIs", "AI Chatbot"],
    imageUrl: fanhubImg1,
    screenshots: [
      {
        src: fanhubImg1,
        caption: "Main portal landing view with unified 104-entry search, 8 universe filters, accessibility font controls, and FandomBot.",
        alt: "Fan Hub Plus light mode homepage",
      },
      {
        src: fanhubImg3,
        caption: "High-contrast dark mode toggle preserved across global search and category navigation.",
        alt: "Fan Hub Plus dark mode homepage",
      },
      {
        src: fanhubImg4,
        caption: "Universe Directory breaking down entry counts and featured articles across Anime, Gaming, Movies & TV, and K-Pop.",
        alt: "Fan Hub Plus Universe Directory",
      },
      {
        src: fanhubImg5,
        caption: "Canon Lore & Media Index supporting multi-level filtering by keyword, media type, universe, genre tag, and year.",
        alt: "Fan Hub Plus filtered content index",
      },
      {
        src: fanhubImg6,
        caption: "Multimedia Center pairing embedded video teaser playback with a lossless fandom audio playlist stream.",
        alt: "Fan Hub Plus multimedia player",
      },
      {
        src: fanhubImg7,
        caption: "Character Profiles catalog indexing 69 entries with class filters, faction badges, and community lore submissions.",
        alt: "Fan Hub Plus character profiles page",
      },
      {
        src: fanhubImg8,
        caption: "Admin Control Panel analytics view tracking active users, bookmarks, chatbot FAQ hit rates, and popularity scores.",
        alt: "Fan Hub Plus admin analytics dashboard",
      },
      {
        src: fanhubImg9,
        caption: "Admin moderation view tracking merchandise display metrics, media popularity scores, and live chatbot query logs.",
        alt: "Fan Hub Plus admin content and chatbot logs",
      },
    ],
    overview:
      "Built for the TechWiz 7 Web Solutions track under the Fandom Universe specification, Fan Hub Plus consolidates Anime, Gaming, Movies, TV Shows, K-Pop, Comics, Manga, and Cosplay content into one searchable portal with role-based moderation for visitors, registered fans, and admins.",
    challenge:
      "The SRS required multi-facet filtering across 8 media categories, embedded video and audio playback, character lore dossiers, showcase-only merchandise drops, GPS convention discovery, and an admin analytics dashboard without bloating load times.",
    solution:
      "Designed an 8-entity relational database linking Users, Categories, Content, Character Profiles, Merchandise Items, Bookmarks, Chatbot Queries, and Feedback. Paired RESTful query filters with an accessible React UI supporting light/dark modes, font scaling, and FandomBot FAQ assistance.",
    features: [
      {
        title: "Multi-Level Content Explorer",
        description:
          "Filters articles, videos, audio clips, and galleries by fandom category, genre tag, release year, popularity, and media type.",
      },
      {
        title: "Interactive Multimedia Center",
        description:
          "Streams video trailers alongside soundtrack playlists with admin media tagging and user rating/bookmark actions.",
      },
      {
        title: "Character Lore & Event Radar",
        description:
          "Displays filterable character cards, timeline highlights, and GPS-based convention discovery with city filtering.",
      },
      {
        title: "Admin Panel & FandomBot FAQ",
        description:
          "Manages submissions awaiting approval, tracks category engagement telemetry, and maintains the chatbot FAQ knowledge base.",
      },
    ],
    databaseEntities: [
      "User (user_id, name, email, password_hash, created_at)",
      "Category (category_id, name, description)",
      "Content (content_id, category_id, title, type, description, release_date, popularity_score)",
      "CharacterProfile (character_id, category_id, name, bio, image_url)",
      "MerchandiseItem (item_id, category_id, name, image_url, tag, is_upcoming)",
      "Bookmark (bookmark_id, user_id, content_id, note, created_at)",
      "ChatbotQuery (query_id, user_id, message, response, created_at)",
      "Feedback (feedback_id, user_id, type, message, status)",
    ],
    architecturePoints: [
      "Normalized 1-to-many and many-to-many schema preserving referential integrity across bookmarks, submissions, and chatbot logs.",
      "Role-based access separation distinguishing public Visitor browsing, Registered User submissions/bookmarks, and Admin moderation.",
      "Built-in font scaling, breadcrumb trails, and persisted dark/light theme preferences across all 8 category hubs.",
    ],
    tradeoffs: [
      "Scoped merchandise showcases strictly to display tags (Limited Edition, Pre-Order) without checkout logic to adhere to licensing constraints in the SRS.",
      "Paired FAQ knowledge-base matching with AI fallback in FandomBot to keep average query responses fast and predictable.",
    ],
    outcome:
      "Completed end-to-end against every TechWiz 7 SRS deliverable: 8-entity database schema, role-based UI, dark/light accessibility modes, and full admin moderation dashboard.",
  },
  {
    id: "fundwave",
    title: "Fundwave",
    subtitle: "Crowdfunding Analytics & Donations (AbkFinhack 2024)",
    status: "Hackathon Build",
    tag: "Fintech",
    role: "Full-Stack Developer",
    timeline: "AbkFinhack 2024",
    description:
      "Real-time crowdfunding platform built at AbkFinhack 2024 with Payaza API payment processing and live beneficiary goal recalculation.",
    metrics: [
      { label: "Payment API", value: "Payaza" },
      { label: "Hackathon", value: "AbkFinhack 2024" },
      { label: "Core Stack", value: "Django + MySQL" },
    ],
    points: [
      "Built beneficiary campaign dashboards tracking percentage funded, target goals, and donor contributions.",
      "Integrated the Payaza payment gateway API to process donations and reconcile campaign totals automatically.",
    ],
    techStack: ["Python", "Django", "Payaza API", "MySQL", "Chart.js", "Bootstrap"],
    imageUrl: fundwaveImg1,
    screenshots: [
      {
        src: fundwaveImg1,
        caption: "Fundwave landing page introducing donor onboarding, case browsing navigation, and fundraiser entry points.",
        alt: "Fundwave landing page",
      },
      {
        src: fundwaveImg2,
        caption: "Individual healthcare campaign page displaying percentage funded (53.33%), raised amount vs. target goal, and recent cases.",
        alt: "Fundwave campaign detail view",
      },
      {
        src: fundwaveImg3,
        caption: "Multi-country case directory showing active health and scholarship campaigns with live progress bars.",
        alt: "Fundwave campaign directory",
      },
    ],
    overview:
      "Built during AbkFinhack 2024, Fundwave gives fundraisers and donors direct visibility into campaign funding progress by connecting Payaza payment callbacks directly to beneficiary progress totals.",
    challenge:
      "Supporters hesitate to donate when campaign totals lag behind or lack clear goal breakdowns. Under hackathon time constraints, donation processing and UI percentages had to stay synchronized.",
    solution:
      "Connected Payaza API payment reconciliation to Django transactional updates in MySQL, recalculating raised totals and percentage-funded bars immediately upon confirmed payments.",
    features: [
      {
        title: "Beneficiary Progress Tracking",
        description:
          "Displays raised totals, target goals, percentage funded, and regional campaign categorization in real time.",
      },
      {
        title: "Automated Payaza Reconciliation",
        description:
          "Processes card and transfer donations through Payaza and reconciles ledger totals automatically.",
      },
      {
        title: "Case Discovery & Search",
        description:
          "Lets donors filter active causes by category (Health, Scholarship) and geographic region.",
      },
    ],
    architecturePoints: [
      "Atomic database transactions updating campaign totals cleanly on Payaza payment confirmation.",
      "Lightweight Bootstrap + Chart.js views built to load cleanly across mobile devices.",
    ],
    tradeoffs: [
      "Prioritized reliable Payaza donation reconciliation and live case progress tracking over complex secondary social feeds within the hackathon window.",
    ],
    outcome:
      "Delivered a working full-stack crowdfunding prototype with automated Payaza donation processing at AbkFinhack 2024.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Visaro Nigeria (visaro.ng)",
    location: "Remote",
    period: "Dec 2025 - Aug 2026",
    achievements: [
      "Built modular, responsive UI components in React and Tailwind CSS for customer onboarding and identity verification flows.",
      "Standardized client-server API contracts, defining request/response schemas and error handling for asynchronous verification requests.",
    ],
    techStack: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Back-End Developer",
    company: "Jexhub Limited",
    location: "Remote",
    period: "Nov 2024 - Dec 2025",
    achievements: [
      "Co-architected backend services for the Jexcelhub e-commerce platform in Django and MySQL covering inventory, cart, and checkout flows.",
      "Built and maintained 20+ RESTful endpoints with schema-level payload validation and consistent structured error responses.",
      "Shipped platform features on a sprint cadence alongside frontend engineers and UI/UX designers.",
    ],
    techStack: ["Python", "Django", "MySQL", "REST APIs", "Git"],
  },
  {
    role: "Software Engineering Intern",
    company: "HNG Tech",
    location: "Remote",
    period: "Jan 2024 - Mar 2024",
    achievements: [
      "Completed successive elimination stages of a competitive remote internship, delivering Python engineering tasks under fixed deadlines.",
      "Implemented backend feature modules in Django and FastAPI and collaborated on cross-browser web interfaces.",
    ],
    techStack: ["Python", "FastAPI", "Django", "JavaScript"],
  },
];

export const HONORS: HonorItem[] = [
  {
    title: "1st Place (Faculty Level)",
    organization: "Olabisi Onabanjo University Research Innovation Challenge, 2026",
  },
  {
    title: "2nd Place, African Entelligence Lab Prediction Game",
    organization: "Deep Learning Indaba, 2026",
  },
  {
    title: "Campus Community Ambassador & Co-Lead",
    organization: "Data Science Nigeria (DSN), OOU Chapter",
  },
  {
    title: "Campus Ambassador",
    organization: "Cowrywise",
  },
  {
    title: "Research Team Member",
    organization: "RAIN (Robotics & AI Nigeria), OOU",
  },
];
