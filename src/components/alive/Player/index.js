import React from "react";
import NameBar from "../../hud/NameBar";
import VisualElement from "./visual";
import baseProps from "../base";
import {
  shouldNotCompleteMove,
  getFutureSqmInfo,
} from "../../../map/functions";
import parsedMap from "../../../map";
import { setPlayerPos } from "../../../store/actions/player";
import { setMessage } from "../../../store/actions/hud";
import { store } from "../../../store";
import { log } from "../../../functions/gameUtils";
import useKeyPress from "../../../hooks/useKeyPress";
const wPressed = useKeyPress("w", false);
const sPressed = useKeyPress("s", false);
const aPressed = useKeyPress("a", false);
const dPressed = useKeyPress("d", false);

const calculateSpeed = (speed) => (1 / (speed / 100)) * 1;

const useWalkWithKeyboard = () => {
  const { state: globalState, dispatch } = React.useContext(store);
  const {
    player: { baseSpeed, pos },
    developer: { debugMode },
  } = globalState;

  const [direction, setDirection] = React.useState("down");
  const [walking, setWalking] = React.useState(false);
  const [speed, setSpeed] = React.useState(baseSpeed);
  const [effects, setEffects] = React.useState({});

  const calculatedSpeed = React.useMemo(() => {
    const finalSpeed = calculateSpeed(speed);
    if (debugMode) {
      log(
        "player",
        `Changed speed from ${baseSpeed} to ${speed} - animation/transition time: ${finalSpeed}s`,
      );
    }
    return finalSpeed;
  }, [speed]);

  const shiftWPressed = useKeyPress("w", true);
  const shiftSPressed = useKeyPress("s", true);
  const shiftAPressed = useKeyPress("a", true);
  const shiftDPressed = useKeyPress("d", true);
  const wPressed = useKeyPress("w", false);
  const sPressed = useKeyPress("s", false);
  const aPressed = useKeyPress("a", false);
  const dPressed = useKeyPress("d", false);

  React.useEffect(() => {
    if (walking) {
      return;
    }

    let newDirection;
    let newPos = {};

    if (shiftWPressed || wPressed) {
      newDirection = "up";
      newPos = shiftWPressed
        ? { x: pos.x, y: pos.y }
        : { x: pos.x, y: pos.y - 1 };
    } else if (shiftSPressed || sPressed) {
      newDirection = "down";
      newPos = shiftSPressed
        ? { x: pos.x, y: pos.y }
        : { x: pos.x, y: pos.y + 1 };
    } else if (shiftAPressed || aPressed) {
      newDirection = "left";
      newPos = shiftAPressed
        ? { x: pos.x, y: pos.y }
        : { x: pos.x - 1, y: pos.y };
    } else if (shiftDPressed || dPressed) {
      newDirection = "right";
      newPos = shiftDPressed
        ? { x: pos.x, y: pos.y }
        : { x: pos.x + 1, y: pos.y };
    }
        : { x: pos.x - 1, y: pos.y };
    } else if (ctrlDPressed || dPressed) {
      newDirection = "right";
      newPos = ctrlDPressed
        ? { x: pos.x, y: pos.y }
        : { x: pos.x + 1, y: pos.y };
    }

    if (newDirection) {
      setDirection(newDirection);
      setWalking(true);

      if (shouldNotCompleteMove(parsedMap.map, newPos)) {
        setWalking(false);
        return;
      }

      const { effects: sqmEffects, slow } = getFutureSqmInfo(
        parsedMap.map,
        newPos,
      );
      const finalEffects = { ...effects } || {};
      sqmEffects.forEach((item) => {
        dispatch(setMessage(item.metadata.message));
        finalEffects[item.name] = {
          component: item.component,
          wipeTimeout: setTimeout(() => {
            delete effects[item.name];
            setEffects(effects);
          }, item.metadata.duration),
        };
      }, {});

      const speedTime = slow ? baseSpeed - baseSpeed * slow : baseSpeed;
      setSpeed(speedTime);
      setEffects(finalEffects);

      dispatch(setPlayerPos(newPos));
    }
  }, [pos, walking, shiftWPressed, shiftSPressed, shiftAPressed, shiftDPressed]);

  React.useEffect(() => {
    if (walking === true) {
      setTimeout(() => {
        setWalking(false);
      }, calculatedSpeed * 1000);
    }
  }, [walking]);

  return {
    direction,
    walking,
    calculatedSpeed,
    effects,
  };
};

const Player = (props = {}) => {
  const { state: globalState } = React.useContext(store);
  const {
    player: { name, maxHealth, maxMana, currentHealth, currentMana, pos },
    map: { tileWidth },
  } = globalState;

  const { walking, calculatedSpeed, direction, effects } =
    useWalkWithKeyboard();

  const cssPosition = React.useMemo(
    () => ({
      left: pos.x * tileWidth,
      top: pos.y * tileWidth,
    }),
    [pos],
  );

  return (
    <div style={{ position: "relative" }}>
      <VisualElement
        {...{
          walking,
          direction,
          left: cssPosition.left,
          top: cssPosition.top,
          speed: calculatedSpeed,
        }}
      >
        {Object.values(effects).length
          ? Object.values(effects).map((item, index) =>
              React.createElement(item.component, {
                key: `effect-${index}`,
              }),
            )
          : null}
        <NameBar
          {...{ name, maxHealth, maxMana, currentHealth, currentMana }}
        />
      </VisualElement>
    </div>
  );
};

export default Player;
