import React from 'react';
import fields from '../components/map/fields/**/*.js';
import tiles from '../components/map/tiles/**/*.js';

const components = {
    fields,
    tiles
};

export const prepareStack = (stack = [], { index, top, left }) =>
    stack.map((item, currIndex) => {
            const [type, name] = (item || '').split(':');
            if (!type || !name) {
                return null;
            }
            return React.createElement(components[type][name].index.default, {
                key: `tile-${index}-${currIndex}`,
                zIndex: currIndex,
                top,
                left,
            });
        })
        .filter((item) => !!item);

export const allowedMove = (map = {}, { x, y }) => typeof map[`${x}:${y}:0`] !== 'undefined';