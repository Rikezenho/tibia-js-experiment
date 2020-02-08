import React from 'react';

export const getRandomTile = (name, options = {}) => {
    const keys = Object.keys(options);

    if (!keys || !keys.length) {
        console.error(`WARNING: ${name} doesn't have more than one visual element!`);
        return null;
    }

    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    return randomKey;
};

export default {
    zIndex: 0,
    walkable: true
};