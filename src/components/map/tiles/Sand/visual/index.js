import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';
import img from './sprite.png';

export const options = {
    Sand1: css`
        background-position: 0 0;
    `,
    Sand2: css`
        background-position: 0 -32px;
    `,
    Sand3: css`
        background-position: 0 -64px;
    `,
    Sand4: css`
        background-position: -32px 0;
    `,
    Sand5: css`
        background-position: -64px 0;
    `,
    Sand6: css`
        background-position: -32px -32px;
    `,
    Sand7: css`
        background-position: -32px -64px;
    `,
    Sand8: css`
        background-position: -64px -32px;
    `,
    Sand9: css`
        background-position: -64px -64px;
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