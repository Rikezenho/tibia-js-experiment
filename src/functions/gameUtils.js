export const log = (type, ...message) => {
    const groupStyles = (obj = {}) => {
        const keys = Object.keys(obj);
        const values = Object.keys(obj);
        return `font-size: 16px; padding: 3px; ${keys.map((item, index) => `${item}:${values[index]};`).join('')}`;
    };
    const styleConfig = {
        'store': {
            background: '#000',
            color: '#FFF',
        },
        'game': {
            background: '#B7FFDC',
        }
    };

    return console.log(`%c${type} log`, groupStyles(styleConfig[type]), ...message);
};