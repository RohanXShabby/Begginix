import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BeginnixLogo from "/BEGINNIX-LOGO.svg";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "BRANDING", href: "branding" },
    { label: "CREATIVE DESIGN", href: "design" },
    { label: "UI/UX", href: "uiux" },
    { label: "MARKETING", href: "marketing" },
    { label: "SEO", href: "seo" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-32 h-auto md:w-48">
            <img src={BeginnixLogo} alt="Beginnix Logo" />
          </div>

          {/* Language Selection */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <a href="#">FB</a>
            <span>•</span>
            <a href="#">IN</a>
            <span>•</span>
            <a href="#">DR</a>
            <span>•</span>
            <a href="#">BE</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="text-sm font-medium hover:text-crimson transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center lg:hidden space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary lg:hidden inline-flex"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        )}>
          <div className="space-y-4 pb-6">
            {navItems.map((item, index) => (
              <a
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};