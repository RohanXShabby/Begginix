import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { portfolioItems, PortfolioCategory } from "@/data/portfolio-items";
import { filterPortfolioItems } from "@/lib/portfolio-utils";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";
import { Helmet } from "react-helmet-async";

const categories: (PortfolioCategory | 'All')[] = ['All', 'Development', 'Branding', 'Creative Design', 'UI/UX', 'Marketing', 'SEO'];

export const Projects = () => {
    const [searchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | 'All'>('All');

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam as PortfolioCategory)) {
            setSelectedCategory(categoryParam as PortfolioCategory);
        }
    }, [searchParams]);

    const filteredItems = filterPortfolioItems(portfolioItems, selectedCategory);

    return (
        <>
            <Helmet>
                <title>Projects - Portfolio | Beginnix</title>
                <meta name="description" content="Explore our diverse portfolio of projects spanning branding, design, UI/UX, and development. Discover our creative journey and innovative solutions." />
                <meta property="og:title" content="Projects - Portfolio | Beginnix" />
                <meta property="og:description" content="Explore our diverse portfolio of projects spanning branding, design, UI/UX, and development." />
                <meta property="og:type" content="website" />
            </Helmet>
            <motion.div
                className="min-h-screen bg-background pt-24"
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                animate="show"
            >
                <div className="container mx-auto px-4 py-20">
                    {/* Page Header */}
                    <div className="text-center mb-20">
                        <motion.h1 className="text-5xl md:text-8xl font-semibold mb-6 font-barlow" variants={fadeInUp}>
                            Our Projects
                        </motion.h1>
                        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeIn}>
                            Discover our creative journey through a diverse collection of projects spanning branding,
                            design, UI/UX, and development. Each project represents our commitment to excellence and innovation.
                        </motion.p>
                    </div>

                    {/* Category Filter */}
                    <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={staggerContainer(0.06)}>
                        {categories.map((category) => (
                            <motion.div key={category} variants={fadeInUp}>
                                <Button
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    className={cn(
                                        "transition-all",
                                        selectedCategory === category && "bg-crimson text-white hover:bg-crimson/90"
                                    )}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Projects Count */}
                    <motion.div className="text-center mb-8" variants={fadeInUp}>
                        <p className="text-muted-foreground">
                            Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
                            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        </p>
                    </motion.div>

                    {/* Portfolio Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer(0.08, 0.2)}
                    >
                        {filteredItems.map((item) => (
                            <motion.div key={item.id} variants={fadeInUp}>
                                <PortfolioCard item={item} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <motion.div className="text-center py-20" variants={fadeInUp}>
                            <div className="max-w-md mx-auto">
                                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-muted-foreground"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                                <p className="text-muted-foreground mb-6">
                                    No projects found in the {selectedCategory.toLowerCase()} category.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => setSelectedCategory('All')}
                                >
                                    View All Projects
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* Call to Action */}
                    {filteredItems.length > 0 && (
                        <motion.div className="text-center mt-20" variants={fadeInUp}>
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                                <p className="text-muted-foreground mb-8">
                                    Let's work together to bring your vision to life. Get in touch to discuss your project requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://wa.me/918449998879?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <Button size="lg" className="bg-crimson hover:bg-crimson/90 w-full">
                                            Start a Project
                                        </Button>
                                    </a>
                                    <a href="/#services" className="w-full sm:w-auto">
                                        <Button size="lg" variant="outline" className="w-full">
                                            View Our Services
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </>
    );
};
