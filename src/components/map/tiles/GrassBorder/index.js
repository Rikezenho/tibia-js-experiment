import React from "react";
import VisualElement, { options } from "./visual";

const GrassBorder = (props = {}) => {
  const { type } = props;

  if (typeof options[type] === "undefined") {
    console.error(`WARNING: GrassBorder with type ${type} not found!`);
    return null;
  }

  return <VisualElement {...props} className="sqm" />;
};

GrassBorder.metadata = {
  walkable: true,
  slow: 0.15,
};

export default GrassBorder;
