import React from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import {App} from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';
import {selectAllSongs} from "./actions";

// store represent antire redux aplication
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
