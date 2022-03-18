import { useState, useEffect } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState<number>(() => 900);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return width;
};
