import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';
import img from './sprite.png';

export const options = {
    Grass1: css`
        background-position: 0 0;
    `,
    Grass2: css`
        background-position: 0 -32px;
    `,
    Grass3: css`
        background-position: -64px 0;
    `,
    Grass4: css`
        background-position: -64px -32px;
    `,
};

export default styled(Base)`
    background-image: url(${img});
    ${({ tile }) => (
        tile
            ? options[tile]
            : options[Object.keys(options).shift()]
    )}
`;