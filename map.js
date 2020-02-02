export const mapInfo = {
    minX: 0,
    minY: 0,
    maxX: 15,
    maxY: 15,
    minZ: -7,
    maxZ: 8,
};

const finalMap = {};
const tileItems = {
    '2:3:0': {
        items: ['fields:Poison']
    },
    '6:5:0': {
        items: ['terrain:GroundSpikes']
    }
};

for (let x = mapInfo.minX; x < mapInfo.maxX; x++) {
    for (let y = mapInfo.minY; y < mapInfo.maxY; y++) {
        let stack = [
            'tiles:Grass'
        ];

        const item = tileItems[`${x}:${y}:0`];
        if (item) {
            stack = [].concat(stack, [...item.items]);
        }

        finalMap[`${x}:${y}:0`] = stack;
    }
}

const stringMap = JSON.stringify(finalMap);

export default stringMap;