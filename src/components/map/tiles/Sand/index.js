import React from "react";
import { getRandomTile } from "../base";
import VisualElement, { options } from "./visual";

const Sand = (props = {}) => {
  const randomTile = getRandomTile("Sand", options);
  return <VisualElement {...props} tile={randomTile} className="sqm" />;
};

Sand.metadata = {
  slow: 0.5,
};

export default Sand;
