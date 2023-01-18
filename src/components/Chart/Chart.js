import "../css/Chart.css";
import ChartBar from "./ChartBar";
import React from "react";

export default function Chart(props) {
  const valueArray = props.dataPoints.map(curr => curr.value)
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
