"use client";

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;

      const scrolled = documentElement.scrollTop;

      const maxHeight = documentElement.scrollHeight - documentElement.clientHeight;

      const scrollPercent = (scrolled / maxHeight) * 100;

      setScroll(scrollPercent);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-[80px] h-1 w-screen bg-cyan-50/10 dark:bg-slate-50/10 z-30">
      <div
        className="h-full bg-purple-400 dark:bg-sky-500"
        style={{ width: scroll + "%" }}
      >
      </div>
    </div>
  );
};
export default ScrollIndicator;
