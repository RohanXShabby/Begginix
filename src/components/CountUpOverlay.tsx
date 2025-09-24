import React, { useEffect, useRef, useState } from "react";

export type CountUpOverlayProps = {
  start?: number;
  end?: number;
  durationMs?: number; // total animation time
  className?: string;  // extra classes if you want to tweak styling
  onComplete?: () => void;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export const CountUpOverlay: React.FC<CountUpOverlayProps> = ({
  start = 0,
  end = 100,
  durationMs = 1200,
  className = "",
  onComplete,
}) => {
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const [value, setValue] = useState(start);
  const [opacity, setOpacity] = useState(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);

      // Main count value
      const current = Math.round(start + (end - start) * eased);
      setValue(current);

      // Subtle fade tied to fractional progress — creates a smooth fade “pulse”
      const fractional = ((start + (end - start) * eased) % 1 + 1) % 1;
      const fade = 0.45 + 0.55 * easeInOutCubic(fractional);
      setOpacity(fade);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // Final fade-out and unmount
        setOpacity(0);
        const timeout = setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 350);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, end, durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={[
        "pointer-events-none fixed bottom-40 right-40 z-50",
        "text-foreground/90",
        "text-sm md:text-base font-medium select-none",
        "transition-opacity duration-300 ease-in-out",
        className,
      ].join(" ")}
      style={{ opacity }}
      aria-live="polite"
      role="status"
    >
      {value}
    </div>
  );
};
