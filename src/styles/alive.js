import styled from 'styled-components';
import Base from './base';

export default styled(Base)`
    z-index: ${props => props.zIndex ? props.zIndex : 2};
    transition: left ${({ speed }) => speed ? speed : '0.25'}s, top ${({ speed }) => speed ? speed : '0.25'}s;
`;