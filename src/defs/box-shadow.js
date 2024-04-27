import { useEffect } from "react";

const useDefineBoxShadow = ({ svg, id, config = {} }) => {
  const defaultConfig = {
    width: "150%",
    height: "150%",
    x: 0,
    y: 2,
    blurRadius: 1,
  };

  config = {
    ...defaultConfig,
    ...config,
  };

  useEffect(() => {
    const filter = svg
      .append("defs")
      .append("filter")
      .attr("id", id)
      .attr("height", "150%")
      .attr("width", "150%");

    filter
      .append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", config.blurRadius) // stdDeviation is how much to blur
      .attr("result", "blurOut");

    filter
      .append("feOffset")
      .attr("in", "blurOut")
      .attr("dx", config.x)
      .attr("dy", config.y)
      .attr("result", "offsetOut"); // how much to offset

    const feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode").attr("in", "offsetOut");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");
  }, [svg, id, config.blurRadius, config.x, config.y]);
};

export default useDefineBoxShadow;
