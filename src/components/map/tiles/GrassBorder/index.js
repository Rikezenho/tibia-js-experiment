import React from 'react';
import VisualElements from './visual';

const GrassBorder = (props = {}) => {
    const { type } = props;
    if (typeof VisualElements[type] !== 'function') {
        console.error(`WARNING: GrassBorder with type ${type} not found!`);
        return null;
    }
    const VisualElement = VisualElements[type]();

    return <VisualElement className='sqm' {...props} />;
};

export const metadata = {
    walkable: true,
    slow: 0.15,
};

export default GrassBorder;