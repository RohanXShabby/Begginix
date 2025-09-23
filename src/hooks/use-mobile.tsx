import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useDevice() {
  const [windowSize, setWindowSize] = React.useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    // Only execute all the code below in client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return {
    isMobile: typeof windowSize.width !== 'undefined' ? windowSize.width < MOBILE_BREAKPOINT : false,
    isTablet: typeof windowSize.width !== 'undefined' ? windowSize.width >= MOBILE_BREAKPOINT && windowSize.width < TABLET_BREAKPOINT : false,
    isDesktop: typeof windowSize.width !== 'undefined' ? windowSize.width >= TABLET_BREAKPOINT : false,
    width: windowSize.width,
    height: windowSize.height,
  };
}

// For backwards compatibility
export function useIsMobile() {
  const { isMobile } = useDevice();
  return isMobile;
}
