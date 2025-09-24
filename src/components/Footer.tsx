import BeginnixLogo from "/BEGINNIX-LOGO.svg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur-sm">
      {/* Mobile-only social bar */}
      <div className="container mx-auto px-6 py-4 md:hidden">
        <motion.div
          className="flex items-center justify-between"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Logo (optional on mobile) */}
          <motion.div className="w-24 h-auto" variants={fadeInUp}>
            <img src={BeginnixLogo} alt="Beginnix Logo" />
          </motion.div>

          {/* Social media links visible on mobile only */}
          <motion.div className="flex items-center space-x-4 text-sm" variants={fadeIn}>
            <motion.a href="#" aria-label="Facebook" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>FB</motion.a>
            <span>•</span>
            <motion.a href="#" aria-label="Instagram" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>IN</motion.a>
            <span>•</span>
            <motion.a href="#" aria-label="Dribbble" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>DR</motion.a>
            <span>•</span>
            <motion.a href="#" aria-label="Behance" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>BE</motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop footer content can be added here later if needed */}
      <div className="hidden md:block">
        {/* Intentionally empty to keep social hidden on desktop */}
      </div>
    </footer>
  );
};
