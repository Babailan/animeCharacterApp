import { useEffect, useRef, useState } from "react";

type options = {
  triggerOnce?: boolean;
  threshold?: number;
  observe: boolean;
};

function ObserverHook(options?: options) {
  //if observe is false do visible is always true
  if (!options.observe) {
    return { ref: null, visible: true };
  }
  const ref = useRef();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && options.triggerOnce) {
          setVisible(entry.isIntersecting);
          observer.disconnect();
        } else {
          setVisible(entry.isIntersecting);
        }
      },
      { threshold: options.threshold ? options.threshold : 0 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, options]);

  return { ref, visible };
}

export default ObserverHook;
