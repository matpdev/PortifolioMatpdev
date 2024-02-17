"use client";

import React, { useState } from "react";
import styles from "@css/components/fragments/indexTwo.module.css";
import PartIndex from "@/components/parts/partIndex";
import LinksIndex from "@/components/parts/links/linksIndexComponent";

export default function IndexTwo() {
  return (
    <div className={styles.boxContainer} id="experience">
      <div className={styles.twoContent}>
        <PartIndex name={"Works"} index={2}></PartIndex>
        <div className={styles.rowRoot}>
          <div className={styles.blockWorks}>
            <div className={styles.boxImage}>
              {/* <img src="" alt="" srcset="" /> */}
            </div>
            <div className={styles.boxText}>
              <div className={styles.content}>
                <p className={styles.head}>Headless CMS</p>
                <p className={styles.desc}>Headless CMS</p>
                <LinksIndex linkWeb={"https://google.com"}></LinksIndex>
              </div>
              <div className={styles.techno}>Text - Text</div>
            </div>
          </div>
          <div className={styles.blockWorksReverse}>
            <div className={styles.boxImage}>
              {/* <img src="" alt="" srcset="" /> */}
            </div>
            <div className={styles.boxText}>
              <div className={styles.content}>
                <p className={styles.head}>Headless CMS</p>
                <p className={styles.desc}>Headless CMS</p>
                <LinksIndex linkWeb={"https://google.com"}></LinksIndex>
              </div>
              <div className={styles.techno}>Text - Text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
