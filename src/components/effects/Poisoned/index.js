import React from 'react';
import VisualElement from './visual';
import { loseHealth } from '../../../store/actions/player';
import { setMessage } from '../../../store/actions/hud';
import { store } from '../../../store';

export const metadata = {
    damage: 20,
    interval: 5 * 1000,
    duration: 30 * 1000,
    animationDuration: 1000,
};

const Poisoned = (props = {}) => {
    const { state: globalState, dispatch } = React.useContext(store);

    const [times, setTimes] = React.useState(Math.ceil(metadata.duration / metadata.interval));
    const [doEffect, setDoEffect] = React.useState(false);

    React.useEffect(() => {
        if (times) {
            setTimeout(() => {
                setDoEffect(true);
                setTimes(times - 1);
                setTimeout(() => setDoEffect(false), metadata.animationDuration);
                dispatch(setMessage(`You lose ${metadata.damage} hitpoints.`));
                dispatch(loseHealth(metadata.damage));
            }, metadata.interval);
        }
    }, [times]);
    
    return <VisualElement {...{
        ...props, ...metadata, doEffect
     }} />;
};

export default Poisoned;