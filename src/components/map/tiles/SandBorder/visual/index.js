import styled from 'styled-components';
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

export default {
    /* -- edges -- */
    TopBorder: () => styled(Base)`
        background-image: url(${topBorder32});
    `,
    LeftBorder: () => styled(Base)`
        background-image: url(${leftBorder32});
    `,
    BottomBorder: () => styled(Base)`
        background-image: url(${bottomBorder32});
    `,
    RightBorder: () => styled(Base)`
        background-image: url(${rightBorder32});
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