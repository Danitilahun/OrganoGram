import { useEffect } from "react";
import { select } from "d3-selection";

const defaultConfig = {
  width: "100%",
  height: "100%",
  x: null,
  y: null,
  radius: 1,
};

const useDefineBorderRadius = ({ svg, id, config = {} }) => {
  config = {
    ...defaultConfig,
    ...config,
  };

  useEffect(() => {
    const defs = select(svg).append("defs");
    const rectId = `${id}-rect`;

    defs
      .append("rect")
      .attr("id", rectId)
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("rx", config.radius);

    defs
      .append("clipPath")
      .attr("id", id)
      .append("use")
      .attr("xlink:href", "#" + rectId);

    // Cleanup function
    return () => {
      defs.selectAll("*").remove();
    };
  }, [svg, id, config.radius]);

  // Custom hooks should return null or undefined
  return null;
};

export default useDefineBorderRadius;
