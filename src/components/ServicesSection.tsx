import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-semibold mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}>
            Comprehensive solutions for your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "p-8 bg-card border-border hover:border-crimson transition-all duration-300 cursor-pointer group",
                "hover:shadow-crimson hover:transform rounded-md"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-crimson rounded-full animate-pulse-crimson opacity-60" />
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-crimson rounded-full animate-pulse-crimson opacity-40"
          style={{ animationDelay: "1s" }} />
        <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-crimson rounded-full animate-pulse-crimson opacity-50"
          style={{ animationDelay: "0.3s" }} />
        <div className="absolute top-1/2 left-16 w-1 h-1 bg-crimson rounded-full  opacity-70"
          style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-16 right-1/3 w-2 h-2 bg-crimson rounded-full animate-pulse-crimson opacity-45"
          style={{ animationDelay: "2.2s" }} />
        <div className="absolute top-24 left-24 w-3 h-3 bg-crimson rounded-full animate-pulse-crimson opacity-30"
          style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-crimson rounded-full animate-pulse-crimson opacity-65"
          style={{ animationDelay: "0.4s" }} />
        <div className="absolute bottom-24 left-1/4 w-1.5 h-1.5 bg-crimson rounded-full  opacity-75"
          style={{ animationDelay: "0.1s" }} />
        <div className="absolute top-1/4 right-24 w-2.5 h-2.5 bg-crimson rounded-full animate-pulse-crimson opacity-50"
          style={{ animationDelay: "1.3s" }} />
      </div>
    </section>
  );
};