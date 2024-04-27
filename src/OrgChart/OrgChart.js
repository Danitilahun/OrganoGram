import React, { useEffect, useRef } from "react";
import TreeChart from "d3-org-chart";

const OrgChartComponent = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const createDiagram = () => {
      const node = chartContainerRef.current;
      if (!data) return;
      let chart = new TreeChart()
        .container(node)
        .data(data)
        .svgWidth(500)
        .initialZoom(0.4)
        .onNodeClick((d) => console.log(d + " node clicked"))
        .render();
      return () => {
        chart = null; // Clean up the chart instance
      };
    };

    createDiagram();
  }, [data]);

  return <div ref={chartContainerRef}></div>;
};

export default OrgChartComponent;
