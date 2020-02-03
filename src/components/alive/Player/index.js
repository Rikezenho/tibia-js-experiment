import React from 'react';
import NameBar from '../../hud/NameBar';
import VisualElement from './visual';
import baseProps from '../base';
import { shouldNotCompleteMove, effectsInSqm } from '../../../map/functions';
import parsedMap from '../../../map';

const Player = (props = {}) => {
    const [state, setState] = React.useState({ ...baseProps, ...props });
    const {
        upKey,
        leftKey,
        downKey,
        rightKey,
        playerPos,
        setPlayerPos
    } = props;
    const {
        name,
        health,
        mana
    } = state;
    const [currentHealth, setCurrentHealth] = React.useState(health);
    const [currentMana, setCurrentMana] = React.useState(mana);
    const [canWalk, allowWalk] = React.useState(true);

    const tileWidth = 32;

    const walk = (direction) => {
        if (!canWalk) {
            return;
        }
        allowWalk(false);
        let top = state.top;
        let left = state.left;
        let newPos = {};

        switch (direction) {
            case 'up':
                top = state.top - tileWidth;
                newPos = { x: playerPos.x, y: playerPos.y - 1 };
            break;
            case 'down':
                top = state.top + tileWidth;
                newPos = { x: playerPos.x, y: playerPos.y + 1 };
            break;
            case 'left':
                left = state.left - tileWidth;
                newPos = { x: playerPos.x - 1, y: playerPos.y };
            break;
            case 'right':
                left = state.left + tileWidth;
                newPos = { x: playerPos.x + 1, y: playerPos.y };
            break;
        }
        if (shouldNotCompleteMove(parsedMap.map, newPos)) {
            allowWalk(true);
            return;
        }

        const effects = effectsInSqm(parsedMap.map, newPos);
        const finalEffects = { ...state.effects } || {};
        effects.forEach((item) => {
            console.log(`você foi ${item.name}`);
            // if (finalEffects[item.name]) {
            //     clearTimeout(finalEffects[item.name].wipeTimeout);
            //     delete state.effects[item.name];
            //     setState(state => ({ ...state, effects: state.effects }));
            // }
            finalEffects[item.name] = {
                component: item.component,
                wipeTimeout: setTimeout(() => {
                    delete state.effects[item.name];
                    setState(state => ({ ...state, effects: state.effects }));
                }, item.metadata.duration)
            };
        }, {});

        setState(state => ({
            ...state,
            direction,
            left,
            top,
            walking: true,
            effects: finalEffects,
        }));

        setPlayerPos(newPos);
        setTimeout(() => {
            setState(state => ({ ...state, walking: false }));
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
        <VisualElement { ...state }>
            {
                Object.values(state.effects).length
                    ? Object.values(state.effects).map((item, index) => React.createElement(item.component, {
                        key: `effect-${index}`,
                        currentHealth,
                        setCurrentHealth,
                    }))
                    : null
            }
            <NameBar { ...{ name, health, mana, currentHealth, currentMana }} />
        </VisualElement>
    </div>;
};

export default Player;