import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

import { FiPenTool, FiLayout, FiCamera, FiFilm, FiBriefcase } from "react-icons/fi";
import { IoMegaphoneOutline } from "react-icons/io5";

const services = [
  {
    title: "CREATIVE DESIGN",
    description: "Innovative visual solutions that capture your brand essence",
    icon: FiPenTool
  },
  {
    title: "UI/UX",
    description: "User-centered design for exceptional digital experiences",
    icon: FiLayout
  },
  {
    title: "MARKETING",
    description: "Strategic campaigns that drive engagement and growth",
    icon: IoMegaphoneOutline
  },
  {
    title: "MOTION",
    description: "Dynamic animations that bring your content to life",
    icon: FiCamera
  },
  {
    title: "ANIMATION",
    description: "Compelling visual storytelling through motion graphics",
    icon: FiFilm
  },
  {
    title: "BRANDING",
    description: "Complete brand identity solutions for lasting impact",
    icon: FiBriefcase
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