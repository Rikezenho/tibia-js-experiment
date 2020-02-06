import styled from 'styled-components';
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

export default {
    /* -- edges -- */
    TopBorder1: () => styled(Base)`
        background-image: url(${topBorder64});
    `,
    TopBorder2: () => styled(Base)`
        background-image: url(${topBorder64});
        background-position: -32px 0;
    `,
    LeftBorder1: () => styled(Base)`
        background-image: url(${leftBorder64});
    `,
    LeftBorder2: () => styled(Base)`
        background-image: url(${leftBorder64});
        background-position: 0 -32px;
    `,
    BottomBorder1: () => styled(Base)`
        background-image: url(${bottomBorder64});
    `,
    BottomBorder2: () => styled(Base)`
        background-image: url(${bottomBorder64});
        background-position: -32px 0;
    `,
    RightBorder1: () => styled(Base)`
        background-image: url(${rightBorder64});
    `,
    RightBorder2: () => styled(Base)`
        background-image: url(${rightBorder64});
        background-position: 0 -32px;
    `,
    /* -- corners -- */
    TopLeftCorner: () => styled(Base)`
        background-image: url(${topLeftCorner32});
    `,
    TopRightCorner: () => styled(Base)`
        background-image: url(${topRightCorner32});
    `,
    BottomLeftCorner: () => styled(Base)`
        background-image: url(${bottomLeftCorner32});
    `,
    BottomRightCorner: () => styled(Base)`
        background-image: url(${bottomRightCorner32});
    `,
    /* -- tips -- */
    TopLeftTip: () => styled(Base)`
        background-image: url(${topLeftTip32});
    `,
    TopRightTip: () => styled(Base)`
        background-image: url(${topRightTip32});
    `,
    BottomLeftTip: () => styled(Base)`
        background-image: url(${bottomLeftTip32});
    `,
    BottomRightTip: () => styled(Base)`
        background-image: url(${bottomRightTip32});
    `,
};