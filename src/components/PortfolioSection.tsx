import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioItems, PortfolioCategory } from "@/data/portfolio-items";
import { filterPortfolioItems } from "@/lib/portfolio-utils";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";

const categories: (PortfolioCategory | 'All')[] = ['All', 'Branding', 'Creative Design', 'UI/UX', 'Development', 'Marketing', 'SEO'];

export const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | 'All'>('All');

    const filteredItems = filterPortfolioItems(portfolioItems, selectedCategory);

    return (
        <motion.section
            className="py-20 bg-background relative overflow-hidden"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container relative mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2 className="text-5xl md:text-8xl font-semibold mb-6 font-barlow" variants={fadeInUp}>
                        Our Portfolio
                    </motion.h2>
                    <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeIn}>
                        Discover our creative journey through a diverse collection of projects spanning branding,
                        design, UI/UX, and development.
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

                {/* Portfolio Grid */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer(0.08, 0.2)}>
                    {filteredItems.slice(0, 6).map((item) => (
                        <motion.div key={item.id} variants={fadeInUp}>
                            <PortfolioCard item={item} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                {filteredItems.length > 6 && (
                    <motion.div className="text-center mt-12" variants={fadeInUp}>
                        <Link to="/projects">
                            <Button size="lg" variant="outline" className="bg-crimson text-white hover:bg-crimson/90 border-crimson">
                                View All Projects
                            </Button>
                        </Link>
                    </motion.div>
                )}

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </motion.section>
    );
};