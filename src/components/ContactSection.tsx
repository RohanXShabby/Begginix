import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight, Copy, Check, Globe, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("rohan20ctbisht@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden flex flex-col justify-center">

      {/* Tasteful Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-crimson/5 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="w-[85%] max-w-6xl mx-auto relative z-10">

        {/* Header: Minimal & Functional */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-border/40 pb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0)}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-semibold font-barlow tracking-tight text-foreground">
              Let's work <span className="text-muted-foreground italic font-light">together.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-6 text-xs md:text-sm font-medium text-muted-foreground mt-4 md:mt-0 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-crimson opacity-80" />
              <span>Dehradun, IN</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-crimson opacity-80" />
              <span>GMT+5:30</span>
            </div>
          </motion.div>
        </motion.div>

        {/* The Compact Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* 1. EMAIL CARD - Sleek & Functional */}
          <motion.div variants={fadeInUp}>
            <div className="group relative h-[260px] w-full rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-crimson/40 transition-all duration-500 flex flex-col justify-between p-8">

              {/* Top: Icon & Copy */}
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-secondary/50 text-foreground group-hover:text-crimson transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 hover:bg-secondary border border-transparent hover:border-border/50 transition-all duration-200 text-xs font-medium text-muted-foreground"
                >
                  <span className="uppercase tracking-wider">{isCopied ? "Copied" : "Copy"}</span>
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check className="w-3 h-3 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Copy className="w-3 h-3" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Bottom: Address & Action */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Drop us a line</p>
                <div className="flex items-end justify-between gap-4">
                  <a href="mailto:rohan20ctbisht@gmail.com" className="font-mono text-lg md:text-xl lg:text-2xl text-foreground truncate hover:text-crimson transition-colors selection:bg-crimson/20">
                    rohan20ctbisht@gmail.com
                  </a>
                  <a href="mailto:rohan20ctbisht@gmail.com" className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-crimson group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </motion.div>


          {/* 2. WHATSAPP CARD - Direct & Friendly */}
          <motion.div variants={fadeInUp}>
            <a
              href="https://wa.me/918449998879"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="group relative h-[260px] w-full rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-[#25D366]/40 transition-all duration-500 flex flex-col justify-between p-8">

                {/* Top: Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-secondary/50 text-foreground group-hover:text-[#25D366] transition-colors duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-medium border border-[#25D366]/20">
                    Online Now
                  </div>
                </div>

                {/* Bottom: Text & Action */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Quick response</p>
                  <div className="flex items-end justify-between gap-4">
                    <span className="font-barlow text-2xl md:text-3xl font-medium text-foreground group-hover:text-[#25D366] transition-colors">
                      Chat on WhatsApp
                    </span>
                    <div className="p-3 rounded-full bg-secondary text-foreground group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300 shrink-0">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#25D366] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};