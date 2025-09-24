export type PortfolioCategory = 'Branding' | 'Creative Design' | 'UI/UX' | 'Development';

export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    category: PortfolioCategory;
    imageUrl: string;
    tags: string[];
    link?: string;
    client?: string;
    year: number;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'brand-1',
        title: 'Modern Brand Identity',
        description: 'Complete brand identity redesign for a tech startup, including logo, color palette, and brand guidelines.',
        category: 'Branding',
        imageUrl: 'https://unblast.com/wp-content/uploads/2019/09/Modern-Branding-Identity-Part-04-1.jpg',
        tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
        client: 'TechStart Inc.',
        year: 2025
    },
    {
        id: 'design-1',
        title: 'Creative Campaign',
        description: 'Social media campaign design with a focus on storytelling through visual elements.',
        category: 'Creative Design',
        imageUrl: 'https://myoperator.com/blog/wp-content/uploads/2018/09/creative-ad-campaigns.png',
        tags: ['Social Media', 'Campaign', 'Digital Art'],
        client: 'Fashion Forward',
        year: 2025
    },
    {
        id: 'uiux-1',
        title: 'Finance App Design',
        description: 'Modern and intuitive mobile banking application design with focus on user experience.',
        category: 'UI/UX',
        imageUrl: 'https://img.freepik.com/free-vector/payment-gateway-ui-mobile-app-design_47987-1965.jpg?semt=ais_incoming&w=740&q=80',
        tags: ['Mobile App', 'FinTech', 'User Experience'],
        client: 'Digital Banking Co.',
        year: 2025
    },
    {
        id: 'dev-1',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with modern tech stack and seamless user experience.',
        category: 'Development',
        imageUrl: 'https://cdn.dribbble.com/userupload/13694199/file/original-c53a0ae58fc72dcff807eb1cf785a6b9.png?resize=752x&vertical=center',
        tags: ['React', 'Node.js', 'E-commerce'],
        link: 'https://example.com',
        year: 2025
    },
    {
        id: 'uiux-3',
        title: 'Nothing — Website Redesign',
        description: 'Complete redesign of the Nothing brand website focusing on clarity, performance, and conversion. Includes responsive layouts, component library, and accessibility improvements.',
        category: 'UI/UX',
        imageUrl: 'https://cdn.dribbble.com/userupload/14964116/file/original-1a6b73c16aa56b706c0cea79c65e415b.png',
        tags: ['Website Redesign', 'Responsive', 'Performance', 'Accessibility'],
        client: 'Nothing',
        year: 2025
    },
    {
        id: 'uiux-2',
        title: 'Healthcare Dashboard',
        description: 'Interactive web dashboard for doctors and patients with real-time health analytics and appointment scheduling.',
        category: 'UI/UX',
        imageUrl: 'https://cdn.dribbble.com/userupload/17559487/file/original-1f21605b6c45b6c3e998eb9daa07662f.png?resize=752x&vertical=center',
        tags: ['Healthcare', 'Dashboard', 'Data Visualization'],
        client: 'MediConnect',
        year: 2025
    }
];