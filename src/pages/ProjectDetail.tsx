import { useParams, Link } from "react-router-dom";
import { portfolioItems } from "@/data/portfolio-items";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

export const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const project = portfolioItems.find(item => item.id === id);

    if (!project) {
        return (
            <>
                <Helmet>
                    <title>Project Not Found - Portfolio | Beginnix</title>
                    <meta name="description" content="The requested project could not be found." />
                </Helmet>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
                        <Link to="/">
                            <Button>Back to Home</Button>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{project.title} - Portfolio | Beginnix</title>
                <meta name="description" content={project.description} />
                <meta property="og:title" content={`${project.title} - Portfolio | Beginnix`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content={project.imageUrl} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${project.title} - Portfolio | Beginnix`} />
                <meta name="twitter:description" content={project.description} />
                <meta name="twitter:image" content={project.imageUrl} />
            </Helmet>
            <motion.div
                className="min-h-screen bg-background"
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                animate="show"
            >
                <div className="container mx-auto px-4 py-20">
                    {/* Back Button */}
                    <motion.div variants={fadeInUp} className="mb-8">
                        <Link to="/">
                            <Button variant="outline" className="flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Portfolio
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Project Header */}
                    <motion.div variants={fadeInUp} className="mb-12">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Project Image */}
                            <div className="lg:w-2/3">
                                <Card className="overflow-hidden">
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </Card>
                            </div>

                            {/* Project Info */}
                            <div className="lg:w-1/3">
                                <Card className="p-6 h-fit">
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {project.categories.map((category) => (
                                                    <span key={category} className="text-crimson font-semibold text-sm uppercase tracking-wide">
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                            <h1 className="text-3xl font-bold mt-2 mb-4">{project.title}</h1>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Project Details */}
                                        <div className="space-y-4">
                                            {project.client && (
                                                <div className="flex items-center gap-3">
                                                    <User className="w-5 h-5 text-muted-foreground" />
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Client</p>
                                                        <p className="font-semibold">{project.client}</p>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-muted-foreground" />
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Year</p>
                                                    <p className="font-semibold">{project.year}</p>
                                                </div>
                                            </div>

                                            {project.link && (
                                                <div className="flex items-center gap-3">
                                                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">Live Project</p>
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="font-semibold text-crimson hover:underline"
                                                        >
                                                            View Project
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Tags */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Tag className="w-4 h-4 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">Technologies & Skills</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Description */}
                    <motion.div variants={fadeInUp} className="mb-12">
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.longDescription || project.description}
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Project Details */}
                    {(project.challenges || project.solutions || project.technologies || project.duration || project.teamSize) && (
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Challenges */}
                                {project.challenges && (
                                    <Card className="p-6">
                                        <h3 className="text-xl font-bold mb-4 text-crimson">Challenges</h3>
                                        <ul className="space-y-3">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="w-2 h-2 bg-crimson rounded-full mt-2 flex-shrink-0"></span>
                                                    <span className="text-muted-foreground">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                )}

                                {/* Solutions */}
                                {project.solutions && (
                                    <Card className="p-6">
                                        <h3 className="text-xl font-bold mb-4 text-crimson">Solutions</h3>
                                        <ul className="space-y-3">
                                            {project.solutions.map((solution, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                                    <span className="text-muted-foreground">{solution}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                )}

                                {/* Technologies */}
                                {project.technologies && (
                                    <Card className="p-6">
                                        <h3 className="text-xl font-bold mb-4 text-crimson">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Card>
                                )}

                                {/* Project Info */}
                                <Card className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-crimson">Project Details</h3>
                                    <div className="space-y-4">
                                        {project.duration && (
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Duration:</span>
                                                <span className="font-semibold">{project.duration}</span>
                                            </div>
                                        )}
                                        {project.teamSize && (
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Team Size:</span>
                                                <span className="font-semibold">{project.teamSize}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Categories:</span>
                                            <div className="flex flex-wrap gap-1 justify-end">
                                                {project.categories.map((category) => (
                                                    <span key={category} className="font-semibold text-sm">
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Year:</span>
                                            <span className="font-semibold">{project.year}</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    )}

                    {/* Related Projects */}
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioItems
                                .filter(item => item.id !== project.id && item.categories.some(cat => project.categories.includes(cat)))
                                .slice(0, 3)
                                .map((relatedProject) => (
                                    <Link key={relatedProject.id} to={`/project/${relatedProject.id}`}>
                                        <Card className="group border hover:border-crimson overflow-hidden cursor-pointer transition-all duration-300">
                                            <div className="aspect-[16/9] overflow-hidden relative">
                                                <img
                                                    src={relatedProject.imageUrl}
                                                    alt={relatedProject.title}
                                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="flex flex-col justify-end h-full p-4 text-white">
                                                        <div className="flex flex-wrap gap-1 mb-1">
                                                            {relatedProject.categories.map((category) => (
                                                                <span key={category} className="text-crimson font-semibold text-xs">
                                                                    {category}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <h3 className="text-lg font-semibold mb-1">{relatedProject.title}</h3>
                                                        <p className="text-xs text-gray-200 line-clamp-2">{relatedProject.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="font-semibold">{relatedProject.title}</h3>
                                                    <span className="text-sm text-muted-foreground">{relatedProject.year}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {relatedProject.tags.slice(0, 2).map((tag) => (
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
                                    </Link>
                                ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};
