import { prepareStack } from './functions';
import stringMap, { mapInfo } from '../../map';

const [tileWidth, tileHeight] = [32, 32];
const map = JSON.parse(stringMap);

const mapParser = () => {
    const parsedMap = map;
    
    Object.keys(map).forEach((item, index) => {
        const [x, y, z] = item.split(':');
        const stack = map[item];
        parsedMap[item] = prepareStack(stack, { index, left: x * tileWidth, top: y * tileHeight, axis: item });
    });

    return {
        map: parsedMap,
        tileWidth,
        tileHeight,
        mapInfo,
    }
};

export default mapParser();