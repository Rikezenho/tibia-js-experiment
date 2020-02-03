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
            const component = components[type][name].index;
            const reactElement = React.createElement(component.default, {
                ...components[type].base.default,
                ...component.metadata,
                ...{
                    key: `tile-${index}-${currIndex}`,
                    zIndex: currIndex,
                    top,
                    left,
                }
            });
            return reactElement;
        })
        .filter((item) => !!item);

export const shouldNotCompleteMove = (map = {}, { x, y }) => {
    console.log(map[`${x}:${y}:0`]);
    return (
        typeof map[`${x}:${y}:0`] === 'undefined'
        || (map[`${x}:${y}:0`] && map[`${x}:${y}:0`].some((stackItem) => stackItem.props.walkable === false))
    );
};

export const effectsInSqm = (map = {}, { x, y }) => {
    const sqmEffects = map[`${x}:${y}:0`].filter((stackItem) => stackItem.props.effect);
    if (!sqmEffects.length) {
        return [];
    }
    const effects = sqmEffects.map((item) => item.props.effect);
    return effects;
};