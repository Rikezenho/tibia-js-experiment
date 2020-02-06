import React from 'react';
import { RandomTile } from '../base';
import VisualElements from './visual';

const Grass = (props = {}) => {
    return RandomTile('Grass', VisualElements, props);
};

export default Grass;