import React from 'react';
import VisualElement from './visual';

export const metadata = {
    damage: 20,
    interval: 5 * 1000,
    duration: 30 * 1000,
    animationDuration: 1000,
};

const Poisoned = (props = {}) => {
    const {
        currentHealth,
        setCurrentHealth,
    } = props;
    const [times, setTimes] = React.useState(Math.ceil(metadata.duration / metadata.interval));
    const [doEffect, setDoEffect] = React.useState(false);

    React.useEffect(() => {
        console.log('rodada do poison', times);
        if (times) {
            setTimeout(() => {
                setDoEffect(true);
                setTimes(times - 1);
                setTimeout(() => setDoEffect(false), metadata.animationDuration);
                setCurrentHealth(currentHealth - metadata.damage);
            }, metadata.interval);
        }
    }, [times]);
    
    return <VisualElement {...{
        ...props, ...metadata, doEffect
     }} />;
};

export default Poisoned;