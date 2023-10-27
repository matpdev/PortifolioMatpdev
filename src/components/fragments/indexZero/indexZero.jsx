import React from "react";
import styles from "@css/components/fragments/indexZero.module.css";
import PartIndex from "@/components/parts/partIndex";

export default function IndexZero() {
  return (
    <div className={styles.boxContainer} id="about">
      <div className={styles.zeroContent}>
        <PartIndex name={"About Me"} index={0}></PartIndex>
        <div className={styles.zeroColumn}>
          <div className={styles.columnOne}>
            <div className={styles.paragraphs}>
              <p>
                Hello! My name is Matheus, I love to see codes since I was a
                child, my desire to program started at just 12 years old,
                creating and recreating websites in pure html and css just for
                fun.
              </p>
              <p>
                Today as a <span>Full Stack developer</span> - programming
                opened many doors for me and helped me to follow and dream more
                and more. Today my focus is both{" "}
                <span>mobile and web front-end</span>, creating in an easy and
                responsive way for all users
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
            <div className={styles.gridHabilities}>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>React.JS</p>
              </div>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>Flutter</p>
              </div>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>Typescript</p>
              </div>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>Next.JS</p>
              </div>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>Dart</p>
              </div>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>Node.JS</p>
              </div>
              <div className={styles.habilities}>
                <img src="/icons/arrowRight.svg" alt="" height={25} />
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className={styles.columnTwo}>
            <img src="/meImage.jpg" alt="Matheus Alves" />
          </div>
        </div>
      </div>
    </div>
  );
}
