import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useNavigate } from "react-router-dom"; // Import hook for navigation
import { 
  FiLayout, 
  FiCpu, 
  FiPenTool, 
  FiTrendingUp, 
  FiTarget, 
  FiSettings, 
  FiArrowUpRight 
} from "react-icons/fi";

const services = [
  {
    title: "DEVELOPMENT",
    description: "Custom coded websites built for speed.",
    icon: FiCpu,
    className: "md:col-span-2 md:row-span-1", 
  },
  {
    title: "BRANDING",
    description: "Identity systems that stick.",
    icon: FiPenTool,
    className: "md:col-span-1 md:row-span-1", 
  },
  {
    title: "UI/UX",
    description: "Intuitive design.",
    icon: FiLayout,
    className: "md:col-span-1 md:row-span-1", 
  },
  {
    title: "SEO",
    description: "Dominate rankings.",
    icon: FiTrendingUp,
    className: "md:col-span-1 md:row-span-1", 
  },
  {
    title: "MARKETING",
    description: "Convert visitors.",
    icon: FiTarget,
    className: "md:col-span-1 md:row-span-1", 
  },
  {
    title: "MAINTENANCE",
    description: "24/7 security & updates.",
    icon: FiSettings,
    className: "md:col-span-2 md:row-span-1", 
  }
];

export const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="relative w-full h-auto md:h-screen bg-background flex flex-col justify-center overflow-hidden py-12 md:py-0 px-6"
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Global Background Ambient Light */}
      <div className="absolute top-0 inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-crimson/5 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-crimson/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl h-full flex flex-col md:justify-center">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 shrink-0">
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold mb-3 font-barlow tracking-tight">
              Our Expertise
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg">
              Digital ecosystems engineered for growth.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="hidden md:flex items-center gap-2 text-sm font-mono text-crimson opacity-80">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson"></span>
            </span>
            SYSTEMS OPERATIONAL
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[65vh]"
          variants={staggerContainer(0.05, 0.1)}
        >
          {services.map((service, index) => (
            <BentoCard key={index} service={service} index={index} />
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

const BentoCard = ({ service, index }: { service: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Handle Click Navigation
  const handleClick = () => {
    // encodeURIComponent ensures special chars like "/" in "UI/UX" don't break the URL
    navigate(`/projects?category=${encodeURIComponent(service.title)}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={fadeInUp}
      className={cn(
        "relative group overflow-hidden rounded-2xl bg-card border border-border/60",
        "hover:border-crimson/60 transition-all duration-500 cursor-pointer",
        "flex flex-col justify-between",
        "h-[250px] md:h-auto", // Fixed height on mobile, auto fill on desktop
        service.className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }} // Added subtle tap effect for feedback
    >
      {/* 1. Idle Animation Background */}
      <motion.div
        className="absolute -right-12 -bottom-12 z-0 opacity-[0.03] text-foreground pointer-events-none"
        animate={{ 
          rotate: [0, 10, 0], 
          scale: [1, 1.1, 1],
          y: [0, -20, 0] 
        }}
        transition={{ 
          duration: 10 + index * 2, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <service.icon size={300} />
      </motion.div>

      {/* 2. Hover Interaction Background */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-crimson/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 z-0",
          isHovered ? "opacity-100" : ""
        )} 
      />

      {/* Content */}
      <div className="relative z-20 p-6 md:p-8 flex flex-col h-full justify-between">
        
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div className={cn(
            "p-3 rounded-lg bg-background/80 backdrop-blur-sm border border-border transition-all duration-300",
            isHovered ? "bg-crimson text-white border-crimson scale-110" : "text-crimson"
          )}>
            <service.icon size={24} />
          </div>
          
          <div className={cn(
             "w-8 h-8 rounded-full border border-border/50 flex items-center justify-center transition-all duration-300",
             isHovered ? "bg-white text-black rotate-45 border-white" : "text-muted-foreground"
          )}>
            <FiArrowUpRight />
          </div>
        </div>

        {/* Bottom Row */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 group-hover:text-crimson transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-foreground transition-colors duration-300">
            {service.description}
          </p>
          
          {/* Progress Bar Interaction */}
          <div className="w-full h-1 bg-border mt-4 rounded-full overflow-hidden">
            <div className={cn(
              "h-full bg-crimson transition-all duration-500 ease-out",
              isHovered ? "w-full" : "w-0"
            )} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};