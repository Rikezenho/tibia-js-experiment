import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import parsedMap from './src/map';
import useKeyPress from './src/hooks/useKeyPress';
import Player from './src/components/alive/Player';
import { store, StateProvider } from './src/store';
import ScreenMessage from './src/components/hud/ScreenMessage';

import './src/scss/index.scss';

const App = () => {
    const {
        map = [],
        tileWidth,
        tileHeight,
        mapInfo: {
            maxX,
            maxY,
        },
    } = React.useMemo(() => parsedMap, []);
    
    const { state: globalState } = React.useContext(store);
    const {
        currentPlayer: {
            pos
        },
    } = globalState;

    const upKey = useKeyPress('w');
    const leftKey = useKeyPress('a');
    const downKey = useKeyPress('s');
    const rightKey = useKeyPress('d');

    return (<div className='game' style={{ width: maxX * tileWidth, height: maxY * tileHeight }}>
        <ScreenMessage />
        <React.Fragment>
            <Player
                {...{
                    top: pos.y * tileHeight,
                    left: pos.x * tileWidth,
                    upKey,
                    leftKey,
                    downKey,
                    rightKey
                }}
            />
            {
                Object.values(map)
            }
        </React.Fragment>
    </div>);
};

ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>
, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}