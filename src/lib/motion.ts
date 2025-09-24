import { Variants, Transition } from "framer-motion";

export const transition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // easeOutExpo-like
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -2, transition: { duration: 0.2 } },
};

export const tapPress: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};
