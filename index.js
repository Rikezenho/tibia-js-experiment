import React from 'react';
import ReactDOM from 'react-dom';
import Player from './src/components/alive/Player';
import { renderStack } from './src/functions';
import map from './map';
import useKeyPress from './src/hooks/useKeyPress';

import './src/scss/index.scss';

const [tileWidth, tileHeight] = [32, 32];
const bounds = map.reduce((acc, curr) => {
    if (curr.x < acc.minX) {
        acc.minX = curr.x;
    }
    if (curr.y < acc.minY) {
        acc.minY = curr.y;
    }
    if (curr.x > acc.maxX) {
        acc.maxX = curr.x;
    }
    if (curr.y > acc.maxY) {
        acc.maxY = curr.y;
    }
    return acc;
}, {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
});

const App = () => {
    const [playerPos, setPlayerPos] = React.useState({
        x: 0,
        y: 0,
    });

    const upKey = useKeyPress('w');
    const leftKey = useKeyPress('a');
    const downKey = useKeyPress('s');
    const rightKey = useKeyPress('d');

    return (<div>
        <Player
            {...{ top: playerPos.y * tileHeight, left: playerPos.x * tileWidth, upKey, leftKey, downKey, rightKey }}
            bounds={bounds}
            playerPos={playerPos}
            setPlayerPos={setPlayerPos}
        />
        {
            map.map((item, index) => {
                const { x, y, stack } = item;
                const stackItems = renderStack(stack, { index, left: x * tileWidth, top: y * tileHeight });
                return stackItems;
            })
        }
    </div>);
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}