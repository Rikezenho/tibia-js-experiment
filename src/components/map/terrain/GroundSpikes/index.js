import React from 'react';
import VisualElement from './visual';
import { baseProps } from '../base';

const GroundSpikes = (props) => {
    const myProps = { ...baseProps, ...props };
    return <VisualElement { ...myProps } />;
};

export default GroundSpikes;