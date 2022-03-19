import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const handleChange = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleChange();
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  }, [width]);
  return width > 789 ? true : false;
}
