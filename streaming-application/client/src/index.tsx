import React from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import {App} from './components/App'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';
import {BrowserRouter, HashRouter, Router} from 'react-router-dom';

// https://github.com/zalmoxisus/redux-devtools-extension#usage
// redux-devtools-extension
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// store represent antire redux aplication
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        {/*<HashRouter>*/}
        {/*    <App/>*/}
        {/*</HashRouter>*/}
    </Provider>,
    document.getElementById('root')
);
