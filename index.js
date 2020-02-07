import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import parsedMap from './src/map';
import useKeyPress from './src/hooks/useKeyPress';
import Player from './src/components/alive/Player';
import { toggleDebugMode } from './src/store/actions/developer';
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
    
    const { state: globalState, dispatch } = React.useContext(store);
    const {
        currentPlayer: {
            pos
        },
        developer: {
            debugMode
        },
    } = globalState;

    React.useEffect(() => {
        window.addEventListener('developer:debugMode', () => {
            dispatch(toggleDebugMode());
        });
    }, []);

    const upKey = useKeyPress('w');
    const leftKey = useKeyPress('a');
    const downKey = useKeyPress('s');
    const rightKey = useKeyPress('d');

    return (<div className={`game ${debugMode ? 'debugMode' : ''}`} style={{ width: maxX * tileWidth, height: maxY * tileHeight }}>
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

window.utils = {};
window.utils.toggleDebugMode = () => {
    window.dispatchEvent(new Event('developer:debugMode'));
};

ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>
, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}