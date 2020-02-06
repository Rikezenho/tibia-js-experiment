import React from 'react';
import { RandomTile } from '../base';
import VisualElements from './visual';

const Sand = (props = {}) => {
    return RandomTile('Sand', VisualElements, props);
};

export const metadata = {
    slow: 0.7,
};

export default Sand;