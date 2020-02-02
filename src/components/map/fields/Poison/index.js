import React from 'react';
import VisualElement from './visual';
import { baseProps } from '../base';

export default (props = {}) => {
    const myProps = { ...baseProps, ...{
        damage: 10,
        interval: 2000,
    }, ...props };

    return <VisualElement { ...myProps } />;
};