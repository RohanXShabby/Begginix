import React, { useEffect, useRef, useState } from "react";
import { CountUpOverlay } from "@/components/CountUpOverlay";

export type StartupOverlayProps = {
  durationMs?: number; // total animation time for 0→100
  className?: string;  // additional classes for the full-screen overlay
  onComplete?: () => void;
};

export const StartupOverlay: React.FC<StartupOverlayProps> = ({
  durationMs = 1200,
  className = "",
  onComplete,
}) => {
  const [opacity, setOpacity] = useState(1);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  // When count finishes (durationMs), fade out the overlay and unmount
  useEffect(() => {
    // Lock page scroll while overlay is visible
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    timeoutRef.current = window.setTimeout(() => {
      setOpacity(0);
      // allow fade-out to play
      timeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        onComplete?.();
        // Restore scroll after overlay is gone
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
      }, 350);
    }, durationMs);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      // Ensure scroll gets restored if unmounted early
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={[
        // Ensure this sits above navbar (which is z-50)
        "fixed inset-0 z-[9999]",
        // Use theme variables to match your site background
        "bg-background",
        // Block interactions with the underlying app while loading
        "pointer-events-auto",
        "transition-opacity duration-300 ease-in-out",
        className,
      ].join(" ")}
      style={{ opacity }}
      aria-hidden={false}
      role="status"
    >
      {/* Bottom-right count 0→100 with smooth fade, no spinner */}
      <CountUpOverlay
        durationMs={durationMs}
        className="text-6xl md:text-[40vh] "
      />
    </div>
  );
};
