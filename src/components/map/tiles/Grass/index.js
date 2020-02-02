import React from 'react';
import VisualElement from './visual';
import { baseProps } from '../base';

const Grass = (props) => {
    const myProps = { ...baseProps, ...{
        walkable: true
    }, ...props };
    return <VisualElement { ...myProps } />;
};

export default Grass;