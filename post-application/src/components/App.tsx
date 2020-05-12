import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
import {PostList} from './PostList';


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
            <div className="ui container">
                <h2>Hi Peter, this is React</h2>
                <PostList/>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {  } => {
    return {

    }
}

export const App = connect(
    mapStateToProps,
    {}
)(_App);