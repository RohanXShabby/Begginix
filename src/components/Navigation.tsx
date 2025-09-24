import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BeginnixLogo from "/BEGINNIX-LOGO.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "WEBSITE DEVLOPMENT", href: "webdev" },
    { label: "BRANDING", href: "branding" },
    { label: "CREATIVE DESIGN", href: "design" },
    { label: "UI/UX", href: "uiux" },
    { label: "MARKETING", href: "marketing" },
    { label: "SEO", href: "seo" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[999] bg-background/95 backdrop-blur-sm border-b border-border"
      variants={staggerContainer(0.06, 0)}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="w-32 h-auto md:w-48" variants={fadeInUp}>
            <img src={BeginnixLogo} alt="Beginnix Logo" />
          </motion.div>

          {/* social media */}
          <motion.div className="hidden md:flex items-center space-x-4 text-sm" variants={fadeIn}>
            <a href="#">FB</a>
            <span>•</span>
            <a href="#">IN</a>
            <span>•</span>
            <a href="#">DR</a>
            <span>•</span>
            <a href="#">BE</a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden lg:flex items-center space-x-8" variants={staggerContainer(0.05)}>
            {navItems.map((item) => (
              <motion.div key={item.label} variants={fadeInUp}>
                <NavLink
                  to={item.href}
                  className="text-sm font-medium hover:text-crimson transition-colors"
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side buttons */}
          <motion.div className="flex items-center lg:hidden space-x-4" variants={fadeInUp}>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary lg:hidden inline-flex"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        )} variants={staggerContainer(0.05)}>
          <div className="space-y-4 pb-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium hover:text-crimson transition-colors"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: isOpen ? "forwards" : "backwards"
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};