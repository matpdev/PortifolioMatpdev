"use client";

import React, { useState } from "react";
import styles from "@css/components/fragments/indexOne.module.css";
import PartIndex from "@/components/parts/partIndex";

export default function IndexOne({ selectables }) {
  let [isSelected, setIsSelected] = useState(selectables);

  return (
    <div className={styles.boxContainer} id="experience">
      <div className={styles.oneContent}>
        <PartIndex name={"Experience"} index={1}></PartIndex>
        <div className={styles.rowRoot}>
          <div className={styles.selectable}>
            {isSelected?.map((x, y) => {
              return (
                <div
                  className={x.isSelected ? styles.selected : ""}
                  key={y}
                  onClick={(e) => {
                    let copy = isSelected;
                    for (let i = 0; i < copy.length; i++) {
                      copy[i].isSelected = false;
                    }
                    copy[y].isSelected = true;
                    setIsSelected([...copy]);
                  }}
                >
                  {x.name}
                </div>
              );
            })}
          </div>
          <div className={styles.showSelected}>
            <div className={styles.head}>
              {isSelected[isSelected.findIndex((e) => e.isSelected)].role}{" "}
              <span>
                @ {isSelected[isSelected.findIndex((e) => e.isSelected)].name}
              </span>
            </div>
            <div className={styles.time}>
              {isSelected[isSelected.findIndex((e) => e.isSelected)].timeStart}{" "}
              - {isSelected[isSelected.findIndex((e) => e.isSelected)].timeEnd}
            </div>
            <div className={styles.testemonials}>
              {isSelected[
                isSelected.findIndex((e) => e.isSelected)
              ].testemonials.map((e, y) => {
                return (
                  <div className={styles.testemonial} key={y}>
                    <img src="/icons/arrowRight.svg" alt="" srcset="" />
                    <div className={styles.testemoContent}>{e}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
