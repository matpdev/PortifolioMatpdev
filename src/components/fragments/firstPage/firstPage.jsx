import React from "react";
import styles from "@css/components/fragments/firstPage.module.css";

export default function FirstPage() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.homeContent}>
        <div className={styles.firstPart}>
          <h1>Hi, my name is</h1>
          <p className={styles.firstTitle}>Matheus Pereira</p>
          <p className={styles.secondTitle}>Full-Stack Developer</p>
        </div>
        <div className={styles.secondPart}>
          <p>
            I'm a software engineer specializing in visual, web or mobile
            creations and experiences - with over 8 years of experience.
          </p>
        </div>
      </div>
    </div>
  );
}
