"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styles from "@css/components/parts/header.module.css";

export default function HeaderPart() {
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <motion.div
      className={styles.Header}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <div className={styles.headerComponent}>
        <div className={styles.logo}>
          <img src="/next.svg" alt="" />
        </div>
        <div className={styles.headerItems}>
          <a href="#about">
            <span>[0]</span> About
          </a>
          <a href="#experience">
            <span>[1]</span> Experience
          </a>
          <a href="#work">
            <span>[2]</span> Work
          </a>
          <a href="#contact">
            <span>[3]</span> Contact
          </a>
          <button className={styles.resumeButton}>Resumo</button>
        </div>
        <button
          className={isOpen ? styles.menu_open : styles.menu}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className={styles.line + " " + styles.line1}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class={styles.line + " " + styles.line2} d="M 20,50 H 80" />
            <path
              className={styles.line + " " + styles.line3}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <div className={isOpen ? styles.menuDrawerOpen : styles.menuDrawer}>
          <div className={styles.menuItens}>
            <a href="#about">
              <span>[0]</span> About
            </a>
            <a href="#experience">
              <span>[1]</span> Experience
            </a>
            <a href="#work">
              <span>[2]</span> Work
            </a>
            <a href="#contact">
              <span>[3]</span> Contact
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
