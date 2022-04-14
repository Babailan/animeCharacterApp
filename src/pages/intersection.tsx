import { useEffect, useRef, useState } from "react";

function useOnScreen(options) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
  }, [ref, options]);
}

function Intersection() {
  const ref = { current: null };
  const visible = false;

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <h1 style={{ color: "#fff" }}>1st</h1>
      </div>
      <div style={{ minHeight: "100vh" }}>
        <h1 style={{ color: "#fff" }}>2</h1>
      </div>
      <div ref={ref} style={{ minHeight: "100vh" }}>
        <h1 style={{ color: "#fff" }}>
          3 {visible ? "Hi i'm on the screen" : "Tf it's not workin"}
        </h1>
      </div>
    </>
  );
}

export default Intersection;
