import { useState, useEffect } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width;
};
