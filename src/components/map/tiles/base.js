import React from 'react';

export const RandomTile = (name, VisualElements = {}, props) => {
    if (!Object.keys(VisualElements) || !Object.keys(VisualElements).length) {
        console.error(`WARNING: ${name} doesn't have more than one visual element!`);
        return null;
    }

    const keys = Object.keys(VisualElements);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    const VisualElement = VisualElements[randomKey]();
    return <VisualElement className='sqm' {...props} />;
};

export default {
    zIndex: 0,
    walkable: true
};