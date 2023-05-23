import React from "react";

export default function PartIndex({ name, index }) {
  return (
    <div className="indexPage">
      <div className="indexLineHori"></div>
      <div className="indexPageName">
        <span className="indexNumber">[{index}]</span>&nbsp;{name}
      </div>
    </div>
  );
}
