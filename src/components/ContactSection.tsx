import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send, Clock } from "lucide-react";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

export const ContactSection = () => {
  const message = encodeURIComponent(
    "Hello, I would like to discuss your services."
  );

  const contactMethods = [
    {
      title: "Email",
      icon: Mail,
      href: `mailto:rohan20ctbisht@gmail.com?subject=Business Inquiry&body=${message}`,
      label: "Send Email",
      description: "rohan20ctbisht@gmail.com",
      color: "bg-accent text-accent-foreground",
      hoverColor: "hover:shadow-[var(--shadow-crimson)]"
    },
    {
      title: "Phone",
      icon: Phone,
      href: "tel:+917302287997",
      label: "Call Now",
      description: "+91 7302287997",
      color: "bg-secondary text-secondary-foreground border border-border",
      hoverColor: "hover:bg-muted hover:border-accent/30"
    },
    {
      title: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/917302287997?text=${message}`,
      label: "Chat on WhatsApp",
      description: "Quick response",
      color: "bg-secondary text-secondary-foreground border border-border",
      hoverColor: "hover:bg-muted hover:border-accent/30"
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohan20ctbisht@gmail.com",
      href: "mailto:rohan20ctbisht@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7302287997",
      href: "tel:+917302287997"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, Uttarakhand",
      href: null
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  return (
    <motion.section
      className="py-24 px-6 relative overflow-hidden"
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        background: 'var(--gradient-subtle)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/60 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6 border border-border"
            variants={fadeIn}
          >
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 font-barlow"
            variants={fadeInUp}
          >
            Let's Start a Conversation
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Ready to bring your ideas to life? Choose your preferred way to connect
            and let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer(0.1)}
        >
          {contactMethods.map((method, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Card className="group relative overflow-hidden border border-border bg-card hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-2">
                <div className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary border border-border mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-muted`}>
                    <method.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 font-barlow-condensed">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{method.description}</p>

                  <a
                    href={method.href}
                    target={method.title !== "Phone" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-3 px-6 font-medium rounded-xl transition-all duration-300 ${method.color} ${method.hoverColor}`}
                    style={{ transition: 'var(--transition-smooth)' }}
                  >
                    {method.label}
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information Grid */}
        <Card className="bg-card border border-border">
          <div className="p-8 md:p-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer(0.08)}
            >
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border mb-4 group-hover:bg-muted group-hover:border-accent/30 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h4 className="font-semibold text-sm uppercase tracking-wider mb-2 text-muted-foreground font-barlow-condensed">
                    {info.label}
                  </h4>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground hover:text-accent transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Card>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <p className="text-muted-foreground mb-4">
            Prefer a different method? We're flexible and responsive across all channels.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Typically respond within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};