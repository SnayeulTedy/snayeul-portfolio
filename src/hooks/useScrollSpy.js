import { useState, useEffect } from "react";

export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - offset) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}