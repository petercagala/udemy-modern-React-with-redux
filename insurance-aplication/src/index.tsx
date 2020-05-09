import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {departmentReducers} from './reducers/index';
import {createPolicy, deletePolicy} from "./actions/policyActions";
import {createClaim} from "./actions/claimActions";

// store represent antire redux aplication
const store = createStore(departmentReducers, applyMiddleware(thunk));

// store.dispatch(createPolicy("Peter", "Cagala", 50));
// store.dispatch(createPolicy("Katka", "Cagalova", 100));
// store.dispatch(createClaim("Katka", "Cagalova", 1000));
// store.dispatch(deletePolicy("1", "Peter", "Cagala"));
//
// console.log(store.getState());

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);
