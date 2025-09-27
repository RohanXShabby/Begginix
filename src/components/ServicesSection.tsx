import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";
import { FiLayout, FiGlobe, FiBriefcase, FiTool,FiSearch, FiTarget, FiCamera, FiPenTool } from "react-icons/fi";
import { IoLogoWordpress, IoShareSocialOutline } from "react-icons/io5";

const services = [
  {
    title: "WEBSITE DEVELOPMENT",
    description: "Unique and interactive websites, both WordPress and custom coded",
    icon: FiGlobe
  },
  {
    title: "BRANDING",
    description: "Complete brand identity solutions for lasting impact",
    icon: FiBriefcase
  },
  {
    title: "UI/UX",
    description: "User-centered design for exceptional digital experiences",
    icon: FiLayout
  },
  {
    title: "SEO",
    description: "In-page and off-page optimization for better visibility",
    icon: FiSearch
  },
  {
    title: "MARKETING",
    description: "Performance marketing strategies to drive measurable results",
    icon: FiTarget
  },
  {
    title: "PRODUCT SHOOT",
    description: "High-quality photography to showcase your products",
    icon: FiCamera
  },
  {
    title: "CONTENT CREATION",
    description: "Creative content that resonates with your audience",
    icon: FiPenTool
  },
  {
    title: "SOCIAL MEDIA SETUP",
    description: "Professional setup and optimization of social media channels",
    icon: IoShareSocialOutline
  },
  {
    title: "MAINTENANCE & SUPPORT",
    description: "Ongoing updates, security, and technical support for your platforms",
    icon: FiTool
  }
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      className="py-16 px-6 relative overflow-hidden"
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="absolute top-0 inset-0 opacity-25">
        <div className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-1/2 w-1/3 h-1/3 z-0 bg-accent/60 blur-[200px] rounded-full " style={{ animationDelay: "1s" }} ></div>
      </div>


      <div className="relative z-50 container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 className="text-5xl md:text-8xl font-semibold mb-6 font-barlow" variants={fadeInUp}>
            Our Services
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeIn}>
            Comprehensive solutions for your digital presence
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer(0.08, 0.1)}>
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp} whileHover={{ y: -4 }} whileTap={{ scale: 0.99 }}>
              <Card
                className={cn(
                  "p-8 bg-card border-border hover:border-crimson transition-all duration-300 cursor-pointer group",
                  "hover:shadow-crimson hover:transform rounded-md"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="space-y-6">
                  <div className="text-4xl flex justify-between group-hover:animate-float">
                    <service.icon className="text-crimson" />
                    <h3 className="text-xl font-semibold tracking-wide group-hover:text-crimson transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className={cn(
                    "w-12 h-1 bg-crimson transition-all duration-400",
                    hoveredIndex === index ? "w-52" : "w-12"
                  )} />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
        {/* Floating accent elements */}
        <div className="absolute z-10 top-20 right-20 w-2 h-2 bg-crimson rounded-full animate-pulse-crimson opacity-60" />
        <div className="absolute z-10 bottom-20 left-20 w-3 h-3 bg-crimson rounded-full animate-pulse-crimson opacity-40"
          style={{ animationDelay: "1s" }} />
        <div className="absolute z-10 top-32 left-1/3 w-1.5 h-1.5 bg-crimson rounded-full animate-pulse-crimson opacity-50"
          style={{ animationDelay: "0.3s" }} />
        <div className="absolute z-10 top-1/2 left-16 w-1 h-1 bg-crimson rounded-full  opacity-70"
          style={{ animationDelay: "0.7s" }} />
        <div className="absolute z-10 top-16 right-1/3 w-2 h-2 bg-crimson rounded-full animate-pulse-crimson opacity-45"
          style={{ animationDelay: "2.2s" }} />
        <div className="absolute z-10 top-24 left-24 w-3 h-3 bg-crimson rounded-full animate-pulse-crimson opacity-30"
          style={{ animationDelay: "1.5s" }} />
        <div className="absolute z-10 bottom-16 right-16 w-1 h-1 bg-crimson rounded-full animate-pulse-crimson opacity-65"
          style={{ animationDelay: "0.4s" }} />
        <div className="absolute z-10 bottom-24 left-1/4 w-1.5 h-1.5 bg-crimson rounded-full  opacity-75"
          style={{ animationDelay: "0.1s" }} />
        <div className="absolute z-10 top-1/4 right-24 w-2.5 h-2.5 bg-crimson rounded-full animate-pulse-crimson opacity-50"
          style={{ animationDelay: "1.3s" }} />
    </motion.section>
  );
};