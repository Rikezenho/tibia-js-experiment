import React from 'react';
import VisualElement from './visual';
import { baseProps } from '../base';

export default (props) => {
    const myProps = { ...baseProps, ...{
        walkable: true
    }, ...props };
    return <VisualElement { ...myProps } />;
}