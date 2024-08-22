import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: undefined,
    windowHeight: undefined,
    screenWidth: undefined,
    screenHeight: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth, // Current viewport width
        windowHeight: window.innerHeight, // Current viewport height
        screenWidth: screen.width, // Full screen width
        screenHeight: screen.height, // Full screen height
      });
    };

    // Call the handler right away so the state is updated with the initial size
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
