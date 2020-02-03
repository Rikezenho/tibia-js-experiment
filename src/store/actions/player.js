export const setPlayerPos = (pos) => ({
    type: 'SET_PLAYER_POS',
    payload: pos,
});
export const loseHealth = (damage) => ({
    type: 'LOSE_HP',
    payload: damage,
});
export const loseMana = (mana) => ({
    type: 'LOSE_MANA',
    payload: mana,
});
export const addHealth = (health) => ({
    type: 'ADD_HP',
    payload: health,
});
export const addMana = (mana) => ({
    type: 'ADD_MANA',
    payload: mana,
});
export const addMaxHealth = (health) => ({
    type: 'PERMANENTLY_ADD_HP',
    payload: health,
});
export const addMaxMana = (mana) => ({
    type: 'PERMANENTLY_ADD_MANA',
    payload: mana,
});