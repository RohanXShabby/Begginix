import BeginnixLogo from "/BEGINNIX-LOGO.svg";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react";
import { scrollToTop, scrollToElement } from "@/lib/scroll-utils";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (to: string) => {
    navigate(to);
    scrollToTop();
  };

  const handleSectionClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToElement(id), 220);
    } else {
      scrollToElement(id);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/40 overflow-hidden pt-20 pb-10">

      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-crimson/5 blur-[150px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand & Description (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" onClick={() => scrollToTop()} className="block w-40">
              <img src={BeginnixLogo} alt="Beginnix" className="w-full h-auto" />
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              We engineer digital experiences that connect brands with people.
              Specializing in high-performance development and strategic design.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://instagram.com" icon={Instagram} label="Instagram" />
              <SocialLink href="https://x.com" icon={Twitter} label="X (Twitter)" />
              <SocialLink href="https://dribbble.com" icon={Dribbble} label="Dribbble" />
            </div>
          </div>

          {/* Column 2: Services (Span 3) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-lg font-semibold font-barlow mb-6">Expertise</h4>
            <ul className="space-y-4">
              <FooterLink label="Development" onClick={() => handleLinkClick("/projects?category=Development")} />
              <FooterLink label="UI/UX Design" onClick={() => handleLinkClick("/projects?category=UI/UX")} />
              <FooterLink label="Branding" onClick={() => handleLinkClick("/projects?category=Branding")} />
              <FooterLink label="Marketing" onClick={() => handleLinkClick("/projects?category=Marketing")} />
              <FooterLink label="SEO Optimization" onClick={() => handleLinkClick("/projects?category=SEO")} />
            </ul>
          </div>

          {/* Column 3: Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold font-barlow mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink label="About Us" onClick={() => handleLinkClick("/about")} />
              <FooterLink label="Projects" onClick={() => handleLinkClick("/projects")} />
              <FooterLink label="Services" onClick={() => handleSectionClick("services")} />
              <FooterLink label="Contact" onClick={() => handleSectionClick("contact")} />
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h4 className="text-lg font-semibold font-barlow mb-6">Locate Us</h4>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-crimson mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Dehradun, Uttarakhand<br />
                  India, 248001
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold font-barlow mb-4">Inquiries</h4>
              <a
                href="mailto:rohan20ctbisht@gmail.com"
                className="flex items-center gap-3 text-lg font-medium hover:text-crimson transition-colors group"
              >
                <Mail className="w-5 h-5 text-crimson" />
                <span className="relative">
                  rohan20ctbisht@gmail.com
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-crimson transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Beginnix. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <button onClick={() => handleLinkClick("/privacy-policy")} className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button onClick={() => handleLinkClick("/terms-of-service")} className="hover:text-foreground transition-colors">Terms of Service</button>
            <button onClick={() => handleLinkClick("/cookie-policy")} className="hover:text-foreground transition-colors">Cookies</button>
          </div>
        </div>
      </div>

      {/* Massive Watermark Footer Graphic */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[18vw] font-bold text-center leading-none tracking-tighter whitespace-nowrap select-none text-foreground [-webkit-text-stroke:2px_theme('colors.foreground')]">
          BEGINNIX
        </h1>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Helper Components                              */
/* -------------------------------------------------------------------------- */

const FooterLink = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <li>
    <button
      onClick={onClick}
      className="group flex items-center text-muted-foreground hover:text-crimson transition-colors text-base text-left"
    >
      <span className="relative overflow-hidden">
        {label}
        <span className="absolute left-0 bottom-0 w-full h-px bg-crimson -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </span>
      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </button>
  </li>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-crimson hover:text-white hover:border-crimson transition-all duration-300"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);