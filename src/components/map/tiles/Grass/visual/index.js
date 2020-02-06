import styled from 'styled-components';
import Base from '../../../../../styles/tile';
import img from './sprite.png';

export default {
    Grass1: () => styled(Base)`
        background-image: url(${img});
    `,
    Grass2: () => styled(Base)`
        background-image: url(${img});
        background-position: 0 -32px;
    `,
    Grass3: () => styled(Base)`
        background-image: url(${img});
        background-position: -64px 0;
    `,
    Grass4: () => styled(Base)`
        background-image: url(${img});
        background-position: -64px -32px;
    `,
};