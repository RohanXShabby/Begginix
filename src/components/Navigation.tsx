import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BeginnixLogo from "/BEGINNIX-LOGO.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "WEBSITE DEVLOPMENT", href: "webdev", category: "Development" },
    { label: "BRANDING", href: "branding", category: "Branding" },
    { label: "CREATIVE DESIGN", href: "design", category: "Creative Design" },
    { label: "UI/UX", href: "uiux", category: "UI/UX" },
    { label: "MARKETING", href: "marketing", category: "Marketing" },
    { label: "SEO", href: "seo", category: "SEO" },
  ];

  const handleCategoryClick = (category: string) => {
    navigate(`/projects?category=${category}`);
    setIsOpen(false);
  };

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
            <Link to="/">
              <img src={BeginnixLogo} alt="Beginnix Logo" className="cursor-pointer" />
            </Link>
          </motion.div>

          {/* social media */}
          <motion.div className="hidden md:flex items-center space-x-4 text-sm" variants={fadeIn}>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/company/beginnix"
              aria-label="Facebook"
              className="hover:text-crimson transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              LI
            </motion.a>
            <span>•</span>
            <motion.a
              target="_blank"
              href="https://www.instagram.com/beginnix_"
              aria-label="Instagram"
              className="hover:text-crimson transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              IG
            </motion.a>
            <span>•</span>
            <motion.a
              target="_blank" href="https://x.com/HeyShabby_02"
              aria-label="Dribbble"
              className="hover:text-crimson transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              X
            </motion.a>
            <span>•</span>
            <motion.a
              target="_blank"
              href="https://www.behance.net/rohanbisht4"
              aria-label="Behance"
              className="hover:text-crimson transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              BE
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden lg:flex items-center space-x-8" variants={staggerContainer(0.05)}>
            {navItems.map((item) => (
              <motion.div key={item.label} variants={fadeInUp}>
                {item.category ? (
                  <motion.button
                    onClick={() => handleCategoryClick(item.category)}
                    className="text-sm font-medium hover:text-crimson transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ) : (
                  <motion.a
                    href={`#${item.href}`}
                    className="text-sm font-medium hover:text-crimson transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                )}
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
              <motion.div
                key={item.label}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: isOpen ? "forwards" : "backwards"
                }}
              >
                {item.category ? (
                  <button
                    onClick={() => handleCategoryClick(item.category)}
                    className="block text-sm font-medium hover:text-crimson transition-colors w-full text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={`#${item.href}`}
                    className="block text-sm font-medium hover:text-crimson transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};