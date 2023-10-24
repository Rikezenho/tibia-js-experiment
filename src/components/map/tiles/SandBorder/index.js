import React from "react";
import VisualElement, { options } from "./visual";

const SandBorder = (props = {}) => {
  const { type } = props;
  if (typeof options[type] === "undefined") {
    console.error(`WARNING: SandBorder with type ${type} not found!`);
    return null;
  }

  return <VisualElement {...props} className="sqm" />;
};

SandBorder.metadata = {
  walkable: true,
  slow: 0.35,
};

export default SandBorder;
