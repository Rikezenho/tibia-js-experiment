import React from 'react';
import VisualElements from './visual';

const SandBorder = (props = {}) => {
    const { type } = props;
    if (typeof VisualElements[type] !== 'function') {
        console.error(`WARNING: SandBorder with type ${type} not found!`);
        return null;
    }
    const VisualElement = VisualElements[type]();

    return <VisualElement className='sqm' {...props} />;
};

export const metadata = {
    walkable: true,
    slow: 0.5,
};

export default SandBorder;