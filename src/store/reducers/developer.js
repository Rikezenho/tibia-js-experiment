export default {
    'TOGGLE_DEBUG_MODE': (state, action) => {
        return { ...state, developer: { ...state.developer, debugMode: !state.developer.debugMode } };
    },
};