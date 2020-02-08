export const mapInfo = {
    minX: 0,
    minY: 0,
    maxX: 20,
    maxY: 20,
    minZ: -7,
    maxZ: 8,
};

const finalMap = {};
const tileItems = {
    '2:3:0': {
        items: ['fields:Poison']
    },
    '6:4:0': {
        items: ['terrain:GroundSpikes']
    }
};
const lake = {
    '5:5:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopLeftCorner',
        ]
    },
    '5:6:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.LeftBorder1',
        ]
    },
    '5:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomLeftCorner',
        ]
    },
    '6:5:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopBorder1',
        ]
    },
    '6:6:0': {
        items: ['tiles:Water',]
    },
    '6:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomBorder1',
        ]
    },
    '7:5:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopRightCorner',
        ]
    },
    '7:6:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopRightTip',
        ]
    },
    '7:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomBorder2',
        ]
    },
    '8:7:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.BottomRightCorner',
        ]
    },
    '8:6:0': {
        items: [
            'tiles:Water',
            'tiles:GrassBorder.TopRightCorner',
        ]
    },
};

const sand = {
    /* -- borders -- */
    '7:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopLeftTip',
        ]
    },
    '8:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '9:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '10:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '11:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopBorder',
        ]
    },
    '12:8:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopRightTip',
        ]
    },
    '12:9:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.RightBorder',
        ]
    },
    '12:10:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomLeftTip',
        ]
    },
    '11:10:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.TopLeftCorner',
        ]
    },
    '11:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomLeftTip',
        ]
    },
    '10:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomBorder',
        ]
    },
    '9:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomBorder',
        ]
    },
    '8:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomBorder',
        ]
    },
    '7:11:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.BottomRightTip',
        ]
    },
    '7:10:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.LeftBorder',
        ]
    },
    '7:9:0': {
        items: [
            'tiles:Grass',
            'tiles:SandBorder.LeftBorder',
        ]
    },
    /* -- inside -- */
    '8:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '9:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '10:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '11:9:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '8:10:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '9:10:0': {
        items: [
            'tiles:Sand',
        ]
    },
    '10:10:0': {
        items: [
            'tiles:Sand',
        ]
    },
};

for (let x = mapInfo.minX; x < mapInfo.maxX; x++) {
    for (let y = mapInfo.minY; y < mapInfo.maxY; y++) {
        let stack = [
            'tiles:Grass'
        ];
        
        const lakeSqm = lake[`${x}:${y}:0`];
        if (lakeSqm) {
            stack = lakeSqm.items;
        }
        
        const sandSqm = sand[`${x}:${y}:0`];
        if (sandSqm) {
            stack = sandSqm.items;
        }

        const item = tileItems[`${x}:${y}:0`];
        if (item) {
            stack = [].concat(stack, [...item.items]);
        }

        finalMap[`${x}:${y}:0`] = stack;
    }
}

const stringMap = JSON.stringify(finalMap);

export default stringMap;