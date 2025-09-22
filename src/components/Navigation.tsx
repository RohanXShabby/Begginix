import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "CREATIVE DESIGN", href: "#design" },
    { label: "UI/UX", href: "#uiux" },
    { label: "MARKETING", href: "#marketing" },
    { label: "MOTION", href: "#motion" },
    { label: "ANIMATION", href: "#animation" },
    { label: "BRANDING", href: "#branding" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            gleamy
          </div>

          {/* Language Selection */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <span className="text-crimson font-medium">FB</span>
            <span>•</span>
            <span>IN</span>
            <span>•</span>
            <span>DR</span>
            <span>•</span>
            <span>BE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-crimson transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary"
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