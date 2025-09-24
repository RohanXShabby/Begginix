import { PortfolioItem } from "@/data/portfolio-items";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { hoverLift, tapPress, fadeInUp } from "@/lib/motion";

interface PortfolioCardProps {
    item: PortfolioItem;
    className?: string;
}

export const PortfolioCard = ({ item, className }: PortfolioCardProps) => {
    return (
        <motion.div variants={fadeInUp} initial={false} whileHover="hover" whileTap="tap">
            <Card className={cn("group border hover:border-crimson overflow-hidden cursor-pointer transition-all duration-300 ", className)}>
                <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex flex-col justify-end h-full p-6 text-white">
                            <span className="text-crimson font-semibold mb-2">{item.category}</span>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-muted rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};