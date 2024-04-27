import { useEffect } from "react";
import { select } from "d3-selection";

const defaultConfig = {
  borderRadius: 4,
};

const useDefineAvatarClip = ({ svg, id, config = {} }) => {
  config = {
    ...defaultConfig,
    ...config,
  };

  useEffect(() => {
    const defs = select(svg).append("defs");

    defs
      .append("clipPath")
      .attr("id", id)
      .append("circle")
      .attr("cx", 34)
      .attr("cy", 34)
      .attr("r", 18);

    // Cleanup function
    return () => {
      defs.selectAll("*").remove();
    };
  }, [svg, id]);

  // Custom hooks should return null or undefined
  return null;
};

export default useDefineAvatarClip;
