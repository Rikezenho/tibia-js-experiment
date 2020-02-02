import React from 'react';
import fields from '../components/map/fields/**/*.js';
import tiles from '../components/map/tiles/**/*.js';
import terrain from '../components/map/terrain/**/*.js';

const components = {
    fields,
    tiles,
    terrain,
};

export const prepareStack = (stack = [], { index, top, left }) =>
    stack.map((item, currIndex) => {
            const [type, name] = (item || '').split(':');
            if (!type || !name) {
                return null;
            }
            const reactElement = React.createElement(components[type][name].index.default, {
                key: `tile-${index}-${currIndex}`,
                zIndex: currIndex,
                top,
                left,
            });
            return reactElement;
        })
        .filter((item) => !!item);

export const allowedMove = (map = {}, { x, y }) => {
    return (
        typeof map[`${x}:${y}:0`] !== 'undefined'
        || (map[`${x}:${y}:0`] && map[`${x}:${y}:0`].some((stackItem) => stackItem.props.walkable === false))
    );
};