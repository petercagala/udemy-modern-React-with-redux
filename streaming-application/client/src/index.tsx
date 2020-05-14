import React from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import {App} from './components/App'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';
import {BrowserRouter, Router} from 'react-router-dom';

// store represent antire redux aplication
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
