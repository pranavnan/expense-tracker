import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.umber";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function MostPopularColumn({ data }) {
  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        numbersuffix: " ₹",
        caption: "Overall Expense",
        yAxisName: "Spending in (₹)",
        xAxisName: "Months",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
        theme: "umber",
        decimals: 0,
        paletteColors:
          " #5c8ab8 ,#a3224f, #1daeb9, #ffc64c,#FF6600, #6261b1, #0494ff, #7b3f66, #e9a179, #FFB84C, #E90064, #B99B6B",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
}

// import FusionCharts from "fusioncharts";
// import charts from "fusioncharts/fusioncharts.charts";
// import ReactFusioncharts from "react-fusioncharts";

// // Resolves charts dependancy
// charts(FusionCharts);

// function LineChart(props) {
//   const dataSource = {
//     chart: {
//       caption: "Average Fastball Velocity",
//       yaxisname: "Velocity (in mph)",
//       subcaption: "[2005-2016]",
//       numbersuffix: " mph",
//       rotatelabels: "1",
//       setadaptiveymin: "1",
//       theme: "candy",
//     },
//     data: props.data,
//   };
//   return (
//     <ReactFusioncharts
//       type="line"
//       width="100%"
//       height="100%"
//       dataFormat="JSON"
//       dataSource={dataSource}
//     />
//   );
// }

// export default LineChart;

// // class MyComponent extends React.Component {
// //   render() {
// //     return (
// //       <ReactFusioncharts
// //         type="line"
// //         width="100%"
// //         height="100%"
// //         dataFormat="JSON"
// //         dataSource={dataSource}
// //       />
// //     );
// //   }
// // }
