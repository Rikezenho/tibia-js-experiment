import React from 'react';
import { getRandomTile } from '../base';
import VisualElement, { options } from './visual';

const Water = (props = {}) => {
    const randomTile = getRandomTile('Water', options);
    return <VisualElement {...props} tile={randomTile} className='sqm' />;
};

export const metadata = {
    walkable: false,
};

export default Water;