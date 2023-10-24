import React from "react";
import VisualElement from "./visual";

const GroundSpikes = (props = {}) => {
  const myProps = {
    ...props,
    walkable: false,
  };
  return <VisualElement {...myProps} />;
};

GroundSpikes.metadata = {};

export default GroundSpikes;
