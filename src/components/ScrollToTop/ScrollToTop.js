import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const offsetFromTop = window.scrollY;

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.scrollUpContainer} ${showScroll ? styles.show : ""}`}
      onClick={scrollUp}
    >
      <img src="scroll-top.svg" alt="Scroll To Top" width="20px" height="20px" />
    </div>
  );
};

export default ScrollToTop;