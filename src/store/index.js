import React, { createContext, useReducer } from 'react';
import { setMessage } from './actions/hud';

const initialState = {
    currentPlayer: {
        pos: {
            x: 2,
            y: 2,
        },
    },
    player: {
        name: 'Player',
        maxHealth: 100,
        currentHealth: 100,
        maxMana: 100,
        currentMana: 100,
        baseSpeed: 4,
    },
    hud: {
        message: '',
    },
    map: {
        tileWidth: 32,
    }
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case 'LOSE_HP':
            return { ...state, player: { ...state.player, currentHealth: state.player.currentHealth - action.payload } };
        case 'LOSE_MANA':
            return { ...state, player: { ...state.player, currentMana: state.player.currentMana - action.payload } };
        case 'ADD_HP':
            return { ...state, player: { ...state.player, currentHealth: state.player.currentHealth + action.payload } };
        case 'ADD_MANA':
            return { ...state, player: { ...state.player, currentMana: state.player.currentMana + action.payload } };
        case 'PERMANENTLY_ADD_HP':
            return { ...state, player: { ...state.player, maxHealth: state.player.maxHealth + action.payload } };
        case 'PERMANENTLY_ADD_MANA':
            return { ...state, player: { ...state.player, maxMana: state.player.maxMana + action.payload } };
        case 'SET_PLAYER_POS':
            return { ...state, currentPlayer: { ...state.currentPlayer, pos: action.payload } };
        case 'SET_MESSAGE':
            return { ...state, hud: { message: action.payload } };
        default:
            throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };