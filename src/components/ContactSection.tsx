import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { LoadingSpinner } from "./LoadingSpinner";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
            Let's Create
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}>
            Ready to bring your vision to life? Get in touch.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide">NAME</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border focus:border-crimson transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide">EMAIL</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border focus:border-crimson transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium tracking-wide">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-32 px-3 py-2 bg-secondary border border-border rounded-md focus:border-crimson focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-sm text-muted-foreground">
                We'll get back to you within 24 hours
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "bg-crimson hover:bg-crimson-dark text-white px-8 py-6 text-lg font-medium rounded-full",
                  "transition-all duration-300 hover:scale-105 hover:shadow-crimson",
                  isSubmitting && "opacity-75 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </Card>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <h4 className="font-semibold tracking-wide">EMAIL</h4>
            <p className="text-muted-foreground">hello@Beginnix.studio</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold tracking-wide">PHONE</h4>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold tracking-wide">LOCATION</h4>
            <p className="text-muted-foreground">New York, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
};