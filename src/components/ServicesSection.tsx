import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "CREATIVE DESIGN",
    description: "Innovative visual solutions that capture your brand essence",
    icon: "🎨"
  },
  {
    title: "UI/UX",
    description: "User-centered design for exceptional digital experiences",
    icon: "💻"
  },
  {
    title: "MARKETING",
    description: "Strategic campaigns that drive engagement and growth",
    icon: "📈"
  },
  {
    title: "MOTION",
    description: "Dynamic animations that bring your content to life",
    icon: "🎬"
  },
  {
    title: "ANIMATION",
    description: "Compelling visual storytelling through motion graphics",
    icon: "✨"
  },
  {
    title: "BRANDING",
    description: "Complete brand identity solutions for lasting impact",
    icon: "🎯"
  }
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Diagonal background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {services.map((_, index) => (
          <div
            key={index}
            className="absolute h-px bg-gradient-to-r from-transparent via-border to-transparent transform rotate-12 animate-diagonal-slide opacity-10"
            style={{
              top: `${20 + index * 15}%`,
              left: "-50%",
              width: "200%",
              animationDelay: `${index * 2}s`,
              animationDuration: "20s"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" 
             style={{ animationDelay: "0.2s" }}>
            Comprehensive solutions for your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "p-8 bg-card border-border hover:border-crimson transition-all duration-500 cursor-pointer group animate-scale-in",
                "hover:shadow-crimson hover:transform hover:scale-105"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="text-4xl group-hover:animate-float">
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-wide group-hover:text-crimson transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={cn(
                  "w-12 h-1 bg-crimson transition-all duration-300",
                  hoveredIndex === index ? "w-24" : "w-12"
                )} />
              </div>
            </Card>
          ))}
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-crimson rounded-full animate-pulse-crimson opacity-60" />
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-crimson rounded-full animate-pulse-crimson opacity-40" 
             style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};