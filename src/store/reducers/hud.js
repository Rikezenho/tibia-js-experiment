export default {
    'SET_MESSAGE': (state, action) => {
        return { ...state, hud: { ...state.hud, message: action.payload } };
    }
};