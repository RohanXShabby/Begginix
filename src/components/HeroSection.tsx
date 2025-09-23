import { useState, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import RotatingRibbon from "./ui/marque-ribbon";
import { useDevice } from "@/hooks/use-mobile";
import B from "/B.svg";

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useDevice();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <LoadingSpinner size="lg" />
          <div className="space-y-2">
            <h2 className="text-xl font-light">Loading Experience</h2>
            <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-crimson rounded-full animate-pulse"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {isMobile ? (
        <div className="absolute left-0 top-10 flex w-full justify-evenly text-center py-20 -translate-y-1/2 text-xs font-medium tracking-widest mt-20">
          <div className="transform origin-center whitespace-nowrap text-muted-foreground">DIGITAL MARKETING</div>
          <div className="transform origin-center whitespace-nowrap text-muted-foreground">DESIGNING</div>
          <div className="transform origin-center whitespace-nowrap text-muted-foreground">DEVELOPMENT</div>
        </div>
      ) : (
        <div className="absolute left-6 top-1/2 flex flex-col h-screen justify-evenly text-center py-20 -translate-y-1/2 text-xs font-medium tracking-widest mt-20">
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">DIGITAL MARKETING</div>
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">DESIGNING</div>
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">DEVELOPMENT</div>
        </div>
      )}

      {/* Main content */}
      <div className="text-center space-y-8 z-10 bg-blend-difference px-6 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl text-left md:text-6xl lg:text-8xl font-semibold tracking-tight mt-8 transition-all .text-stroke-3">
            <span className="text-crimson bg-blend-difference">Build.Design.Grow.</span>
            <br />We craft brands with<br /> design and tech.
          </h1>
        </div>
      </div>
      {!isMobile && (
        <>
          <div className="absolute -left-100 bottom-0 z-0 w-[200vw]">
            <RotatingRibbon variant="white" className="origin-right rotate-[26deg]" />
          </div>
          <div className="absolute left-100 bottom-32 w-[200vw]">
            <RotatingRibbon variant="black" className="-rotate-[9deg]" />
          </div>
        </>
      )}
      <div className="absolute left-0 top-[30%] h-1/2 w-1/2 pointer-events-none">
        <img className="w-full h-full object-contain opacity-30" src={B} alt="" />
      </div>
    </section>
  );
};
