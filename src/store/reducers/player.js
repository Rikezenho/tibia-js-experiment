export default {
    'LOSE_HP': (state, action) => {
        return { ...state, player: { ...state.player, currentHealth: state.player.currentHealth - action.payload } };
    },
    'LOSE_MANA': (state, action) => {
        return { ...state, player: { ...state.player, currentMana: state.player.currentMana - action.payload } };
    },
    'ADD_HP': (state, action) => {
        return { ...state, player: { ...state.player, currentHealth: state.player.currentHealth + action.payload } };
    },
    'ADD_MANA': (state, action) => {
        return { ...state, player: { ...state.player, currentMana: state.player.currentMana + action.payload } };
    },
    'PERMANENTLY_ADD_HP': (state, action) => {
        return { ...state, player: { ...state.player, maxHealth: state.player.maxHealth + action.payload } };
    },
    'PERMANENTLY_ADD_MANA': (state, action) => {
        return { ...state, player: { ...state.player, maxMana: state.player.maxMana + action.payload } };
    },
    'SET_PLAYER_POS': (state, action) => {
        return { ...state, player: { ...state.player, pos: action.payload } };
    },
};