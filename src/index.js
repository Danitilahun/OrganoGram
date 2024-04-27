import React from "react";
import { render } from "react-dom";
import "./index.css";
import OrgChartComponent from "./OrgChart/OrgChart";
import { universityStructure } from "./util/universityStructure";

const App = () => {
  return <OrgChartComponent data={universityStructure} />;
};

render(<App />, document.getElementById("root"));
