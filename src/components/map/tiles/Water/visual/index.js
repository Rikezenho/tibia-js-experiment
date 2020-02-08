import styled, { keyframes, css } from 'styled-components';
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

const animationRule = css`
    animation: ${animationKeyframes} 2s steps(12) infinite;
`;

export const options = {
    Water1: `
        background-image: url(${sprite1});
    `,
    Water2: `
        background-image: url(${sprite2});
    `,
    Water3: `
        background-image: url(${sprite3});
    `,
    Water4: `
        background-image: url(${sprite4});
    `,
    Water5: `
        background-image: url(${sprite5});
    `,
    Water6: `
        background-image: url(${sprite6});
    `
};

export default styled(Base)`
    ${({ tile }) => (
        tile
            ? options[tile]
            : options[Object.keys(options).shift()]
    )}
    ${animationRule}
`;