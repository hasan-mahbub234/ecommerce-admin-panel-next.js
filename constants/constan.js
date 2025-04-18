export const navMenu = [
  {
    id: "home",
    name: "Home",
    ariaLabel: "Navigate to Home section",
  },
  {
    id: "services",
    name: "Services",
    ariaLabel: "Navigate to Services section",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    ariaLabel: "Navigate to Portfolio section",
  },
  {
    id: "team",
    name: "About Us",
    ariaLabel: "Navigate to About Us section",
  },
  {
    id: "blog",
    name: "Blog",
    ariaLabel: "Navigate to Blog section",
  },
];

export const socialMedia = [
  {
    name: "facebook",
    icon: () => <i className="fa-brands fa-facebook-f"></i>,
    link: "https://www.facebook.com/share/1AL9JoEmEA/",
  },
  {
    name: "LinkedIn",
    icon: () => <i className="fa-brands fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/company/top-rated-designer/",
  },
  {
    name: "Twitter",
    icon: () => <i className="fa-brands fa-x-twitter"></i>,
    link: "https://x.com/topratedesigner?t=CZrD7WLLyYvAHDCn61Qj2A&s=08",
  },
  {
    name: "Whatsapp",
    icon: () => <i className="fa-brands fa-whatsapp"></i>,
    link: "https://wa.me/+8801799008100",
  },
  // {
  //   name: "Instagram",
  //   icon: () => <i className="fa-brands fa-instagram"></i>,
  //   link: "",
  // },
];

export const services = [
  {
    id: "web-application-development",
    name: "Web Application Development",
    nick_name: "Web Application",
    icon: () => (
      <img
        src="/assets/web.png"
        alt="Web application development icon"
        width="60"
        height="60"
        loading="lazy"
      />
    ),
    desc: "Custom web application development services creating scalable, high-performance solutions with responsive design, real-time capabilities, and secure authentication for businesses.",
    seoDescription:
      "Professional web application development services for businesses needing custom, scalable solutions with modern technologies like React, Node.js, and serverless architecture.",
    services: [
      "Custom Web Application Design & Development",
      "Responsive & Mobile-First Web Applications",
      "Serverless Architecture Implementation",
      "Secure Payment Gateway Integration",
      "Database Design & Performance Optimization",
      "Social Media & Third-Party Authentication",
      "Real-time Data Processing (WebSockets, Firebase)",
    ],
    keywords: [
      "web application development",
      "custom web apps",
      "responsive web design",
      "serverless architecture",
      "web application security",
    ],
  },
  {
    id: "mobile-application-development",
    name: "Mobile Application Development",
    nick_name: "Mobile App",
    icon: () => (
      <img
        src="/assets/mobile.png"
        alt="Mobile app development icon"
        width="60"
        height="60"
        loading="lazy"
      />
    ),
    desc: "Native and cross-platform mobile app development for iOS and Android with optimized performance and seamless user experiences.",
    seoDescription:
      "Expert mobile app development services for iOS and Android, including React Native cross-platform solutions and App Store deployment.",
    services: [
      "iOS & Android Native App Development",
      "Cross-Platform Development (React Native, Flutter)",
      "App Store & Play Store Deployment",
      "Mobile App Maintenance & Support",
      "Performance Optimization & Testing",
    ],
    keywords: [
      "mobile app development",
      "iOS app development",
      "Android app development",
      "React Native apps",
      "app store optimization",
    ],
  },
  {
    id: "ai-chatbot-implementation",
    name: "AI Chatbot Implementation",
    nick_name: "AI Chatbot",
    icon: () => (
      <img
        src="/assets/ai.png"
        alt="AI chatbot implementation icon"
        width="60"
        height="60"
        loading="lazy"
      />
    ),
    desc: "Intelligent chatbot solutions enhancing customer support and engagement through AI and automation.",
    seoDescription:
      "AI-powered chatbot implementation services for businesses to automate customer support and improve engagement.",
    services: [
      "Custom Chatbot API Integration",
      "Real-Time Messaging Systems",
      "WebSocket Connection Implementation",
      "Natural Language Processing (NLP) Chatbots",
      "24/7 Automated Customer Support",
    ],
    keywords: [
      "AI chatbot",
      "customer support chatbot",
      "NLP chatbot",
      "chatbot integration",
      "automated messaging",
    ],
  },
  {
    id: "ui-ux-design-services",
    name: "UI/UX Design Services",
    nick_name: "UI/UX Design",
    icon: () => (
      <img
        src="/assets/ui.png"
        alt="UI/UX design services icon"
        width="60"
        height="60"
        loading="lazy"
      />
    ),
    desc: "User-centered design solutions creating intuitive and visually appealing digital experiences.",
    seoDescription:
      "Professional UI/UX design services focused on creating user-friendly, accessible, and visually stunning digital products.",
    services: [
      "User Research & Experience Strategy",
      "Mobile & Web Interface Design",
      "Interactive Prototyping & Testing",
      "Design System & Component Library Creation",
      "Brand Identity & Digital Illustration",
      "WCAG-Compliant Accessibility Design",
    ],
    keywords: [
      "UI/UX design",
      "user experience design",
      "web design services",
      "mobile app design",
      "accessible design",
    ],
  },
  {
    id: "cms-development",
    name: "CMS Web Technology System",
    nick_name: "CMS Web App",
    icon: () => (
      <img
        src="/assets/cms.png"
        alt="CMS development icon"
        width="60"
        height="60"
        loading="lazy"
      />
    ),
    desc: "Custom content management solutions empowering businesses to manage their digital content efficiently.",
    seoDescription:
      "Custom CMS development services including WordPress, Shopify, and headless CMS solutions for content-driven businesses.",
    services: [
      "WordPress & Shopify Custom Development",
      "Headless CMS Implementation",
      "Plugin & Theme Customization",
      "CMS Performance Optimization",
      "E-commerce CMS Solutions (WooCommerce, Magento)",
      "Enterprise Content Management Systems",
    ],
    keywords: [
      "CMS development",
      "WordPress development",
      "Shopify development",
      "headless CMS",
      "content management system",
    ],
  },
  {
    id: "seo-services",
    name: "Search Engine Optimization (SEO)",
    nick_name: "SEO",
    icon: () => (
      <img
        src="/assets/seo.png"
        alt="SEO services icon"
        width="60"
        height="60"
        loading="lazy"
      />
    ),
    desc: "Comprehensive SEO strategies to improve online visibility and drive organic traffic.",
    seoDescription:
      "Professional SEO services including technical audits, keyword strategy, and content optimization to boost search rankings.",
    services: [
      "Comprehensive On-Page SEO Optimization",
      "Technical SEO Audits & Fixes",
      "Strategic Keyword Research & Implementation",
      "Quality Link Building Campaigns",
      "Local SEO & Google Business Profile Optimization",
      "SEO Content Strategy & Copywriting",
    ],
    keywords: [
      "SEO services",
      "search engine optimization",
      "technical SEO",
      "local SEO",
      "content marketing",
    ],
  },
];

export const portfolio = [
  {
    id: "bullman-equipment",
    name: "Bullman Equipment",
    type: "Ecommerce Platform",
    desc: "Developed Bullman Equipment's web and mobile applications for gymnastic products, ensuring seamless shopping with secure Stripe & Mollie payments, robust authentication, and efficient cart and order management for an optimized user experience.",
    seoDescription:
      "Custom ecommerce platform for gymnastic equipment with secure payment gateways and mobile app",
    technologies: [
      "Next.js",
      "Node.js",
      "ODOO",
      "Tailwind CSS",
      "MongoDB",
      "React Native",
    ],
    images: [
      {
        src: "/assets/portfolio/bull2.png",
        alt: "Bullman Equipment ecommerce homepage showing product categories",
        width: 1200,
        height: 800,
      },
      {
        src: "/assets/portfolio/bull3.png",
        alt: "Bullman Equipment product detail page with specifications",
        width: 1200,
        height: 800,
      },
      {
        src: "/assets/portfolio/bullman.png",
        alt: "Bullman Equipment mobile app interface with shopping cart",
        width: 600,
        height: 1200,
      },
      {
        src: "/assets/portfolio/bull4.png",
        alt: "Bullman Equipment secure checkout process with payment options",
        width: 1200,
        height: 800,
      },
    ],
    keywords: [
      "ecommerce development",
      "gymnastic equipment store",
      "Stripe integration",
      "React Native app",
      "shopping cart system",
    ],
    launchDate: "2023-05-15",
    client: "Bullman Equipment Inc.",
    projectUrl: "https://bullmanequipment.com",
    features: [
      "Multi-vendor marketplace",
      "Custom ODOO ERP integration",
      "Mobile-first responsive design",
      "One-click checkout process",
    ],
  },
  {
    id: "solvemeet",
    name: "SolveMeet",
    type: "Consultation Platform",
    desc: "Developed SolveMeet's web and mobile applications, a consultation platform connecting Advisors and Clients via chat, audio, and video calls. Integrated bKash, Stripe, and PayPal for seamless payments and implemented Socket.IO for real-time communication.",
    seoDescription:
      "Consultation platform with real-time communication and multiple payment gateways",
    technologies: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "Socket.io",
      "React Native",
    ],
    images: [
      {
        src: "/assets/portfolio/solve1.png",
        alt: "SolveMeet advisor dashboard showing scheduled sessions",
        width: 1200,
        height: 800,
      },
      {
        src: "/assets/portfolio/solve2.png",
        alt: "SolveMeet video call interface with screen sharing options",
        width: 1200,
        height: 800,
      },
    ],
    keywords: [
      "consultation platform",
      "real-time chat",
      "video calling app",
      "payment integration",
      "expert advice platform",
    ],
    launchDate: "2023-08-22",
    client: "SolveMeet Technologies",
    projectUrl: "https://solvemeet.com",
    features: [
      "WebRTC video conferencing",
      "Multi-currency payment system",
      "Session recording",
      "Rating and review system",
    ],
  },
  {
    id: "eastgold-investments",
    name: "Eastgold",
    type: "Investment Platform",
    desc: "Developed Eastgold's web and mobile applications, a gold investment platform with a comprehensive dashboard for Admins, Managers, and Cashiers. Implemented investment management, transaction tracking, user management, and secure transactions for seamless and efficient investment oversight.",
    seoDescription:
      "Gold investment platform with multi-level user dashboards and transaction tracking",
    technologies: ["React", "Express.js", "WebSockets", "React Native", "Expo"],
    images: [
      {
        src: "/assets/portfolio/eastgold1.png",
        alt: "Eastgold investment dashboard showing portfolio performance",
        width: 1200,
        height: 800,
      },
      {
        src: "/assets/portfolio/eastgold2.png",
        alt: "Eastgold mobile app with transaction history",
        width: 600,
        height: 1200,
      },
    ],
    keywords: [
      "investment platform",
      "gold trading",
      "financial dashboard",
      "transaction tracking",
      "wealth management",
    ],
    launchDate: "2023-03-10",
    client: "Eastgold Financial",
    projectUrl: "https://eastgoldinvestments.com",
    features: [
      "Real-time gold price updates",
      "Multi-tier user permissions",
      "PDF report generation",
      "Biometric authentication",
    ],
  },
  {
    id: "advisor-platform",
    name: "Advisor",
    type: "Social Engagement Platform",
    desc: "Discover a platform where advice fosters learning, growth, and meaningful connections. Engage with a community driven by real experiences and shared wisdom. We developed its mobile app with features like posts, reels, comments, live chat, sharing, and likes for seamless interaction.",
    seoDescription:
      "Social platform for knowledge sharing with community engagement features",
    technologies: ["React Native", "Expo", "Python", "MySQL", "Fast API"],
    images: [
      {
        src: "/assets/portfolio/advisor1.png",
        alt: "Advisor platform feed showing community posts",
        width: 600,
        height: 1200,
      },
      {
        src: "/assets/portfolio/advisor2.png",
        alt: "Advisor platform live chat interface",
        width: 600,
        height: 1200,
      },
    ],
    keywords: [
      "social platform",
      "knowledge sharing",
      "community app",
      "expert advice",
      "mobile engagement",
    ],
    launchDate: "2023-11-05",
    client: "Advisor Social Inc.",
    projectUrl: "https://advisor.com",
    features: [
      "Content moderation system",
      "Algorithmic feed ranking",
      "Live streaming capability",
      "Push notification system",
    ],
  },
  {
    id: "tranzaxx-blog",
    name: "Tranzaxx",
    type: "Blog Platform",
    desc: "This is a blog-based social engagement platform featuring post creation, comments, and real-time chats, along with dedicated dashboards for admins and users. We developed both the web and mobile applications to ensure a seamless and interactive experience.",
    seoDescription:
      "Blog platform with social features and real-time engagement",
    technologies: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "React Native",
      "MongoDB",
    ],
    images: [
      {
        src: "/assets/portfolio/tranzaxx2.png",
        alt: "Tranzaxx blog post creation interface",
        width: 1200,
        height: 800,
      },
      {
        src: "/assets/portfolio/tranzaxx1.png",
        alt: "Tranzaxx mobile app with dark mode",
        width: 600,
        height: 1200,
      },
      {
        src: "/assets/portfolio/tranzaxx3.png",
        alt: "Tranzaxx admin dashboard analytics",
        width: 1200,
        height: 800,
      },
    ],
    keywords: [
      "blog platform",
      "content creation",
      "social blogging",
      "real-time chat",
      "publishing system",
    ],
    launchDate: "2023-07-18",
    client: "Tranzaxx Media",
    projectUrl: "https://tranzaxx.com",
    features: [
      "WYSIWYG editor",
      "Multi-author support",
      "Dark mode toggle",
      "Content analytics dashboard",
    ],
  },
];

export const partners = [
  {
    id: "tranzaxx",
    name: "Tranzaxx",
    url: "https://tranzaxx.com",
    logo: {
      src: "/assets/patner/tranzaxx.png",
      alt: "Tranzaxx company logo",
      width: 100,
      height: 100,
    },
    description:
      "Content publishing platform specializing in educational materials",
  },
  {
    id: "natgroove",
    name: "Natgroove",
    url: "https://natgroove.com",
    logo: {
      src: "/assets/patner/nutgrove.png",
      alt: "Natgroove company logo",
      width: 100,
      height: 100,
    },
    description: "Sustainable agriculture technology company",
  },
  {
    id: "ndemi",
    name: "Ndemi Solutions",
    url: "https://ndemisolutions.com",
    logo: {
      src: "/assets/patner/ndemi.png",
      alt: "Ndemi Solutions company logo",
      width: 100,
      height: 100,
    },
    description: "Enterprise software development firm",
  },
  {
    id: "kn",
    name: "KN Technologies",
    url: "https://kntechnologies.com",
    logo: {
      src: "/assets/patner/kn.png",
      alt: "KN Technologies company logo",
      width: 100,
      height: 100,
    },
    description: "Industrial automation specialists",
  },
  {
    id: "bluehouse",
    name: "Bluehouse Capital",
    url: "https://bluehousecapital.com",
    logo: {
      src: "/assets/patner/bluehouse.png",
      alt: "Bluehouse Capital company logo",
      width: 100,
      height: 100,
    },
    description: "Venture capital and investment firm",
  },
  {
    id: "advisor",
    name: "Advisor Platform",
    url: "https://joinadvisor.com",
    logo: {
      src: "/assets/patner/advisor.png",
      alt: "Advisor Platform company logo",
      width: 120,
      height: 40,
    },
    description: "Professional networking and knowledge sharing platform",
  },
  {
    id: "wemasomo",
    name: "WeMasomo",
    url: "https://wemasomo.org",
    logo: {
      src: "/assets/patner/wemasomo.png",
      alt: "WeMasomo nonprofit organization logo",
      width: 100,
      height: 80,
    },
    description: "Nonprofit organization promoting digital education in Africa",
  },
  {
    id: "bullman",
    name: "Bullman Equipment",
    url: "https://bullmanequipment.com",
    logo: {
      src: "/assets/patner/bullman.png",
      alt: "Bullman Equipment company logo",
      width: 100,
      height: 100,
    },
    description: "Gymnastic equipment manufacturer and retailer",
  },
  {
    id: "solvemeet",
    name: "SolveMeet",
    url: "https://solvemeet.com",
    logo: {
      src: "/assets/patner/solvemeet.png",
      alt: "SolveMeet consultation platform logo",
      width: 120,
      height: 40,
    },
    description: "Online consultation and expert advice platform",
  },
];

export const team = [
  {
    id: "sahriar-santo",
    name: "Sahriar Santo",
    position: "Graphic Designer",
    image: {
      src: "/assets/person/santo.png",
      alt: "Sahriar Santo, Graphic Designer at our company",
      width: 200,
      height: 200,
    },
    experience: "5+ years",
    tools: [
      { name: "Adobe Photoshop", percentage: 95 },
      { name: "Illustrator", percentage: 90 },
      { name: "Figma", percentage: 85 },
      { name: "Sketch", percentage: 80 },
    ],
    description:
      "Creative graphic designer specializing in branding and UI design with expertise in Adobe Creative Suite.",
    seoDescription:
      "Professional graphic designer with 5+ years experience in branding and digital illustration",
    expertise: [
      "Brand Identity",
      "Digital Illustration",
      "UI Design",
      "Visual Storytelling",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sahriarsanto",
      dribbble: "https://dribbble.com/sahriarsanto",
    },
  },
  {
    id: "merajul-islam",
    name: "Merajul Islam",
    position: "UI/UX Designer",
    image: {
      src: "/assets/person/miraz.jpg",
      alt: "Merajul Islam, UI/UX Designer at our company",
      width: 200,
      height: 200,
    },
    experience: "3+ years",
    tools: [
      { name: "Figma", percentage: 95 },
      { name: "Adobe XD", percentage: 90 },
      { name: "Sketch", percentage: 85 },
      { name: "InVision", percentage: 80 },
    ],
    description:
      "UI/UX designer focused on creating intuitive and accessible digital experiences.",
    seoDescription:
      "Experienced UI/UX designer with expertise in Figma and user-centered design",
    expertise: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/merajulislam",
      behance: "https://behance.net/merajulislam",
    },
  },
  {
    id: "humaira-sultana",
    name: "Humaira Sultana",
    position: "Web & Mobile App Developer",
    image: {
      src: "/assets/person/humaira.jpg",
      alt: "Humaira Sultana, Web & Mobile Developer at our company",
      width: 200,
      height: 200,
    },
    experience: "5+ years",
    tools: [
      { name: "React", percentage: 90 },
      { name: "Next.js", percentage: 95 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "React Native", percentage: 85 },
      { name: "Node.js", percentage: 80 },
    ],
    description:
      "Full-stack developer specializing in React, Next.js and mobile applications.",
    seoDescription:
      "Senior developer with 5+ years experience in React and React Native",
    expertise: [
      "Frontend Architecture",
      "Performance Optimization",
      "Cross-platform Apps",
      "API Integration",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/humairasultana",
      github: "https://github.com/humairasultana",
    },
  },
  {
    id: "mahbubul-hasan",
    name: "Mahbubul Hasan",
    position: "Full Stack Developer",
    image: {
      src: "/assets/person/mahbub2.png",
      alt: "Mahbubul Hasan, Full Stack Developer at our company",
      width: 200,
      height: 200,
    },
    experience: "4+ years",
    tools: [
      { name: "React", percentage: 90 },
      { name: "Next.js", percentage: 85 },
      { name: "FastAPI", percentage: 80 },
      { name: "PostgreSQL", percentage: 90 },
      { name: "Docker", percentage: 85 },
    ],
    description:
      "Full-stack developer with expertise in JavaScript, TypeScript and backend systems.",
    seoDescription:
      "Full stack developer specializing in modern web technologies and DevOps",
    expertise: [
      "Database Design",
      "System Architecture",
      "CI/CD Pipelines",
      "Cloud Deployment",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/mahbubulhasan",
      twitter: "https://twitter.com/mahbubulhasan",
    },
  },
  {
    id: "asfaq-ali-rifat",
    name: "Asfaq Ali Rifat",
    position: "Digital Marketer & SEO Expert",
    image: {
      src: "/assets/person/asfaq.png",
      alt: "Asfaq Ali Rifat, Digital Marketer at our company",
      width: 200,
      height: 200,
    },
    experience: "3+ years",
    tools: [
      { name: "Google Analytics", percentage: 90 },
      { name: "SEMrush", percentage: 85 },
      { name: "Ahrefs", percentage: 80 },
      { name: "Meta Ads", percentage: 90 },
    ],
    description:
      "Digital marketing specialist focused on SEO and data-driven growth strategies.",
    seoDescription:
      "SEO expert with 3+ years experience in digital marketing and analytics",
    expertise: [
      "SEO Strategy",
      "Content Marketing",
      "PPC Campaigns",
      "Conversion Optimization",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/asfaqalirifat",
      twitter: "https://twitter.com/asfaqalirifat",
    },
  },
];

export const blogs = [
  {
    id: 1,
    headline: "How to Build High-Performance Websites: A Complete Guide",
    type: "website-development",
    slug: "how-to-build-high-performance-websites",
    desc: "Learn how to create fast, responsive, and user-friendly websites that align with your business goals. From front-end design to back-end development, we ensure seamless performance, mobile optimization, and engaging UI/UX.",
    metaDesc:
      "Discover expert tips for building high-performance websites with optimal speed, responsiveness, and user experience. Learn web development best practices.",
    images: () => (
      <img
        src="/assets/websit.png"
        alt="High performance website development illustration"
        className="w-[200px] h-[200px] md:max-lg:w-[100px] md:max-lg:h-[100px] max-sm:w-[150px] max-sm:h-[100px]"
        loading="lazy"
      />
    ),
  },
  {
    id: 2,
    headline: "Seamless Mobile Apps: Creating Engaging User Experiences",
    type: "mobile-app-development",
    slug: "seamless-mobile-apps-engaging-experiences",
    desc: "Design and develop high-quality mobile applications for iOS and Android that captivate users. Our team specializes in intuitive UI/UX, smooth navigation, and robust functionality.",
    metaDesc:
      "Expert guide to developing seamless mobile apps with engaging user experiences. Learn mobile app development best practices for iOS and Android.",
    images: () => (
      <img
        src="/assets/mobile1.png"
        alt="Mobile app development illustration"
        className="w-[200px] h-[200px] md:max-lg:w-[100px] md:max-lg:h-[100px] max-sm:w-[150px] max-sm:h-[100px]"
        loading="lazy"
      />
    ),
  },
  {
    id: 3,
    headline: "SEO Strategies: Boost Rankings and Drive Organic Traffic",
    type: "seo",
    slug: "seo-strategies-boost-rankings",
    desc: "Enhance your website's visibility with our proven SEO strategies. We optimize content, improve site speed, and implement effective keyword targeting to rank higher on search engines.",
    metaDesc:
      "Learn effective SEO strategies to boost your website rankings and drive organic traffic. Discover on-page and technical SEO best practices.",
    images: () => (
      <img
        src="/assets/seo1.png"
        alt="SEO optimization illustration"
        className="w-[200px] h-[200px] md:max-lg:w-[100px] md:max-lg:h-[100px] max-sm:w-[150px] max-sm:h-[100px]"
        loading="lazy"
      />
    ),
  },
  {
    id: 4,
    headline: "Cloud Solutions: Scalable and Secure Business Infrastructure",
    type: "cloud-solutions",
    slug: "cloud-solutions-scalable-secure",
    desc: "Utilize cloud computing to enhance business efficiency, security, and scalability. Our cloud solutions help you store, manage, and access data seamlessly while ensuring security compliance.",
    metaDesc:
      "Discover how scalable and secure cloud solutions can transform your business infrastructure. Learn about cloud migration and management.",
    images: () => (
      <img
        src="/assets/cloud.png"
        alt="Cloud computing solutions illustration"
        className="w-[200px] h-[200px] md:max-lg:w-[100px] md:max-lg:h-[100px] max-sm:w-[150px] max-sm:h-[100px]"
        loading="lazy"
      />
    ),
  },
  {
    id: 5,
    headline: "AI Solutions: Transforming Businesses with Smart Technology",
    type: "ai-solutions",
    slug: "ai-solutions-transform-business",
    desc: "Leverage artificial intelligence to automate processes, analyze data, and improve customer interactions. From chatbots to machine learning models, AI solutions streamline operations.",
    metaDesc:
      "Explore how AI solutions can transform your business with automation and data analysis. Learn about implementing AI technology effectively.",
    images: () => (
      <img
        src="/assets/ai1.png"
        alt="Artificial intelligence solutions illustration"
        className="w-[200px] h-[200px] md:max-lg:w-[100px] md:max-lg:h-[100px] max-sm:w-[150px] max-sm:h-[100px]"
        loading="lazy"
      />
    ),
  },
  {
    id: 6,
    headline: "CMS Technology: Powering Modern Websites with Ease",
    type: "cms-technology",
    slug: "cms-technology-modern-websites",
    desc: "Discover how CMS technology can elevate your online presence, streamline content management, and deliver exceptional user experiences effortlessly.",
    metaDesc:
      "Learn how CMS technology powers modern websites with easy content management and exceptional user experiences. Explore CMS benefits.",
    images: () => (
      <img
        src="/assets/security.png"
        alt="CMS technology illustration"
        className="w-[200px] h-[200px] md:max-lg:w-[100px] md:max-lg:h-[100px] max-sm:w-[150px] max-sm:h-[100px]"
        loading="lazy"
      />
    ),
  },
];

export const blogDetails = [
  {
    id: 1,
    headline: "How to Build High-Performance Websites: A Complete Guide",
    type: "website-development",
    slug: "how-to-build-high-performance-websites",
    metaTitle: "How to Build High-Performance Websites | Expert Guide",
    metaDesc:
      "Learn the essential strategies for building fast, responsive, and user-friendly websites that drive conversions and improve search rankings.",
    publishedDate: "2024-10-15",
    author: "Web Development Team",
    desc: () => (
      <div className="flex flex-col">
        <p className="mt-4 text-justify">
          In today’s digital age, building high-performance websites has become
          a cornerstone of success for businesses and individuals alike. A
          website is no longer just a digital placeholder; it is a dynamic
          platform that can make or break user engagement, brand credibility,
          and conversion rates. As the online landscape grows increasingly
          competitive, the need for fast, responsive, and user-friendly websites
          has never been more critical. High-performance websites are not just
          about aesthetics; they are about delivering seamless experiences that
          align with business goals and user expectations. The journey to
          creating a high-performance website begins with a deep understanding
          of both front-end and back-end development. Front-end design focuses
          on the visual and interactive elements that users engage with
          directly. This includes everything from layout and typography to color
          schemes and navigation menus. A well-designed front-end ensures that
          visitors can easily find what they are looking for, while also
          enjoying a visually appealing experience. On the other hand, back-end
          development deals with the server-side operations that power the
          website. This includes database management, server configuration, and
          application logic. A robust back-end ensures that the website runs
          smoothly, loads quickly, and can handle high traffic without
          crashing.One of the most critical aspects of building a
          high-performance website is ensuring mobile optimization. With the
          majority of internet users accessing websites via mobile devices, a
          mobile-friendly design is no longer optional—it is essential. Mobile
          optimization involves creating responsive designs that adapt to
          different screen sizes and resolutions. This ensures that users have a
          consistent experience, whether they are browsing on a smartphone,
          tablet, or desktop computer. Additionally, mobile optimization plays a
          significant role in search engine rankings, as search engines like
          Google prioritize mobile-friendly websites in their algorithms.
          Another key factor in building high-performance websites is speed. In
          a world where users expect instant access to information, even a few
          seconds of delay can lead to higher bounce rates and lost
          opportunities. Optimizing website speed involves a combination of
          techniques, including image compression, minifying CSS and JavaScript
          files, and leveraging browser caching. Content Delivery Networks
          (CDNs) can also be used to distribute website content across multiple
          servers, reducing latency and improving load times for users in
          different geographic locations. By prioritizing speed, businesses can
          create a more enjoyable user experience and increase the likelihood of
          conversions. User experience (UX) and user interface (UI) design are
          also integral to the success of a high-performance website. UX design
          focuses on understanding user behavior and creating intuitive pathways
          that guide visitors toward their goals. This involves conducting user
          research, creating wireframes, and testing prototypes to identify pain
          points and areas for improvement. UI design, on the other hand, deals
          with the visual elements that users interact with, such as buttons,
          icons, and forms. A well-designed UI enhances usability and makes it
          easier for users to navigate the website. Together, UX and UI design
          create a cohesive experience that keeps users engaged and encourages
          them to take desired actions, such as making a purchase or signing up
          for a newsletter. Search engine optimization (SEO) is another crucial
          component of building high-performance websites. SEO involves
          optimizing website content and structure to improve visibility in
          search engine results. This includes using relevant keywords, creating
          high-quality content, and building backlinks from reputable sources.
          By implementing SEO best practices, businesses can attract more
          organic traffic and increase their chances of reaching their target
          audience. Additionally, SEO helps establish credibility and authority,
          as websites that rank higher in search results are often perceived as
          more trustworthy. Security is another aspect that cannot be overlooked
          when building high-performance websites. With cyber threats on the
          rise, ensuring the safety of user data and website integrity is
          paramount. This involves implementing SSL certificates to encrypt
          data, regularly updating software and plugins, and using strong
          passwords. By prioritizing security, businesses can protect their
          websites from hacking attempts and build trust with their users. In
          conclusion, building high-performance websites requires a holistic
          approach that combines front-end and back-end development, mobile
          optimization, speed optimization, UX/UI design, SEO, and security. By
          focusing on these elements, businesses can create websites that not
          only look great but also perform exceptionally well. A
          high-performance website is more than just a digital asset; it is a
          powerful tool that can drive growth, improve conversions, and enhance
          the overall user experience. As the digital landscape continues to
          evolve, investing in high-performance websites will remain a key
          strategy for staying ahead of the competition and achieving long-term
          success.
        </p>
        <p className="mt-4 text-justify">
          One of the most critical aspects of building a high-performance
          website is ensuring mobile optimization. With the majority of internet
          users accessing websites via mobile devices, a mobile-friendly design
          is no longer optional—it is essential. Mobile optimization involves
          creating responsive designs that adapt to different screen sizes and
          resolutions. This ensures that users have a consistent experience,
          whether they are browsing on a smartphone, tablet, or desktop
          computer. Additionally, mobile optimization plays a significant role
          in search engine rankings, as search engines like Google prioritize
          mobile-friendly websites in their algorithms. Another key factor in
          building high-performance websites is speed. In a world where users
          expect instant access to information, even a few seconds of delay can
          lead to higher bounce rates and lost opportunities. Optimizing website
          speed involves a combination of techniques, including image
          compression, minifying CSS and JavaScript files, and leveraging
          browser caching. Content Delivery Networks (CDNs) can also be used to
          distribute website content across multiple servers, reducing latency
          and improving load times for users in different geographic locations.
          By prioritizing speed, businesses can create a more enjoyable user
          experience and increase the likelihood of conversions.
        </p>
        <p className="mt-4 text-justify">
          User experience (UX) and user interface (UI) design are also integral
          to the success of a high-performance website. UX design focuses on
          understanding user behavior and creating intuitive pathways that guide
          visitors toward their goals. This involves conducting user research,
          creating wireframes, and testing prototypes to identify pain points
          and areas for improvement. UI design, on the other hand, deals with
          the visual elements that users interact with, such as buttons, icons,
          and forms. A well-designed UI enhances usability and makes it easier
          for users to navigate the website. Together, UX and UI design create a
          cohesive experience that keeps users engaged and encourages them to
          take desired actions, such as making a purchase or signing up for a
          newsletter.
        </p>
        <p className="mt-4 text-justify">
          Search engine optimization (SEO) is another crucial component of
          building high-performance websites. SEO involves optimizing website
          content and structure to improve visibility in search engine results.
          This includes using relevant keywords, creating high-quality content,
          and building backlinks from reputable sources. By implementing SEO
          best practices, businesses can attract more organic traffic and
          increase their chances of reaching their target audience.
          Additionally, SEO helps establish credibility and authority, as
          websites that rank higher in search results are often perceived as
          more trustworthy. Security is another aspect that cannot be overlooked
          when building high-performance websites. With cyber threats on the
          rise, ensuring the safety of user data and website integrity is
          paramount. This involves implementing SSL certificates to encrypt
          data, regularly updating software and plugins, and using strong
          passwords. By prioritizing security, businesses can protect their
          websites from hacking attempts and build trust with their users.
        </p>
        <p className="mt-4 text-justify">
          In conclusion, building high-performance websites requires a holistic
          approach that combines front-end and back-end development, mobile
          optimization, speed optimization, UX/UI design, SEO, and security. By
          focusing on these elements, businesses can create websites that not
          only look great but also perform exceptionally well. A
          high-performance website is more than just a digital asset; it is a
          powerful tool that can drive growth, improve conversions, and enhance
          the overall user experience. As the digital landscape continues to
          evolve, investing in high-performance websites will remain a key
          strategy for staying ahead of the competition and achieving long-term
          success.
        </p>
      </div>
    ),
    images: "/assets/blog/website.jpg",
    altText: "High-performance website development process illustration",
  },
  {
    id: 2,
    headline:
      "Seamless Mobile App Development: Creating Engaging User Experiences",
    type: "mobile-app-development",
    slug: "seamless-mobile-app-engaging-experiences",
    metaTitle:
      "Mobile App Development Guide: Building Seamless User Experiences",
    metaDesc:
      "Discover expert strategies for creating high-performance mobile apps with engaging UX, robust security, and cutting-edge technologies like AI and 5G.",
    publishedDate: "2024-09-20",
    author: "Mobile Development Team",
    desc: () => (
      <div className="flex flex-col">
        <p className="mt-4 text-justify">
          In today's fast-paced digital world, mobile applications have become
          an essential part of everyday life, shaping the way users interact,
          shop, communicate, and engage with businesses. The growing reliance on
          mobile technology has driven the demand for seamless applications that
          not only function flawlessly but also provide an engaging and
          intuitive user experience. As businesses strive to stay ahead in an
          increasingly competitive market, mobile app development has evolved to
          prioritize performance, usability, and innovation. With the rapid
          advancement of technology, users now expect mobile applications to be
          fast, responsive, and visually appealing. The importance of a smooth
          user experience cannot be overstated, as even the slightest lag or
          poor interface design can lead to user dissatisfaction and app
          abandonment. This has made UI/UX design a crucial element in mobile
          app development, ensuring that applications are not only functional
          but also aesthetically pleasing and easy to navigate. One of the key
          aspects of seamless mobile applications is their ability to provide
          real-time interactions without delays. Whether it is an e-commerce
          platform, a social media app, or a service-based application, users
          expect instant responses to their actions. This requires developers to
          implement optimized coding practices, efficient database management,
          and robust backend support to handle large amounts of user data
          without compromising performance. Moreover, mobile optimization has
          become a fundamental requirement for businesses looking to establish a
          strong digital presence. With a significant portion of internet
          traffic coming from mobile devices, ensuring that applications are
          mobile-friendly is no longer optional. Mobile-first development
          approaches, adaptive designs, and cross-platform compatibility have
          become standard practices to provide users with a consistent
          experience across different devices and screen sizes. Security is
          another critical factor in mobile app development, as users entrust
          applications with sensitive personal and financial information.
          Developers must prioritize data encryption, secure authentication
          methods, and regular security updates to protect user data and prevent
          cyber threats. A seamless app experience is not just about smooth
          navigation and attractive visuals; it also encompasses trust and
          reliability, making security a top priority for any successful mobile
          application. Performance optimization plays a significant role in
          delivering a seamless experience. Slow load times, crashes, and high
          battery consumption can deter users from engaging with an application.
          To overcome these challenges, developers leverage advanced caching
          techniques, minimize API calls, and optimize code to enhance speed and
          efficiency. The integration of artificial intelligence and machine
          learning has also contributed to improving app performance, allowing
          for predictive analytics, personalized content recommendations, and
          automated processes that streamline user interactions. The competitive
          landscape of mobile applications has led to continuous innovation in
          app development methodologies. Agile development and DevOps practices
          have gained prominence, enabling faster deployment, regular updates,
          and enhanced collaboration among development teams. These practices
          not only accelerate the app development process but also ensure that
          applications remain up-to-date with evolving user expectations and
          technological advancements. The role of progressive web applications
          (PWAs) has also become increasingly significant in providing seamless
          app experiences. PWAs offer the best of both web and mobile
          applications, delivering fast-loading, engaging, and reliable
          performance even in low-network conditions. Businesses that adopt PWA
          technology can benefit from increased user engagement, reduced
          development costs, and improved accessibility across multiple devices.
          Another trend shaping the future of mobile app development is the
          integration of augmented reality (AR) and virtual reality (VR)
          experiences. These technologies are revolutionizing user engagement by
          offering immersive and interactive features that enhance storytelling,
          e-commerce shopping experiences, and entertainment applications.
          AR-powered applications have seen widespread adoption in industries
          such as retail, education, and healthcare, demonstrating the growing
          demand for innovative app experiences. Additionally, voice-enabled
          applications and AI-driven chatbots have become integral to enhancing
          user interactions. Voice search and voice assistants have transformed
          the way users interact with apps, making navigation more convenient
          and efficient. AI chatbots provide real-time customer support,
          improving response times and customer satisfaction. The integration of
          these technologies has made applications more intuitive and
          user-friendly, contributing to an overall seamless experience. The
          rise of 5G technology is further revolutionizing mobile app
          development by enabling faster data speeds, lower latency, and
          enhanced connectivity. This advancement allows for the development of
          more sophisticated applications that rely on high-speed streaming,
          real-time communication, and cloud-based services. Businesses
          leveraging 5G technology can deliver richer multimedia experiences and
          enhance user engagement through seamless interactions. As mobile
          applications continue to evolve, businesses must prioritize seamless
          performance, user engagement, and innovative features to stay
          competitive. A well-designed, intuitive, and high-performing
          application not only attracts users but also fosters brand loyalty and
          drives business growth. By embracing the latest advancements in mobile
          app development, businesses can create applications that deliver
          exceptional user experiences and remain ahead in the digital
          landscape. Ultimately, the success of a mobile application depends on
          its ability to provide a seamless and engaging experience. From
          intuitive UI/UX design and performance optimization to security
          enhancements and emerging technologies, every aspect of app
          development plays a crucial role in shaping user satisfaction. As
          businesses navigate the ever-changing digital environment, investing
          in seamless mobile applications will be key to achieving sustained
          success and meeting the evolving demands of modern users.
        </p>
        <p className="mt-4 text-justify">
          One of the key aspects of seamless mobile applications is their
          ability to provide real-time interactions without delays. Whether it
          is an e-commerce platform, a social media app, or a service-based
          application, users expect instant responses to their actions. This
          requires developers to implement optimized coding practices, efficient
          database management, and robust backend support to handle large
          amounts of user data without compromising performance. Moreover,
          mobile optimization has become a fundamental requirement for
          businesses looking to establish a strong digital presence. With a
          significant portion of internet traffic coming from mobile devices,
          ensuring that applications are mobile-friendly is no longer optional.
          Mobile-first development approaches, adaptive designs, and
          cross-platform compatibility have become standard practices to provide
          users with a consistent experience across different devices and screen
          sizes. Security is another critical factor in mobile app development,
          as users entrust applications with sensitive personal and financial
          information. Developers must prioritize data encryption, secure
          authentication methods, and regular security updates to protect user
          data and prevent cyber threats. A seamless app experience is not just
          about smooth navigation and attractive visuals; it also encompasses
          trust and reliability, making security a top priority for any
          successful mobile application.
        </p>
        <p className="mt-4 text-justify">
          Performance optimization plays a significant role in delivering a
          seamless experience. Slow load times, crashes, and high battery
          consumption can deter users from engaging with an application. To
          overcome these challenges, developers leverage advanced caching
          techniques, minimize API calls, and optimize code to enhance speed and
          efficiency. The integration of artificial intelligence and machine
          learning has also contributed to improving app performance, allowing
          for predictive analytics, personalized content recommendations, and
          automated processes that streamline user interactions. The competitive
          landscape of mobile applications has led to continuous innovation in
          app development methodologies. Agile development and DevOps practices
          have gained prominence, enabling faster deployment, regular updates,
          and enhanced collaboration among development teams. These practices
          not only accelerate the app development process but also ensure that
          applications remain up-to-date with evolving user expectations and
          technological advancements. The role of progressive web applications
          (PWAs) has also become increasingly significant in providing seamless
          app experiences. PWAs offer the best of both web and mobile
          applications, delivering fast-loading, engaging, and reliable
          performance even in low-network conditions. Businesses that adopt PWA
          technology can benefit from increased user engagement, reduced
          development costs, and improved accessibility across multiple devices.
        </p>
        <p className="mt-4 text-justify">
          Another trend shaping the future of mobile app development is the
          integration of augmented reality (AR) and virtual reality (VR)
          experiences. These technologies are revolutionizing user engagement by
          offering immersive and interactive features that enhance storytelling,
          e-commerce shopping experiences, and entertainment applications.
          AR-powered applications have seen widespread adoption in industries
          such as retail, education, and healthcare, demonstrating the growing
          demand for innovative app experiences. Additionally, voice-enabled
          applications and AI-driven chatbots have become integral to enhancing
          user interactions. Voice search and voice assistants have transformed
          the way users interact with apps, making navigation more convenient
          and efficient. AI chatbots provide real-time customer support,
          improving response times and customer satisfaction. The integration of
          these technologies has made applications more intuitive and
          user-friendly, contributing to an overall seamless experience. The
          rise of 5G technology is further revolutionizing mobile app
          development by enabling faster data speeds, lower latency, and
          enhanced connectivity. This advancement allows for the development of
          more sophisticated applications that rely on high-speed streaming,
          real-time communication, and cloud-based services. Businesses
          leveraging 5G technology can deliver richer multimedia experiences and
          enhance user engagement through seamless interactions. As mobile
          applications continue to evolve, businesses must prioritize seamless
          performance, user engagement, and innovative features to stay
          competitive. A well-designed, intuitive, and high-performing
          application not only attracts users but also fosters brand loyalty and
          drives business growth. By embracing the latest advancements in mobile
          app development, businesses can create applications that deliver
          exceptional user experiences and remain ahead in the digital
          landscape.
        </p>
        <p className="mt-4 text-justify">
          Ultimately, the success of a mobile application depends on its ability
          to provide a seamless and engaging experience. From intuitive UI/UX
          design and performance optimization to security enhancements and
          emerging technologies, every aspect of app development plays a crucial
          role in shaping user satisfaction. As businesses navigate the
          ever-changing digital environment, investing in seamless mobile
          applications will be key to achieving sustained success and meeting
          the evolving demands of modern users.
        </p>
      </div>
    ),
    images: "/assets/blog/mobile.jpg",
    altText: "Mobile app development process showing UI design and coding",
    readingTime: "8 min read",
    tags: ["mobile development", "UX design", "app security", "AI integration"],
  },
  {
    id: 3,
    headline: "SEO Strategies: Boost Rankings, Drive Traffic & Get Results",
    type: "seo",
    slug: "seo-strategies-boost-rankings",
    metaTitle:
      "Proven SEO Strategies to Increase Rankings & Drive Targeted Traffic",
    metaDesc:
      "Discover expert SEO techniques to improve search rankings, attract quality traffic, and convert visitors. Learn about technical SEO, content optimization, and mobile-first strategies.",
    publishedDate: "2025-02-04",
    author: "SEO Specialist Team",
    desc: () => (
      <div className="flex flex-col">
        <p className="mt-4 text-justify">
          In the ever-evolving digital landscape, businesses are constantly
          seeking ways to enhance their online presence, drive traffic, and
          ultimately boost their rankings on search engines. The key to
          achieving these goals lies in mastering the art of Search Engine
          Optimization (SEO). SEO is not just a buzzword; it is a critical
          component of any successful digital marketing strategy. By optimizing
          your website for search engines, you can ensure that your business
          stands out in a crowded online marketplace, attracts more visitors,
          and converts them into loyal customers.
        </p>
        <p className="mt-4 text-justify">
          The importance of SEO cannot be overstated. With millions of websites
          vying for attention, it is essential to have a well-optimized site
          that ranks high on search engine results pages (SERPs). High rankings
          translate to increased visibility, which in turn drives more organic
          traffic to your site. This traffic is not just any traffic; it is
          highly targeted, meaning that the visitors who come to your site are
          more likely to be interested in your products or services. This
          increases the likelihood of conversions, whether that means making a
          purchase, signing up for a newsletter, or filling out a contact form.
          One of the most effective ways to boost your rankings and drive
          traffic is by creating fast, responsive, and user-friendly websites.
          In today’s fast-paced world, users expect websites to load quickly and
          function seamlessly across all devices. A slow or poorly designed
          website can lead to high bounce rates, where visitors leave your site
          almost immediately after arriving. This not only hurts your user
          experience but also negatively impacts your SEO rankings. Search
          engines like Google prioritize websites that offer a superior user
          experience, so it is crucial to ensure that your site is optimized for
          speed, responsiveness, and ease of use.
        </p>
        <p className="mt-4 text-justify">
          Front-end design plays a significant role in creating a user-friendly
          website. The front-end is what users see and interact with, so it is
          essential to make it visually appealing, intuitive, and easy to
          navigate. A well-designed front-end can captivate users, keep them
          engaged, and guide them through your site effortlessly. This not only
          enhances the user experience but also encourages visitors to spend
          more time on your site, which can positively impact your SEO rankings.
          Back-end development is equally important. The back-end is the engine
          that powers your website, ensuring that everything runs smoothly
          behind the scenes. A well-optimized back-end can improve your site’s
          performance, reduce loading times, and handle high traffic volumes
          without crashing. This is particularly important for businesses that
          experience seasonal spikes in traffic or have a large number of
          visitors. By ensuring that your back-end is robust and efficient, you
          can provide a seamless experience for your users, which can lead to
          higher rankings and more traffic.
        </p>
        <p className="mt-4 text-justify">
          Mobile optimization is another critical factor in SEO. With the
          majority of internet users accessing websites via mobile devices, it
          is essential to have a site that is fully optimized for mobile. A
          mobile-friendly website not only provides a better user experience but
          also ranks higher on search engines. Google, for instance, uses
          mobile-first indexing, which means that it primarily uses the mobile
          version of your site for ranking and indexing. If your site is not
          mobile-friendly, it could significantly impact your SEO rankings and
          reduce the amount of traffic you receive.
        </p>
        <p className="mt-4 text-justify">
          Engaging UI/UX design is also crucial for SEO. A website with a
          well-thought-out user interface (UI) and user experience (UX) can keep
          visitors engaged, reduce bounce rates, and increase the likelihood of
          conversions. A good UI/UX design ensures that your site is easy to
          navigate, visually appealing, and provides value to the user. This can
          lead to longer visit durations, more page views, and higher conversion
          rates, all of which can positively impact your SEO rankings. In
          addition to these technical aspects, content is king when it comes to
          SEO. High-quality, relevant, and engaging content can attract more
          visitors to your site, keep them engaged, and encourage them to share
          your content with others. This can lead to more backlinks, which are a
          crucial factor in SEO rankings. Backlinks are links from other
          websites that point to your site, and they signal to search engines
          that your site is a credible and authoritative source of information.
          The more high-quality backlinks you have, the higher your site is
          likely to rank on SERPs. Creating content that is optimized for SEO
          involves using relevant keywords, providing valuable information, and
          ensuring that your content is easy to read and understand. It is also
          important to regularly update your content to keep it fresh and
          relevant. This not only helps with SEO but also keeps your audience
          engaged and coming back for more. In conclusion, boosting your
          rankings, driving traffic, and getting results through SEO requires a
          comprehensive approach that includes optimizing your website for
          speed, responsiveness, and user-friendliness, ensuring that your site
          is mobile-friendly, and creating high-quality, engaging content. By
          focusing on these key areas, you can improve your SEO rankings,
          attract more visitors to your site, and ultimately achieve your
          business goals. In today’s competitive digital landscape, SEO is not
          just an option; it is a necessity for any business that wants to
          succeed online.
        </p>
      </div>
    ),
    images: "/assets/blog/seo.jpg",
    altText: "SEO optimization process showing search rankings and analytics",
    readingTime: "7 min read",
    tags: [
      "search engine optimization",
      "technical SEO",
      "content marketing",
      "mobile SEO",
    ],
    schemaType: "HowTo",
  },
  {
    id: 4,
    headline: "",
    type: "cloud-solutions",
    slug: "",
    metaTitle:
      "Enterprise Cloud Solutions for Scalability, Security & Future Growth",
    metaDesc:
      "",
    publishedDate: "2025-01-15",
    author: "Cloud Architecture Team",
    desc: () => (
      <div className="flex flex-col">
        <p className="mt-4 text-justify">
          
        </p>
        <p className="mt-4 text-justify">
          
        </p>
        <p className="mt-4 text-justify">
          
        </p>
        <p className="mt-4 text-justify">
         
        </p>
        <p className="mt-4 text-justify">
          
        </p>
        <p className="mt-4 text-justify">
        
        </p>
      </div>
    ),
    images: "/assets/blog/ux.jpg",
    altText:
      "Cloud computing infrastructure with servers and network connections",
    readingTime: "8 min read",
    tags: [
      "",
      "",
      "",
      "",
    ],
    schemaType: "TechArticle",
  },
 
];

export const terms = [
  "Privacy Policy",
  "Payment Terms",
  "Intellectual Property",
  "Client Responsibilities",
  "Warranty & Support",
  "Refund Policy",
];
