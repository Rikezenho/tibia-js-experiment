import styled, { keyframes } from 'styled-components';
import Base from '../../../../../styles/field';
import img from './sprite.png';

const animationKeyframes = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 -100%;
    }
`

export default styled(Base)`
    background-image: url(${img});
    animation: ${animationKeyframes} 1s steps(5) infinite;
`;