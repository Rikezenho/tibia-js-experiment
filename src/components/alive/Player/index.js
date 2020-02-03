import React from 'react';
import NameBar from '../../hud/NameBar';
import VisualElement from './visual';
import baseProps from '../base';
import { shouldNotCompleteMove, effectsInSqm } from '../../../map/functions';
import parsedMap from '../../../map';
import { setPlayerPos } from '../../../store/actions/player';
import { setMessage } from '../../../store/actions/hud';
import { store } from '../../../store';

const Player = (props = {}) => {
    const {
        upKey,
        leftKey,
        downKey,
        rightKey,
    } = props;
    
    const { state: globalState, dispatch } = React.useContext(store);
    const {
        currentPlayer: {
            pos,
        },
        player: {
            name,
            maxHealth,
            maxMana,
            currentHealth,
            currentMana,
        },
        map: {
            tileWidth
        }
    } = globalState;

    const [direction, setDirection] = React.useState('down');
    const [walking, setWalking] = React.useState(false);
    const [cssPosition, setCssPosition] = React.useState({
        left: pos.x * tileWidth,
        top: pos.y * tileWidth,
    });
    const [canWalk, allowWalk] = React.useState(true);
    const [effects, setEffects] = React.useState({});

    const walk = (newDirection) => {
        if (!canWalk) {
            return;
        }
        allowWalk(false);
        let top = pos.y * tileWidth;
        let left = pos.x * tileWidth;
        let newPos = {};

        switch (newDirection) {
            case 'up':
                newPos = { x: pos.x, y: pos.y - 1 };
            break;
            case 'down':
                newPos = { x: pos.x, y: pos.y + 1 };
            break;
            case 'left':
                newPos = { x: pos.x - 1, y: pos.y };
            break;
            case 'right':
                newPos = { x: pos.x + 1, y: pos.y };
            break;
        }
        if (shouldNotCompleteMove(parsedMap.map, newPos)) {
            allowWalk(true);
            return;
        }

        const sqmEffects = effectsInSqm(parsedMap.map, newPos);
        const finalEffects = { ...effects } || {};
        sqmEffects.forEach((item) => {
            dispatch(setMessage(`You are poisoned.`));
            // if (finalEffects[item.name]) {
            //     clearTimeout(finalEffects[item.name].wipeTimeout);
            //     delete state.effects[item.name];
            //     setState(state => ({ ...state, effects: state.effects }));
            // }
            finalEffects[item.name] = {
                component: item.component,
                wipeTimeout: setTimeout(() => {
                    delete effects[item.name];
                    setEffects(effects);
                }, item.metadata.duration)
            };
        }, {});

        setDirection(newDirection);
        setWalking(true);
        setCssPosition({
            left: newPos.x * tileWidth,
            top: newPos.y * tileWidth,
        })
        setEffects(finalEffects);

        dispatch(setPlayerPos(newPos));
        setTimeout(() => {
            setWalking(false);
            allowWalk(true);
        }, 250);
    };

    React.useEffect(() => {
        if (upKey) walk('up');
        if (downKey) walk('down');
        if (leftKey) walk('left');
        if (rightKey) walk('right');
    }, [upKey, downKey, leftKey, rightKey]);

    return <div style={{ position: 'relative' }}>
        <VisualElement {...{
            walking,
            direction,
            left: cssPosition.left,
            top: cssPosition.top
        }}>
            {
                Object.values(effects).length
                    ? Object.values(effects).map((item, index) => React.createElement(item.component, {
                        key: `effect-${index}`,
                    }))
                    : null
            }
            <NameBar { ...{ name, maxHealth, maxMana, currentHealth, currentMana }} />
        </VisualElement>
    </div>;
};

export default Player;