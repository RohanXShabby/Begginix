import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

export const About = () => {
    const values = [
        {
            icon: Target,
            title: "Mission-Driven",
            description: "We're committed to delivering exceptional results that exceed expectations and drive real business growth."
        },
        {
            icon: Users,
            title: "Client-Focused",
            description: "Your success is our success. We prioritize understanding your needs and delivering tailored solutions."
        },
        {
            icon: Award,
            title: "Quality Excellence",
            description: "We maintain the highest standards in everything we do, from initial concept to final delivery."
        },
        {
            icon: Heart,
            title: "Passionate",
            description: "We love what we do and bring that passion to every project, ensuring creative and innovative solutions."
        }
    ];

    const stats = [
        { number: "50+", label: "Projects Completed" },
        { number: "25+", label: "Happy Clients" },
        { number: "3+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" }
    ];

    return (
        <>
            <Helmet>
                <title>About Us - Beginnix</title>
                <meta name="description" content="Learn about Beginnix, a creative digital agency specializing in branding, design, development, and marketing solutions. Discover our mission, values, and team." />
                <meta property="og:title" content="About Us - Beginnix" />
                <meta property="og:description" content="Learn about Beginnix, a creative digital agency specializing in branding, design, development, and marketing solutions." />
                <meta property="og:type" content="website" />
            </Helmet>
            <motion.div
                className="min-h-screen bg-background pt-24"
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                animate="show"
            >
                <div className="container mx-auto px-4 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.h1 className="text-5xl md:text-8xl font-semibold mb-6 font-barlow" variants={fadeInUp}>
                            About Beginnix
                        </motion.h1>
                        <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={fadeIn}>
                            We are a creative digital agency passionate about bringing ideas to life through innovative design,
                            strategic thinking, and cutting-edge technology.
                        </motion.p>
                    </div>

                    {/* Story Section */}
                    <motion.div className="mb-20" variants={fadeInUp}>
                        <Card className="p-8 md:p-12">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                                <div className="prose prose-gray max-w-none text-center">
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        Founded with a vision to bridge the gap between creativity and technology, Beginnix has grown
                                        from a small team of passionate designers to a full-service digital agency. We believe that
                                        great design is not just about aesthetics—it's about solving problems, telling stories, and
                                        creating meaningful connections.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Our journey began with a simple mission: to help businesses of all sizes achieve their goals
                                        through innovative digital solutions. Today, we continue to push boundaries and explore new
                                        possibilities in the ever-evolving digital landscape.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div className="mb-20" variants={fadeInUp}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div key={index} className="text-center" variants={fadeInUp}>
                                    <div className="text-4xl md:text-5xl font-bold text-crimson mb-2">{stat.number}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div className="mb-20" variants={fadeInUp}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                These core values guide everything we do and shape how we work with our clients and each other.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div key={index} variants={fadeInUp}>
                                    <Card className="p-6 text-center h-full">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-crimson/10 mb-4">
                                            <value.icon className="w-8 h-8 text-crimson" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm">{value.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div className="mb-20" variants={fadeInUp}>
                        <Card className="p-8 md:p-12 bg-gradient-to-r from-crimson/5 to-crimson/10 border-crimson/20">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                                    and create lasting impact. We strive to be the trusted partner that helps our clients navigate the
                                    digital landscape with confidence and achieve their most ambitious goals.
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Team Section */}
                    <motion.div className="mb-20" variants={fadeInUp}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We're a diverse group of creative professionals, developers, and strategists who are passionate about
                                delivering exceptional results.
                            </p>
                        </div>
                        <Card className="p-8 md:p-12">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-crimson/20 to-crimson/40 rounded-full flex items-center justify-center">
                                    <Users className="w-16 h-16 text-crimson" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Rohan Bisht</h3>
                                <p className="text-crimson font-medium mb-4">Founder & Creative Director</p>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    With over 3 years of experience in digital design and development, Rohan leads our team with a
                                    vision for creating meaningful digital experiences. His expertise spans across branding, UI/UX design,
                                    and full-stack development.
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div className="text-center" variants={fadeInUp}>
                        <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help bring your vision to life and achieve your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:rohan20ctbisht@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-3 bg-crimson text-white rounded-lg hover:bg-crimson/90 transition-colors"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                            >
                                View Our Work
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};
