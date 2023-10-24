import React from "react";

import FieldsBase from "../components/map/fields/base";
import Poison from "../components/map/fields/Poison";

import TilesBase from "../components/map/tiles/base";
import Grass from "../components/map/tiles/Grass";
import GrassBorder from "../components/map/tiles/GrassBorder";
import Sand from "../components/map/tiles/Sand";
import SandBorder from "../components/map/tiles/SandBorder";
import Water from "../components/map/tiles/Water";

import TerrainBase from "../components/map/terrain/base";
import GroundSpikes from "../components/map/terrain/GroundSpikes";

const components = {
  fields: {
    base: FieldsBase,
    Poison,
  },
  tiles: {
    base: TilesBase,
    Grass,
    GrassBorder,
    Sand,
    SandBorder,
    Water,
  },
  terrain: {
    base: TerrainBase,
    GroundSpikes,
  },
};

export const prepareStack = (stack = [], { index, top, left, axis }) =>
  stack
    .map((item, currIndex) => {
      let [type, name] = (item || "").split(":");
      if (!type || !name) {
        return null;
      }
      const hasComponentSubType = name.includes(".");
      const componentNames = hasComponentSubType ? name.split(".") : [name];
      const componentSubType = hasComponentSubType
        ? name.split(".").pop()
        : null;

      name = hasComponentSubType ? componentNames[0] : name;

      const component = components[type][name] ? components[type][name] : null;

      if (!component) {
        console.error(`WARNING: ${item} not found in axis ${axis}!`);
        return null;
      }

      const reactElement = React.createElement(component, {
        ...components[type].base,
        ...component.metadata,
        ...{
          key: `tile-${index}-${currIndex}`,
          zIndex: currIndex,
          top,
          left,
          type: componentSubType,
          "data-axis": axis,
        },
      });
      return reactElement;
    })
    .filter((item) => !!item);

export const shouldNotCompleteMove = (map = {}, { x, y }) => {
  return (
    typeof map[`${x}:${y}:0`] === "undefined" ||
    (map[`${x}:${y}:0`] &&
      !map[`${x}:${y}:0`].some(
        (stackItem) => stackItem.props.walkable === true
      ) &&
      map[`${x}:${y}:0`].some((stackItem) => !stackItem.props.border))
  );
};

export const getFutureSqmInfo = (map = {}, { x, y }) => {
  const sqmEffects = map[`${x}:${y}:0`].filter(
    (stackItem) => stackItem.props.effect
  );
  const effects = sqmEffects.length
    ? sqmEffects.map((item) => item.props.effect)
    : [];

  const sqmSlow = map[`${x}:${y}:0`].reduce(
    (acc, curr) => (curr.props.slow > acc ? curr.props.slow : acc),
    0
  );

  return {
    effects,
    slow: sqmSlow,
  };
};
