import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "./LoadingSpinner";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Brand.Design.Product.",
    "In-House Development.",
    "&More"
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <LoadingSpinner size="lg" />
          <div className="space-y-2">
            <h2 className="text-xl font-light">Loading Experience</h2>
            <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-crimson rounded-full animate-pulse" 
                   style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-border rounded-full animate-float opacity-20" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-border rounded-full animate-float opacity-30" 
             style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-crimson rounded-full animate-pulse-crimson" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-crimson rounded-full animate-pulse-crimson" 
             style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Side navigation elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-8 text-xs font-medium tracking-widest">
        <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">
          DIGITAL MARKETING
        </div>
        <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">
          DESIGNING
        </div>
        <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">
          DEVELOPMENT
        </div>
      </div>

      {/* Main content */}
      <div className="text-center space-y-8 px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          {heroTexts.map((text, index) => (
            <h1
              key={text}
              className={cn(
                "text-6xl md:text-8xl lg:text-9xl font-light tracking-tight transition-all duration-1000",
                index === currentText 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-20 transform translate-y-4"
              )}
            >
              {text}
            </h1>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Right side elements */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <div className="w-16 h-16 border border-border rounded-full flex items-center justify-center animate-float">
          <div className="w-4 h-4 bg-crimson rounded-full animate-pulse-crimson" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <div className="text-xs font-medium tracking-widest text-muted-foreground mb-2">SCROLL</div>
        <div className="w-px h-12 bg-border mx-auto" />
      </div>
    </section>
  );
};