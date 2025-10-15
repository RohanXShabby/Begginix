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
        title: 'BeBond Beauty  Website',
        description: 'Website design and brand identity for BeBond Beauty, a premium skincare brand built on WordPress as per client budget and requirements.',
        categories: ['Branding', 'Development'],
        imageUrl: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1760466597/Thumbnail_i0sk6v.png',
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
        duration: '3 weeks',
        teamSize: '1 designers and 1 developer'
    },

    {
        "id": "design-1",
        "title": "Poster Design Contest",
        "description": "Digital creative banner design for a public awareness and citizen engagement campaign in a local Dehradun town, promoting a poster contest focused on village development.",
        "categories": [
            "Creative Design",
            "Marketing"
        ],
        "imageUrl": "https://res.cloudinary.com/drwfctvfs/image/upload/v1760467660/Into-Vission_tulvoy.png",
        "tags": [
            "Digital Banner",
            "Ad Campaign",
        ],
        "client": "Local Goverment",
        "year": 2025,
        longDescription: "We adapted the design for a local campaign by the Pradhan of a village near Dehradun. The contest is titled **'Turn Your Vision for Our Village into Art.'** The goal is to encourage local residents, especially youth, to submit posters visualizing key areas of local development, such as cleanliness, tourism potential, or water management. The visuals maintain an energetic, creative look to drive maximum community participation.",
        "challenges": [
            "Ensuring the design met official government branding and tone while remaining vibrant and appealing to a creative audience.",
            "Clearly communicating the call-to-action ('Submit Your Poster') and contest mechanics in a simple visual form.",
            "Integrating required political and official logos/portraits smoothly into a contemporary design layout."
        ],
        "solutions": [
            "Used a clean, distinct layout with a bold purple and orange color palette for universal recognition and impact.",
            "Employed illustrative elements (hands, pencil) to universally represent the act of creation, improving accessibility.",
            "Followed official government guidelines for portrait and logo placement to maintain credibility and trust.",
            "The contest hashtag #PMVISION2ART was prominently featured for maximum social media marketing reach."
        ],
        "technologies": [
            "Adobe Illustrator",
            "Photoshop",
            "Figma",
            "Canva"
        ],
        "duration": "3 days",
        "teamSize": "1 designer"
    },

    {
        id: 'uiux-1',
        title: 'Finance App Design',
        description: 'Modern and intuitive mobile banking application design with focus on user experience.',
        categories: ['UI/UX'],
        imageUrl: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1760468729/Digital_Wallet_vb4juz.png',
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
        title: 'Trendora – E-commerce',
        description: 'A modern, responsive e-commerce store built with React and Tailwind CSS, designed for a seamless shopping experience.',
        categories: ['Development'],
        imageUrl: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1760521568/Trendora_Thumbnail_ttvpwy.png',
        tags: ['React', 'Tailwind CSS', 'E-commerce'],
        link: 'https://trendora-sable.vercel.app/',
        year: 2025,
        longDescription: 'Trendora is a fully responsive e-commerce frontend built using React and Tailwind CSS. It features dynamic product listings, category-based filtering, a modern shopping cart interface, and a smooth, app-like user experience. Designed to reflect real-world e-commerce functionality and optimized for speed, accessibility, and scalability.',
        challenges: ['Building reusable and scalable UI components', 'Optimizing performance for large product lists', 'Creating a responsive layout for all screen sizes', 'Ensuring smooth state management across pages'],
        solutions: ['Used React Context API for global state management', 'Implemented lazy loading and image optimization', 'Designed mobile-first responsive layouts with Tailwind CSS', 'Built modular components for future backend integration'],
        technologies: ['React', 'Tailwind CSS', 'React Router', 'Vite', 'Framer Motion'],
        duration: '6 weeks',
        teamSize: 'Solo project'
    },

    {
        id: 'uiux-3',
        title: 'Nothing — Website Redesign',
        description: 'Complete redesign of the Nothing brand website focusing on clarity, performance, and conversion. Includes responsive layouts, component library, and accessibility improvements.',
        categories: ['UI/UX', "Development"],
        imageUrl: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1760522569/Nothing_Website_fwpgmr.png',
        tags: ['Website Redesign', 'Responsive', 'Performance', 'Accessibility'],
        link: 'https://nothing-website-redesign.vercel.app/',
        client: 'Nothing',
        year: 2025,
        longDescription: 'We redesigned the Nothing brand website to improve user experience, performance, and conversion rates. The project involved creating a comprehensive design system, optimizing for mobile devices, and ensuring full accessibility compliance while maintaining the brand\'s minimalist aesthetic.',
        challenges: ['Maintaining brand consistency while improving usability', 'Optimizing performance for global audiences', 'Ensuring accessibility compliance across all pages', 'Creating a scalable component library'],
        solutions: ['Developed a comprehensive design system with reusable components', 'Implemented performance optimizations including lazy loading and image optimization', 'Conducted accessibility audits and implemented WCAG 2.1 AA compliance', 'Created responsive layouts that work seamlessly across all devices'],
        technologies: ['Figma', 'React', 'Next.js', 'Tailwind CSS', 'Web Vitals', 'GSAP', 'Framer Motion', ' Scroll Trigger'],
        duration: '8 weeks',
        teamSize: '2 UX designers + 4 UI designers + 2 developers'
    },
    
    {
        id: 'design-3',
        title: 'Travel Agency Campaign',
        description: 'Inspiring travel campaign featuring stunning destinations and adventure experiences.',
        categories: ['Creative Design', 'Marketing'],
        imageUrl: 'https://res.cloudinary.com/drwfctvfs/image/upload/v1760522896/ghfhfhgfgh-02_xd2boc.png',
        tags: ['Travel', 'Campaign', 'Photography', 'Adventure'],
        client: 'Travels Vibe ',
        year: 2025,
        longDescription: 'We developed an inspiring travel campaign for Travels Vibe that showcases exotic destinations and adventure experiences. The campaign needed to evoke Travels Vibe and encourage travel bookings while highlighting the agency\'s unique offerings.',
        challenges: ['Creating content that inspires travel during uncertain times', 'Showcasing multiple destinations while maintaining brand consistency', 'Balancing aspirational content with practical travel information', 'Creating content that works across multiple marketing channels'],
        solutions: ['Developed a vibrant, adventure-focused visual style', 'Created a content series featuring different travel themes', 'Designed platform-specific content for social media and print', 'Implemented a storytelling approach that connects with travelers'],
        technologies: ['Adobe Creative Suite', 'Canva Pro', 'Lightroom', 'Social Media Management Tools'],
        duration: '10 weeks',
        teamSize: '1 designers + 2 photographers + 1 content creators'
    },

    {
        id: 'brand-4',
        title: 'Restaurant Chain Branding',
        description: 'Warm and inviting brand identity for a family-friendly restaurant chain with consistent visual language.',
        categories: ['Branding'],
        imageUrl: 'https://bimpos.com/sites/default/files/images/posts/57213ff7-18c2-456f-afcf-eeb5bd79810c.jpeg',
        tags: ['Restaurant', 'Family Branding', 'Food & Beverage', 'Chain Restaurant'],
        client: 'Local Family Restaurants',
        year: 2025,
        longDescription: 'We created a warm and inviting brand identity for Family Feast Restaurants, a chain of family-friendly restaurants. The brand needed to convey comfort, quality, and family values while maintaining consistency across multiple locations.',
        challenges: ['Creating a brand that appeals to all age groups', 'Maintaining consistency across multiple restaurant locations', 'Balancing warmth with professionalism', 'Developing a system that works for both digital and physical applications'],
        solutions: ['Developed a warm color palette with earth tones and accent colors', 'Created a friendly, approachable logo system', 'Established comprehensive brand guidelines for all touchpoints', 'Designed signage and interior branding elements'],
        technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Brand Guidelines Documentation'],
        duration: '9 weeks',
        teamSize: '2 designers + 1 brand strategist'
    },
    
    {
        id: 'seo-1',
        title: 'Local SEO Optimization for Restaurant Chain',
        description: 'Comprehensive local SEO strategy that increased local search visibility by 250% and foot traffic by 40%.',
        categories: ['SEO'],
        imageUrl: 'https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F1MEC1Kc2RFOGvh79IM5WIc%2F21cb143513d1cc92a717df20120bd79b%2FSEO-Dashboard-Template-Example.png&w=3840&q=75',
        tags: ['Local SEO', 'Google My Business', 'Restaurant SEO', 'Local Search'],
        client: 'Local Family Restaurants',
        year: 2025,
        longDescription: 'We implemented a comprehensive local SEO strategy for Metro Bistro Chain, a restaurant chain with 15 locations across the city. The strategy focused on optimizing Google My Business profiles, local citations, and location-specific content to improve visibility in local search results.',
        challenges: ['Managing SEO for multiple locations', 'Competing with established local restaurants', 'Maintaining consistent NAP (Name, Address, Phone) information', 'Generating location-specific content'],
        solutions: ['Optimized Google My Business profiles for all locations', 'Built local citations and directory listings', 'Created location-specific landing pages with local keywords', 'Implemented local schema markup and structured data'],
        technologies: ['Google My Business', 'Google Search Console', 'Google Analytics', 'BrightLocal', 'Moz Local', 'Schema Markup', 'Local Citation Tools'],
        duration: '10 weeks',
        teamSize: '2 SEO specialists + 1 content creator + 1 local marketing expert'
    },
];