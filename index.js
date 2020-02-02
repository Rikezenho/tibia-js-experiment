import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import parsedMap from './src/map';
import useKeyPress from './src/hooks/useKeyPress';
import Player from './src/components/alive/Player';

import './src/scss/index.scss';

const App = () => {
    const { map = [], tileWidth, tileHeight } = React.useMemo(() => parsedMap, []);
    
    const [playerPos, setPlayerPos] = React.useState({
        x: 2,
        y: 2,
    });

    const upKey = useKeyPress('w');
    const leftKey = useKeyPress('a');
    const downKey = useKeyPress('s');
    const rightKey = useKeyPress('d');

    return (<div className='game'>
        <React.Fragment>
            <Player
                {...{ top: playerPos.y * tileHeight, left: playerPos.x * tileWidth, upKey, leftKey, downKey, rightKey }}
                playerPos={playerPos}
                setPlayerPos={setPlayerPos}
            />
            {
                Object.values(map)
            }
        </React.Fragment>
    </div>);
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}