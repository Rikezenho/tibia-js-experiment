import React from 'react';
import borderedText from '../../../styles/borderedText';
import styled from 'styled-components';
import { setMessage } from '../../../store/actions/hud';
import { store } from '../../../store';

const Container = styled(borderedText)`
    color: white;
    text-align: center;
    font-weight: bold;
    padding-bottom: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
`;

const ScreenMessage = (props) => {
    const { state: globalState, dispatch } = React.useContext(store);
    const {
        hud: {
            message
        }
    } = globalState;

    React.useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setMessage(''));
        }, 4000);
        return () => {
            clearTimeout(timer);
        };
    }, [message]);

    return <Container>
        {message}
    </Container>;
};

export default ScreenMessage;