import React from "react";
import { getRandomTile } from "../base";
import VisualElement, { options } from "./visual";

const Grass = (props = {}) => {
  const randomTile = getRandomTile("Grass", options);
  return <VisualElement {...props} tile={randomTile} className="sqm" />;
};

Grass.metadata = {};

export default Grass;
