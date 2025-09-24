import RotatingRibbon from "./ui/marque-ribbon";
import { useDevice } from "@/hooks/use-mobile";
import B from "/B.svg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";

export const HeroSection = () => {
  const { isMobile } = useDevice();
  

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      animate="show"
    >
      {isMobile ? (
        <motion.div
          className="absolute left-0 top-10 flex w-full justify-evenly text-center py-20 -translate-y-1/2 text-xs font-medium tracking-widest mt-20"
          variants={fadeIn}
        >
          <div className="transform origin-center whitespace-nowrap text-muted-foreground">DIGITAL MARKETING</div>
          <div className="transform origin-center whitespace-nowrap text-muted-foreground">DESIGNING</div>
          <div className="transform origin-center whitespace-nowrap text-muted-foreground">DEVELOPMENT</div>
        </motion.div>
      ) : (
        <motion.div
          className="absolute left-6 top-1/2 flex flex-col h-screen justify-evenly text-center py-20 -translate-y-1/2 text-xs font-medium tracking-widest mt-20"
          variants={fadeIn}
        >
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">DIGITAL MARKETING</div>
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">DESIGNING</div>
          <div className="transform -rotate-90 origin-center whitespace-nowrap text-muted-foreground">DEVELOPMENT</div>
        </motion.div>
      )}

      {/* Main content */}
      <motion.div className="text-center space-y-8 z-10 bg-blend-difference px-6 max-w-6xl mx-auto">
        <motion.div className="space-y-6" variants={fadeInUp}>
          <h1 className="text-5xl text-left md:text-6xl lg:text-8xl font-semibold font-barlow tracking-tight mt-8 transition-all .text-stroke-3">
            <span className="text-crimson bg-blend-difference">Build.Design.Grow.</span>
            <br />We craft brands with<br /> design and tech.
          </h1>
        </motion.div>
      </motion.div>
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
    </motion.section>
  );
};
