import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div
      className={cn(
        "relative rounded-full border-2 border-muted animate-spin",
        "border-t-crimson",
        sizeClasses[size],
        className
      )}
    />
  );
};

export const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex space-x-1", className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-crimson rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "1s"
          }}
        />
      ))}
    </div>
  );
};

export const LoaderWithProgress = ({ speed = 50 }: { speed?: number }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 2, 100));
      }, speed);
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => setVisible(false), 800); // smooth fade
      return () => clearTimeout(timeout);
    }
  }, [progress, speed]);

  return visible ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out z-50">
      <div className="flex flex-col items-center space-y-4">
        <LoadingSpinner size="lg" />
        <LoadingDots />
      </div>
      <div className="absolute bottom-4 right-4 text-white text-sm font-bold transition-opacity duration-700 ease-in-out">
        {progress}%
      </div>
    </div>
  ) : null;
};
