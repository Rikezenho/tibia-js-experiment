import styled, { keyframes } from 'styled-components';
import Base from '../../../../../styles/tile';

import sprite1 from './item_629.png';
import sprite2 from './item_630.png';
import sprite3 from './item_631.png';
import sprite4 from './item_632.png';
import sprite5 from './item_633.png';
import sprite6 from './item_634.png';

const animationKeyframes = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 -100%;
    }
`;

export default {
    Water1: () => styled(Base)`
        background-image: url(${sprite1});
        animation: ${animationKeyframes} 2s steps(12) infinite;
    `,
    Water2: () => styled(Base)`
        background-image: url(${sprite2});
        animation: ${animationKeyframes} 2s steps(12) infinite;
    `,
    Water3: () => styled(Base)`
        background-image: url(${sprite3});
        animation: ${animationKeyframes} 2s steps(12) infinite;
    `,
    Water4: () => styled(Base)`
        background-image: url(${sprite4});
        animation: ${animationKeyframes} 2s steps(12) infinite;
    `,
    Water5: () => styled(Base)`
        background-image: url(${sprite5});
        animation: ${animationKeyframes} 2s steps(12) infinite;
    `,
    Water6: () => styled(Base)`
        background-image: url(${sprite6});
        animation: ${animationKeyframes} 2s steps(12) infinite;
    `,
};