import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';

import {Route, Switch} from 'react-router-dom';
import {StreamCreate} from './streams/StreamCreate';
import {StreamDelete} from './streams/StreamDelete';
import {StreamEdit} from './streams/StreamEdit';
import {StreamList} from './streams/StreamList';
import {StreamShow} from './streams/StreamShow';


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
                <Switch>
                    <Route path={"/"} exact component={StreamList}></Route>
                    <Route path={"/streams/new"} exact component={StreamCreate}></Route>
                    <Route path={"/streams/edit"} exact component={StreamEdit}></Route>
                    <Route path={"/streams/delete"} exact component={StreamDelete}></Route>
                    <Route path={"/streams/show"} exact component={StreamShow}></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const App = connect(
    mapStateToProps,
    {}
)(_App);
