import styled, { keyframes, css } from 'styled-components';
import Base from '../../../../styles/effect';
import img from './sprite.png';
import { rules as borderedText } from '../../../../styles/borderedText';

const animationKeyframes = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 100%;
    }
`;

const damageKeyframes = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
`;

const animation = css`
    animation: ${animationKeyframes} ${({ animationDuration }) => animationDuration ? `${animationDuration / 1000}s` : 0} steps(11);
    &:before {
        content: "${({ damage }) => damage}";
        color: #00C103;
        position: absolute;
        left: 20%;
        bottom: 20%;
        font-weight: bold;
        ${borderedText}
        z-index: 3;
        animation: ${damageKeyframes} ${({ animationDuration }) => animationDuration ? `${animationDuration / 1000}s` : 0};
    }
`;

export default styled(Base)`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: 0 32px;
    ${({ doEffect }) => doEffect ? animation : ''};
`;