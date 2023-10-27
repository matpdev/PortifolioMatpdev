"use client";

import React, { useState } from "react";
import styles from "@css/components/fragments/indexOne.module.css";
import PartIndex from "@/components/parts/partIndex";

export default function IndexTwo() {
  const selectables = [
    {
      name: "Pinó",
      role: "Front-End",
      timeStart: "Feb 2022",
      timeEnd: "Present",
      testemonials: [
        "Deliver high-quality, robust production code for a diverse array of projects - Pinó, FoodCo., Tal Lugar, Food Hero, Bom Gourmet.",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
      isSelected: true,
    },
    {
      name: "Cupcode",
      role: "FullStack",
      timeStart: "Dez 2021",
      timeEnd: "Feb 2022",
      testemonials: [
        "Deliver high-quality, robust production code for a diverse array of projects - Pinó, FoodCo., Tal Lugar, Food Hero, Bom Gourmet.",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
      isSelected: false,
    },
    {
      name: "Maxmidia",
      role: "Developer and Designer",
      timeStart: "Jan 2021",
      timeEnd: "Nov 2021",
      testemonials: [
        "Deliver high-quality, robust production code for a diverse array of projects - Pinó, FoodCo., Tal Lugar, Food Hero, Bom Gourmet.",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
      isSelected: false,
    },
    {
      name: "Agência 2E",
      role: "Developer and Designer",
      timeStart: "Apr 2019",
      timeEnd: "Mch 2020",
      testemonials: [
        "Creation of posts and stories, with publications scheduled and created by hand according to the client's taste",
        "Creations of flyers, banners, wallpaper and much more from offline arts.",
        "Website development using wordpress and creation of blogs and posts.",
      ],
      isSelected: false,
    },
  ];
  let [isSelected, setIsSelected] = useState(selectables);

  return (
    <div className={styles.boxContainer} id="experience">
      <div className={styles.oneContent}>
        <PartIndex name={"Experience"} index={1}></PartIndex>
        <div className={styles.rowRoot}>
          <div className={styles.selectable}>
            {isSelected.map((x, y) => {
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
