import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground font-barlow">
      <div className="text-center p-6">
        <h1 className="mb-4 text-8xl font-extrabold font-barlow-condensed bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-crimson)" }}>
          404
        </h1>
        <p className="mb-6 text-2xl text-muted-foreground font-barlow">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-[hsl(var(--crimson))] text-white font-semibold shadow-[var(--shadow-crimson)] hover:bg-[hsl(var(--crimson-light))] transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
