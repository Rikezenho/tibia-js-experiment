import React from 'react';
import NameBar from '../../hud/NameBar';
import VisualElement from './visual';
import baseProps from '../base';

const canDoTheWalk = (bounds, newPos) => {
    if (newPos.x < bounds.minX) {
        return false;
    }
    if (newPos.y < bounds.minY) {
        return false;
    }
    if (newPos.x > bounds.maxX) {
        return false;
    }
    if (newPos.y > bounds.maxY) {
        return false;
    }
    return true;
};

export default (props = {}) => {
    const [state, setState] = React.useState({ ...baseProps, ...props });
    const {
        upKey,
        leftKey,
        downKey,
        rightKey,
        bounds,
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
        if (!canDoTheWalk(bounds, newPos)) {
            allowWalk(true);
            return;
        }

        setState(state => ({ ...state, direction, left, top, walking: true }));
        setTimeout(() => {
            setState(state => ({ ...state, walking: false }));
            setPlayerPos(newPos);
            allowWalk(true);
        }, 250);
    };

    React.useEffect(() => {
        if (!canWalk) {
            return;
        }
        if (upKey) walk('up');
        if (downKey) walk('down');
        if (leftKey) walk('left');
        if (rightKey) walk('right');
    }, [upKey, downKey, leftKey, rightKey]);

    return <div style={{ position: 'relative' }}>
        <VisualElement { ...state }>
            <NameBar { ...{ name, health, mana, currentHealth, currentMana }} />
        </VisualElement>
    </div>;
}