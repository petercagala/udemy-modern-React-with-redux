import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';


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
                <h2>Hi Peter, this is React</h2>
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
