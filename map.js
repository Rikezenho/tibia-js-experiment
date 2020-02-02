import Grass from "./src/components/map/tiles/Grass";
import Poison from "./src/components/map/fields/Poison";

const minX = 0;
const minY = 0;
const maxX = 15;
const maxY = 15;

const finalMap = [];

for (let x = minX; x < maxX; x++) {
    for (let y = minY; y < maxY; y++) {
        const stack = [
            Grass
        ];

        if (x === 2 && y === 3) {
            stack.push(Poison);    
        }

        finalMap.push({
            x,
            y,
            stack,
        });
    }
}

export default finalMap;