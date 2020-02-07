import styled from 'styled-components';

export default styled.div`
    position: absolute;
    display: inline-block;
    width: ${props => props.width ? props.width : 32};
    height: ${props => props.height ? props.height : 32};
    z-index: ${props => props.zIndex ? props.zIndex : 0};
    top: ${props => typeof props.top === 'undefined' ? 'auto' : props.top};
    left: ${props => typeof props.left === 'undefined' ? 'auto' : props.left};
`;

