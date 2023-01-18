import "../css/ChartBar.css";

import React from "react";

export default function ChartBar(props) {
  let barFilledHeight = "0%";

  if (Number(props.maxValue) > 0) {
    barFilledHeight =
      Math.round((Number(props.value) / Number(props.maxValue)) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
