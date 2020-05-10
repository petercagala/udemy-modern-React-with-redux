import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
import {SongList} from './song/SongList';

import './App.css';


interface AppProps {

}

interface AppState {

}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps, state: AppState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div>
                <SongList/>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {name: string} => {
    return {
        name: "Peter",
    };
}

export const App = connect(
    mapStateToProps,
    {}
)(_App);
