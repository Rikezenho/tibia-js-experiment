import styled, { keyframes, css } from 'styled-components';
import Base from '../../../../styles/alive';
import idleImg from './idle.png';
import walkingImg from './walking.png';

const walkingKeyFramesMap = {
    up: {
        from: {
            left: '-32px',
            top: '-32px',
        },
        to: {
            left: '-32px',
            top: '-100%',
        },
    },
    down: {
        from: {
            left: '-288px',
            top: '-32px',
        },
        to: {
            left: '-288px',
            top: '-100%',
        },
    },
    left: {
        from: {
            left: '-416px',
            top: '-32px',
        },
        to: {
            left: '-416px',
            top: '-100%',
        },
    },
    right: {
        from: {
            left: '-160px',
            top: '-32px',
        },
        to: {
            left: '-160px',
            top: '-100%',
        },
    },
};

const walkingKeyFrameBuilder = (direction) => keyframes`
0% {
    background-position: ${walkingKeyFramesMap[direction].from.left} ${walkingKeyFramesMap[direction].from.top};
}
100% {
    background-position: ${walkingKeyFramesMap[direction].to.left} ${walkingKeyFramesMap[direction].to.top};
}
`;

const walkingAnimations = css`
    animation: ${({ direction }) => walkingKeyFrameBuilder(direction)} 0.25s steps(8);
`;

const backgrounds = css`
    background-position: ${({ direction }) => {
        if (direction === 'up') return `-32px -32px;`;
        if (direction === 'down') return `-288px -32px;`;
        if (direction === 'left') return `-416px -32px;`;
        if (direction === 'right') return `-160px -32px;`;
    }};
`;

export default styled(Base)`
    background-image: url(${({ walking }) => walking ? walkingImg : idleImg});
    ${backgrounds}
    ${({ walking }) => walking ? walkingAnimations : ''}
`;