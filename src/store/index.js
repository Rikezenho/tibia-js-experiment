import React, { createContext, useReducer } from 'react';
import { log } from '../functions/gameUtils';
import developerReducer from './reducers/developer';
import hudReducer from './reducers/hud';
import playerReducer from './reducers/player';

const initialState = {
    player: {
        name: 'Player',
        maxHealth: 100,
        currentHealth: 100,
        maxMana: 100,
        currentMana: 100,
        baseSpeed: 300,
        currentSpeed: 0,
        walking: false,
        direction: 'down',
        pos: {
            x: 0,
            y: 0,
        },
    },
    hud: {
        message: '',
    },
    map: {
        tileWidth: 32,
    },
    developer: {
        debugMode: false,
    },
    viewport: {
        initialX: 0,
        iniitalY: 0,
        finalX: 7,
        finalY: 7,
    }
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const mappedCallbacks = {
        ...developerReducer,
        ...hudReducer,
        ...playerReducer,
    };

    const [state, dispatch] = useReducer((state, action) => {
        if (!action.type) {
            throw new Error('Action type missing in dispatch!');
        }
        if (mappedCallbacks[action.type]) {
            if (state.developer.debugMode) {
                log('store', `Action ${action.type} dispatched!`, 'Action payload:', action.payload);
            }
            return mappedCallbacks[action.type](state, action);
        } else {
            throw new Error('Action type not found!');
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };