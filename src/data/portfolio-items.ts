export type PortfolioCategory = 'Branding' | 'Creative Design' | 'UI/UX' | 'Development' | 'Marketing' | 'SEO';

export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    categories: PortfolioCategory[];
    imageUrl: string;
    tags: string[];
    link?: string;
    client?: string;
    year: number;
    longDescription?: string;
    challenges?: string[];
    solutions?: string[];
    technologies?: string[];
    duration?: string;
    teamSize?: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'brand-1',
        title: 'BeBond Beauty Website & Brand Identity',
        description: 'Website design and brand identity for BeBond Beauty, a premium skincare brand built on WordPress as per client budget and requirements.',
        categories: ['Branding', 'Development'],
        imageUrl: 'https://unblast.com/wp-content/uploads/2019/09/Modern-Branding-Identity-Part-04-1.jpg',
        tags: ['Brand Identity', 'UI/UX Design', 'WordPress Development', 'Responsive Design'],
        link: 'https://bebondbeauty.com/',
        client: 'BeBond Beauty',
        year: 2025,
        longDescription: 'BeBond Beauty collaborated with Beginnix Studio to establish a strong digital and brand presence in the competitive skincare industry. The project involved creating a premium yet affordable brand experience, including a modern logo, visual system, and a WordPress-powered website optimized for performance and SEO.',
        challenges: [
            'Balancing a premium brand feel with a limited client budget',
            'Maintaining performance and design consistency on WordPress CMS',
            'Optimizing the website for mobile and e-commerce scalability'
        ],
        solutions: [
            'Designed an elegant, lightweight WordPress theme tailored to the brand',
            'Implemented SEO and speed optimization for better organic reach',
            'Developed a scalable content structure supporting future e-commerce expansion'
        ],
        technologies: ['WordPress', 'Elementor', 'Figma', 'Adobe Illustrator', 'Yoast SEO'],
        duration: '5 weeks',
        teamSize: '2 designers and 1 developer'
    }
    ,
    {
        id: 'design-1',
        title: 'Creative Campaign',
        description: 'Social media campaign design with a focus on storytelling through visual elements.',
        categories: ['Creative Design', 'Marketing'],
        imageUrl: 'https://myoperator.com/blog/wp-content/uploads/2018/09/creative-ad-campaigns.png',
        tags: ['Social Media', 'Campaign', 'Digital Art'],
        client: 'Fashion Forward',
        year: 2025,
        longDescription: 'We developed a comprehensive social media campaign for Fashion Forward, a sustainable fashion brand. The campaign focused on storytelling through visual elements, creating an emotional connection with the target audience while promoting sustainable fashion practices.',
        challenges: ['Creating content that stands out in the crowded fashion social media space', 'Balancing promotional content with educational messaging about sustainability', 'Maintaining brand consistency across multiple social media platforms'],
        solutions: ['Developed a unique visual storytelling approach using user-generated content', 'Created a content calendar with themed weeks focusing on different aspects of sustainability', 'Designed platform-specific content adaptations while maintaining brand consistency'],
        technologies: ['Adobe Creative Suite', 'Canva Pro', 'Figma', 'Social Media Management Tools'],
        duration: '8 weeks',
        teamSize: '4 designers + 2 content creators'
    },
    {
        id: 'uiux-1',
        title: 'Finance App Design',
        description: 'Modern and intuitive mobile banking application design with focus on user experience.',
        categories: ['UI/UX'],
        imageUrl: 'https://img.freepik.com/free-vector/payment-gateway-ui-mobile-app-design_47987-1965.jpg?semt=ais_incoming&w=740&q=80',
        tags: ['Mobile App', 'FinTech', 'User Experience'],
        client: 'Digital Banking Co.',
        year: 2025,
        longDescription: 'We designed a comprehensive mobile banking application for Digital Banking Co., focusing on creating an intuitive and secure user experience. The app needed to handle complex financial transactions while maintaining simplicity and accessibility for users of all technical backgrounds.',
        challenges: ['Balancing security requirements with user-friendly design', 'Creating intuitive navigation for complex financial features', 'Ensuring accessibility compliance for users with disabilities', 'Designing for multiple device sizes and orientations'],
        solutions: ['Implemented progressive disclosure to simplify complex features', 'Created a comprehensive design system with consistent patterns', 'Conducted extensive user testing with diverse user groups', 'Developed responsive layouts that work across all device sizes'],
        technologies: ['Figma', 'Principle', 'Adobe XD', 'User Testing Tools', 'Accessibility Testing Tools'],
        duration: '12 weeks',
        teamSize: '5 UX designers + 2 UI designers + 1 researcher'
    },
    {
        id: 'dev-1',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with modern tech stack and seamless user experience.',
        categories: ['Development'],
        imageUrl: 'https://cdn.dribbble.com/userupload/13694199/file/original-c53a0ae58fc72dcff807eb1cf785a6b9.png?resize=752x&vertical=center',
        tags: ['React', 'Node.js', 'E-commerce'],
        link: 'https://example.com',
        year: 2025,
        longDescription: 'We built a comprehensive e-commerce platform from scratch, featuring a modern React frontend, Node.js backend, and integrated payment processing. The platform handles thousands of products, supports multiple payment methods, and provides real-time inventory management.',
        challenges: ['Handling high traffic and concurrent users', 'Integrating multiple payment gateways', 'Managing complex product variations and inventory', 'Ensuring security for financial transactions'],
        solutions: ['Implemented microservices architecture for scalability', 'Used Redis for caching and session management', 'Integrated Stripe and PayPal for payment processing', 'Implemented comprehensive security measures and SSL encryption'],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe API', 'AWS', 'Docker'],
        duration: '16 weeks',
        teamSize: '6 developers + 2 DevOps engineers'
    },
    {
        id: 'uiux-3',
        title: 'Nothing — Website Redesign',
        description: 'Complete redesign of the Nothing brand website focusing on clarity, performance, and conversion. Includes responsive layouts, component library, and accessibility improvements.',
        categories: ['UI/UX'],
        imageUrl: 'https://cdn.dribbble.com/userupload/14964116/file/original-1a6b73c16aa56b706c0cea79c65e415b.png',
        tags: ['Website Redesign', 'Responsive', 'Performance', 'Accessibility'],
        client: 'Nothing',
        year: 2025,
        longDescription: 'We redesigned the Nothing brand website to improve user experience, performance, and conversion rates. The project involved creating a comprehensive design system, optimizing for mobile devices, and ensuring full accessibility compliance while maintaining the brand\'s minimalist aesthetic.',
        challenges: ['Maintaining brand consistency while improving usability', 'Optimizing performance for global audiences', 'Ensuring accessibility compliance across all pages', 'Creating a scalable component library'],
        solutions: ['Developed a comprehensive design system with reusable components', 'Implemented performance optimizations including lazy loading and image optimization', 'Conducted accessibility audits and implemented WCAG 2.1 AA compliance', 'Created responsive layouts that work seamlessly across all devices'],
        technologies: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'Web Vitals', 'Accessibility Testing Tools'],
        duration: '10 weeks',
        teamSize: '4 UX designers + 3 UI designers + 2 developers'
    },
    {
        id: 'uiux-2',
        title: 'Healthcare Dashboard',
        description: 'Interactive web dashboard for doctors and patients with real-time health analytics and appointment scheduling.',
        categories: ['UI/UX'],
        imageUrl: 'https://cdn.dribbble.com/userupload/17559487/file/original-1f21605b6c45b6c3e998eb9daa07662f.png?resize=752x&vertical=center',
        tags: ['Healthcare', 'Dashboard', 'Data Visualization'],
        client: 'MediConnect',
        year: 2025,
        longDescription: 'We designed a comprehensive healthcare dashboard for MediConnect, enabling doctors and patients to access real-time health analytics, schedule appointments, and track medical history. The dashboard needed to handle sensitive medical data while providing an intuitive user experience for users with varying technical expertise.',
        challenges: ['Ensuring HIPAA compliance for medical data handling', 'Creating intuitive data visualization for complex health metrics', 'Designing for users with varying technical expertise', 'Managing real-time data updates and notifications'],
        solutions: ['Implemented role-based access controls and data encryption', 'Created customizable dashboard layouts for different user types', 'Developed clear data visualization patterns for health metrics', 'Built notification systems for critical health alerts'],
        technologies: ['Figma', 'React', 'D3.js', 'Chart.js', 'WebSocket', 'HIPAA Compliance Tools'],
        duration: '14 weeks',
        teamSize: '3 UX designers + 2 UI designers + 4 developers + 1 compliance specialist'
    },
    {
        id: 'dev-2',
        title: 'Real Estate Platform',
        description: 'Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.',
        categories: ['Development'],
        imageUrl: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1758913158/Screenshot_2025-09-27_002814_atlozg.png',
        tags: ['Real Estate', 'React', 'Node.js', 'Virtual Tours'],
        link: 'https://realestate-demo.com',
        year: 2025,
        longDescription: 'We built a comprehensive real estate platform that allows users to browse properties, take virtual tours, calculate mortgages, and connect with real estate agents. The platform needed to handle high-resolution images and provide smooth virtual tour experiences.',
        challenges: ['Optimizing performance for high-resolution property images', 'Implementing smooth virtual tour functionality', 'Creating an intuitive property search and filter system', 'Integrating with multiple real estate APIs'],
        solutions: ['Implemented image optimization and lazy loading', 'Used WebGL for smooth virtual tour experiences', 'Created advanced search and filtering capabilities', 'Built a responsive design that works on all devices'],
        technologies: ['React', 'Node.js', 'MongoDB', 'WebGL', 'Stripe API', 'AWS S3', 'Docker'],
        duration: '20 weeks',
        teamSize: '8 developers + 2 DevOps engineers + 1 UI/UX designer'
    },
    {
        id: 'design-3',
        title: 'Travel Agency Campaign',
        description: 'Inspiring travel campaign featuring stunning destinations and adventure experiences.',
        categories: ['Creative Design', 'Marketing'],
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5e8930b8aa9e106289a234b6/1586269637346-U5NEM505IY3PK2MIUU4U/ghfhfhgfgh-02.png',
        tags: ['Travel', 'Campaign', 'Photography', 'Adventure'],
        client: 'Wanderlust Travel',
        year: 2025,
        longDescription: 'We developed an inspiring travel campaign for Wanderlust Travel that showcases exotic destinations and adventure experiences. The campaign needed to evoke wanderlust and encourage travel bookings while highlighting the agency\'s unique offerings.',
        challenges: ['Creating content that inspires travel during uncertain times', 'Showcasing multiple destinations while maintaining brand consistency', 'Balancing aspirational content with practical travel information', 'Creating content that works across multiple marketing channels'],
        solutions: ['Developed a vibrant, adventure-focused visual style', 'Created a content series featuring different travel themes', 'Designed platform-specific content for social media and print', 'Implemented a storytelling approach that connects with travelers'],
        technologies: ['Adobe Creative Suite', 'Canva Pro', 'Lightroom', 'Social Media Management Tools'],
        duration: '10 weeks',
        teamSize: '4 designers + 2 photographers + 2 content creators'
    },
    {
        id: 'dev-3',
        title: 'Learning Management System',
        description: 'Comprehensive LMS platform with course creation, student tracking, and interactive learning tools.',
        categories: ['Development'],
        imageUrl: 'https://multipurposethemes.com/wp-content/uploads/2024/11/Education-LMS-Dashboard-Admin-Template.jpg',
        tags: ['Education', 'LMS', 'React', 'Node.js'],
        link: 'https://lms-demo.com',
        year: 2025,
        longDescription: 'We built a comprehensive Learning Management System for educational institutions that allows teachers to create courses, track student progress, and facilitate interactive learning experiences. The platform needed to support various content types and assessment methods.',
        challenges: ['Creating an intuitive course creation interface', 'Implementing robust student progress tracking', 'Supporting various content types and media formats', 'Ensuring scalability for large numbers of users'],
        solutions: ['Developed a drag-and-drop course builder interface', 'Implemented comprehensive analytics and reporting features', 'Created a flexible content management system', 'Built a responsive design that works on all devices'],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Video Streaming', 'Docker'],
        duration: '24 weeks',
        teamSize: '10 developers + 3 DevOps engineers + 2 UI/UX designers'
    },
    {
        id: 'brand-4',
        title: 'Restaurant Chain Branding',
        description: 'Warm and inviting brand identity for a family-friendly restaurant chain with consistent visual language.',
        categories: ['Branding'],
        imageUrl: 'https://bimpos.com/sites/default/files/images/posts/57213ff7-18c2-456f-afcf-eeb5bd79810c.jpeg',
        tags: ['Restaurant', 'Family Branding', 'Food & Beverage', 'Chain Restaurant'],
        client: 'Family Feast Restaurants',
        year: 2025,
        longDescription: 'We created a warm and inviting brand identity for Family Feast Restaurants, a chain of family-friendly restaurants. The brand needed to convey comfort, quality, and family values while maintaining consistency across multiple locations.',
        challenges: ['Creating a brand that appeals to all age groups', 'Maintaining consistency across multiple restaurant locations', 'Balancing warmth with professionalism', 'Developing a system that works for both digital and physical applications'],
        solutions: ['Developed a warm color palette with earth tones and accent colors', 'Created a friendly, approachable logo system', 'Established comprehensive brand guidelines for all touchpoints', 'Designed signage and interior branding elements'],
        technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Brand Guidelines Documentation'],
        duration: '9 weeks',
        teamSize: '4 designers + 1 brand strategist + 1 interior designer'
    },
    {
        id: 'marketing-2',
        title: 'E-commerce Holiday Marketing Campaign',
        description: 'Multi-channel holiday marketing campaign that generated $2.5M in revenue and 150% increase in customer engagement.',
        categories: ['Marketing'],
        imageUrl: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2023-10/PN_DFCBU_2023_OCT_SHOPPERS%20STOP%20LIMITED_SHOPPERS%20STOP_12029280_SIZE%201X1_%20DIWALI%20FESTIVAL_3-07.jpg',
        tags: ['E-commerce', 'Holiday Campaign', 'Email Marketing', 'Social Media'],
        client: 'StyleHub Fashion',
        year: 2025,
        longDescription: 'We created and executed a comprehensive holiday marketing campaign for StyleHub Fashion, an online fashion retailer. The campaign spanned Black Friday through New Year and included email marketing, social media advertising, influencer partnerships, and retargeting campaigns.',
        challenges: ['Standing out during the competitive holiday season', 'Managing inventory and demand forecasting', 'Creating urgency without appearing desperate', 'Coordinating multiple marketing channels'],
        solutions: ['Developed a phased campaign strategy with clear milestones', 'Created compelling holiday-themed content and visuals', 'Implemented dynamic retargeting based on user behavior', 'Established influencer partnerships for authentic promotion'],
        technologies: ['Shopify', 'Klaviyo', 'Facebook Ads', 'Instagram Ads', 'Google Shopping', 'TikTok Ads', 'Influencer Platforms'],
        duration: '8 weeks',
        teamSize: '4 marketing specialists + 3 designers + 2 content creators + 1 analyst'
    },
    {
        id: 'marketing-3',
        title: 'B2B Lead Generation Campaign',
        description: 'Strategic B2B marketing campaign that generated 500+ qualified leads and 25% increase in sales pipeline.',
        categories: ['Marketing'],
        imageUrl: 'https://www.slideteam.net/media/catalog/product/cache/1280x720/l/e/lead_generation_strategies_to_improve_analyzing_lead_generation_survey_results_sa_ss_slide01.jpg',
        tags: ['B2B Marketing', 'Lead Generation', 'Account-Based Marketing', 'Sales Enablement'],
        client: 'Enterprise Solutions Inc.',
        year: 2025,
        longDescription: 'We designed and implemented a comprehensive B2B lead generation campaign for Enterprise Solutions Inc., a provider of enterprise software solutions. The campaign focused on identifying and nurturing high-value prospects through targeted content, personalized outreach, and account-based marketing strategies.',
        challenges: ['Identifying and reaching decision-makers in large enterprises', 'Creating content that addresses complex business challenges', 'Nurturing long sales cycles', 'Measuring ROI on long-term campaigns'],
        solutions: ['Developed buyer personas and journey mapping', 'Created industry-specific content and case studies', 'Implemented account-based marketing with personalized outreach', 'Established lead scoring and nurturing workflows'],
        technologies: ['Salesforce', 'Marketo', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Calendly', 'SalesLoft', 'Google Analytics'],
        duration: '16 weeks',
        teamSize: '5 marketing specialists + 2 sales enablement experts + 1 designer + 1 analyst'
    },
    {
        id: 'seo-1',
        title: 'Local SEO Optimization for Restaurant Chain',
        description: 'Comprehensive local SEO strategy that increased local search visibility by 250% and foot traffic by 40%.',
        categories: ['SEO'],
        imageUrl: 'https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F1MEC1Kc2RFOGvh79IM5WIc%2F21cb143513d1cc92a717df20120bd79b%2FSEO-Dashboard-Template-Example.png&w=3840&q=75',
        tags: ['Local SEO', 'Google My Business', 'Restaurant SEO', 'Local Search'],
        client: 'Metro Bistro Chain',
        year: 2025,
        longDescription: 'We implemented a comprehensive local SEO strategy for Metro Bistro Chain, a restaurant chain with 15 locations across the city. The strategy focused on optimizing Google My Business profiles, local citations, and location-specific content to improve visibility in local search results.',
        challenges: ['Managing SEO for multiple locations', 'Competing with established local restaurants', 'Maintaining consistent NAP (Name, Address, Phone) information', 'Generating location-specific content'],
        solutions: ['Optimized Google My Business profiles for all locations', 'Built local citations and directory listings', 'Created location-specific landing pages with local keywords', 'Implemented local schema markup and structured data'],
        technologies: ['Google My Business', 'Google Search Console', 'Google Analytics', 'BrightLocal', 'Moz Local', 'Schema Markup', 'Local Citation Tools'],
        duration: '10 weeks',
        teamSize: '2 SEO specialists + 1 content creator + 1 local marketing expert'
    },
    {
        id: 'seo-2',
        title: 'E-commerce SEO Optimization',
        description: 'Technical and content SEO optimization that increased organic traffic by 180% and improved search rankings for 500+ product pages.',
        categories: ['SEO'],
        imageUrl: 'https://images.klipfolio.com/website/public/0d392ef2-6cc5-47b3-aa23-12d00f82c959/dashboard-examples-ecommerce_0.png',
        tags: ['E-commerce SEO', 'Technical SEO', 'Product SEO', 'Search Rankings'],
        client: 'TechGear Online',
        year: 2025,
        longDescription: 'We conducted a comprehensive SEO audit and optimization for TechGear Online, an e-commerce store selling electronics and tech accessories. The project involved technical SEO improvements, content optimization, and product page optimization to improve search visibility and organic traffic.',
        challenges: ['Optimizing thousands of product pages', 'Improving site speed and technical performance', 'Creating unique content for similar products', 'Competing with large e-commerce platforms'],
        solutions: ['Conducted comprehensive technical SEO audit', 'Optimized product pages with unique descriptions and keywords', 'Improved site architecture and internal linking', 'Implemented structured data and rich snippets'],
        technologies: ['Google Search Console', 'Google Analytics', 'Screaming Frog', 'Ahrefs', 'SEMrush', 'PageSpeed Insights', 'Schema Markup'],
        duration: '14 weeks',
        teamSize: '3 SEO specialists + 2 content creators + 1 technical SEO expert'
    },
    {
        id: 'seo-3',
        title: 'Content Marketing & SEO Strategy',
        description: 'Integrated content marketing and SEO strategy that increased organic traffic by 220% and generated 300+ high-quality backlinks.',
        categories: ['SEO', 'Marketing'],
        imageUrl: 'https://landingi.com/wp-content/uploads/2024/09/airbnb-news-optimized.webp',
        tags: ['Content Marketing', 'SEO Strategy', 'Link Building', 'Organic Traffic'],
        client: 'HealthTech Innovations',
        year: 2025,
        longDescription: 'We developed and executed a comprehensive content marketing and SEO strategy for HealthTech Innovations, a healthcare technology company. The strategy focused on creating high-quality, SEO-optimized content that would attract organic traffic and establish the company as a thought leader in the healthcare technology space.',
        challenges: ['Creating content that complies with healthcare regulations', 'Competing with established medical websites', 'Building authority in a highly regulated industry', 'Generating quality backlinks from reputable sources'],
        solutions: ['Developed a content calendar with healthcare-focused topics', 'Created comprehensive, research-backed articles and guides', 'Implemented link building strategies with healthcare publications', 'Optimized content for featured snippets and voice search'],
        technologies: ['WordPress', 'Yoast SEO', 'Google Search Console', 'Ahrefs', 'BuzzSumo', 'HARO', 'Content Management Systems'],
        duration: '20 weeks',
        teamSize: '4 content creators + 2 SEO specialists + 1 healthcare industry expert + 1 designer'
    },
    {
        id: 'marketing-4',
        title: 'Social Media Marketing Campaign',
        description: 'Viral social media campaign that reached 2M+ people and increased brand awareness by 400% across multiple platforms.',
        categories: ['Marketing'],
        imageUrl: 'https://aadharshila.com/wp-content/uploads/2022/05/Best-Social-Media-Marketing-Campaign-Ideas-scaled-1-1200x800.webp',
        tags: ['Social Media', 'Viral Marketing', 'Brand Awareness', 'Multi-Platform'],
        client: 'EcoFriendly Products',
        year: 2025,
        longDescription: 'We created and executed a viral social media marketing campaign for EcoFriendly Products, a sustainable lifestyle brand. The campaign focused on environmental awareness and sustainability, using engaging content, influencer partnerships, and user-generated content to create a viral effect across multiple social media platforms.',
        challenges: ['Creating content that resonates with environmentally conscious audiences', 'Managing campaigns across multiple social media platforms', 'Ensuring brand message consistency', 'Measuring the impact of viral content'],
        solutions: ['Developed a cohesive social media strategy with clear messaging', 'Created shareable content that encouraged user participation', 'Partnered with environmental influencers and activists', 'Implemented tracking and analytics for viral content'],
        technologies: ['Facebook Business Manager', 'Instagram Creator Studio', 'TikTok for Business', 'Twitter Ads', 'LinkedIn Campaign Manager', 'Hootsuite', 'Sprout Social'],
        duration: '12 weeks',
        teamSize: '3 social media specialists + 2 content creators + 1 influencer manager + 1 analyst'
    }
];