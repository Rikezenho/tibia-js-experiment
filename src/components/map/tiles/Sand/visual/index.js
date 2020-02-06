import styled from 'styled-components';
import Base from '../../../../../styles/tile';
import img from './sprite.png';

export default {
    Sand1: () => styled(Base)`
        background-image: url(${img});
    `,
    Sand2: () => styled(Base)`
        background-image: url(${img});
        background-position: 0 -32px;
    `,
    Sand3: () => styled(Base)`
        background-image: url(${img});
        background-position: 0 -64px;
    `,
    Sand4: () => styled(Base)`
        background-image: url(${img});
        background-position: -32px 0;
    `,
    Sand5: () => styled(Base)`
        background-image: url(${img});
        background-position: -64px 0;
    `,
    Sand6: () => styled(Base)`
        background-image: url(${img});
        background-position: -32px -32px;
    `,
    Sand7: () => styled(Base)`
        background-image: url(${img});
        background-position: -32px -64px;
    `,
    Sand8: () => styled(Base)`
        background-image: url(${img});
        background-position: -64px -32px;
    `,
    Sand9: () => styled(Base)`
        background-image: url(${img});
        background-position: -64px -64px;
    `,
};