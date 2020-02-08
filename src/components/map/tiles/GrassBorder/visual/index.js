import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';

import topBorder64 from './item_304.png';
import leftBorder64 from './item_307.png';
import bottomBorder64 from './item_407.png';
import rightBorder64 from './item_618.png';

import topLeftCorner32 from './item_312.png';
import topRightCorner32 from './item_313.png';
import bottomLeftCorner32 from './item_314.png';
import bottomRightCorner32 from './item_315.png';

import topLeftTip32 from './item_308.png';
import topRightTip32 from './item_309.png';
import bottomLeftTip32 from './item_310.png';
import bottomRightTip32 from './item_311.png';

export const options = {
    /* -- edges -- */
    TopBorder1: css`
        background-image: url(${topBorder64});
    `,
    TopBorder2: css`
        background-image: url(${topBorder64});
        background-position: -32px 0;
    `,
    LeftBorder1: css`
        background-image: url(${leftBorder64});
    `,
    LeftBorder2: css`
        background-image: url(${leftBorder64});
        background-position: 0 -32px;
    `,
    BottomBorder1: css`
        background-image: url(${bottomBorder64});
    `,
    BottomBorder2: css`
        background-image: url(${bottomBorder64});
        background-position: -32px 0;
    `,
    RightBorder1: css`
        background-image: url(${rightBorder64});
    `,
    RightBorder2: css`
        background-image: url(${rightBorder64});
        background-position: 0 -32px;
    `,
    /* -- corners -- */
    TopLeftCorner: css`
        background-image: url(${topLeftCorner32});
    `,
    TopRightCorner: css`
        background-image: url(${topRightCorner32});
    `,
    BottomLeftCorner: css`
        background-image: url(${bottomLeftCorner32});
    `,
    BottomRightCorner: css`
        background-image: url(${bottomRightCorner32});
    `,
    /* -- tips -- */
    TopLeftTip: css`
        background-image: url(${topLeftTip32});
    `,
    TopRightTip: css`
        background-image: url(${topRightTip32});
    `,
    BottomLeftTip: css`
        background-image: url(${bottomLeftTip32});
    `,
    BottomRightTip: css`
        background-image: url(${bottomRightTip32});
    `,
};

export default styled(Base)`
    ${({ type }) => (
        type
            ? options[type]
            : options[Object.keys(options).shift()]
    )}
`;