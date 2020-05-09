import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';

import './App.css';


interface AppProps {

}

interface AppState {

}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps, state: AppState) {
        super(props);

        this.state = {

        }
    }

}

const mapStateToProps = (state: StoreState): any => {

}

export const App = connect(
    mapStateToProps,
    {}
    )(_App);
