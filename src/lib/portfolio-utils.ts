import { PortfolioCategory, PortfolioItem } from '@/data/portfolio-items';

export const filterPortfolioItems = (
    items: PortfolioItem[],
    category: PortfolioCategory | 'All'
): PortfolioItem[] => {
    if (category === 'All') return items;
    return items.filter(item => item.category === category);
};

export const getUniqueYears = (items: PortfolioItem[]): number[] => {
    const years = items.map(item => item.year);
    return [...new Set(years)].sort((a, b) => b - a);
};

export const getUniqueTags = (items: PortfolioItem[]): string[] => {
    const tags = items.flatMap(item => item.tags);
    return [...new Set(tags)].sort();
};