import React from 'react';
import { RandomTile } from '../base';
import VisualElements from './visual';

const Sand = (props = {}) => {
    return RandomTile('Sand', VisualElements, props);
};

export default Sand;