import BeginnixLogo from "/BEGINNIX-LOGO.svg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { scrollToTop } from "@/lib/scroll-utils";
import { scrollToElement } from "@/lib/scroll-utils";

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (to: string) => {
    navigate(to);
    scrollToTop();
  };

  const handleSectionClick = (id: string) => {
    // If not on the homepage, navigate there first and then scroll
    if (window.location.pathname !== "/") {
      navigate("/");
      // small delay to allow the home page to mount/render
      setTimeout(() => scrollToElement(id), 220);
    } else {
      scrollToElement(id);
    }
  };

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

      {/* Desktop footer content */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-12"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Company Info */}
            <motion.div className="lg:col-span-1" variants={fadeInUp}>
              <div className="w-32 h-auto mb-6">
                <img src={BeginnixLogo} alt="Beginnix Logo" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We are a creative digital agency specializing in branding, design, development, and marketing solutions that help businesses grow and succeed in the digital world.
              </p>
              <div className="flex items-center space-x-4 text-sm">
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
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects?category=Branding")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Branding
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects?category=Creative Design")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Creative Design
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects?category=UI/UX")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    UI/UX Design
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects?category=Development")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Development
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects?category=Marketing")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Marketing
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects?category=SEO")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    SEO
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleLinkClick("/")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Home
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/projects")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    All Projects
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick("/about")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    About Us
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionClick("services")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Services
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionClick("contact")}
                    className="text-muted-foreground hover:text-crimson transition-colors text-sm flex items-center group"
                  >
                    Contact
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-crimson mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:rohan20ctbisht@gmail.com"
                      className="text-sm hover:text-crimson transition-colors"
                    >
                      rohan20ctbisht@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-crimson mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+918449998879"
                      className="text-sm hover:text-crimson transition-colors"
                    >
                      +91 8449998879
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-crimson mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Dehradun, Uttarakhand<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
            variants={fadeInUp}
          >
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Beginnix. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => handleLinkClick("/privacy-policy")}
                className="text-muted-foreground hover:text-crimson transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick("/terms-of-service")}
                className="text-muted-foreground hover:text-crimson transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick("/cookie-policy")}
                className="text-muted-foreground hover:text-crimson transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
