import React from 'react';
import VisualElement from './visual';
import Poisoned, { metadata as effectMetadata } from '../../../effects/Poisoned';

const Poison = (props = {}) => {
    return <VisualElement { ...props } />;
};

export const metadata = {
    effect: {
        name: 'poison',
        component: Poisoned,
        metadata: effectMetadata
    },
};

export default Poison;