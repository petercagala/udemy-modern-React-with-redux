import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';

import {Route, Switch} from 'react-router-dom';
import {Page1} from './Page1';
import {Page2} from './Page2';


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
                    {/*Ked tam nedam exact, zoberie aj nieco taketo http://localhost:3000/page2/esteNieco
                    Switch: Zabezpeci, ze sa zobrazi vzdy iba jeden komponent, ktory splna podmienky path.
                    Ak by sme Switch nedali, zobrazia sa vsetky komponenty, ktore splnaju podmienku*/}
                    <Route path={"/"} exact={true}  component={Page1}></Route>
                    <Route path={"/page2"} component={Page2}></Route>
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
