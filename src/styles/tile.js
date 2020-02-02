import styled from 'styled-components';
import Base from './base';

export default styled(Base)`
    z-index: ${props => props.zIndex ? props.zIndex : 0};
`;