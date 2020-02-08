import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';

import topBorder32 from './item_980.png';
import leftBorder32 from './item_983.png';
import bottomBorder32 from './item_979.png';
import rightBorder32 from './item_981.png';

import topLeftCorner32 from './item_988.png';
import topRightCorner32 from './item_989.png';
import bottomLeftCorner32 from './item_990.png';
import bottomRightCorner32 from './item_991.png';

import topLeftTip32 from './item_987.png';
import topRightTip32 from './item_986.png';
import bottomLeftTip32 from './item_984.png';
import bottomRightTip32 from './item_985.png';

export const options = {
    /* -- edges -- */
    TopBorder: css`
        background-image: url(${topBorder32});
    `,
    LeftBorder: css`
        background-image: url(${leftBorder32});
    `,
    BottomBorder: css`
        background-image: url(${bottomBorder32});
    `,
    RightBorder: css`
        background-image: url(${rightBorder32});
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