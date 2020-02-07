import React from 'react';
import { RandomTile } from '../base';
import VisualElements from './visual';

const Water = (props = {}) => {
    return RandomTile('Water', VisualElements, props);
};

export const metadata = {
    walkable: false,
};

export default Water;