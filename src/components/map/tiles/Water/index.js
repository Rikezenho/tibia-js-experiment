import React from 'react';
import VisualElement from './visual';

const Water = (props = {}) => {
    return <VisualElement { ...props } />;
};

export const metadata = {
    walkable: false,
};

export default Water;