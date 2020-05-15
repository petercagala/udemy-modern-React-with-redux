import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';

interface GoogleOuthProps {

}

interface GoogleOuthState {

}

class _GoogleOuth extends React.Component<GoogleOuthProps, GoogleOuthState> {

    constructor(props: GoogleOuthProps, state: GoogleOuthState) {
        super(props);

        this.state = {}
    }


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // we have to dowlnload client portion of the library
            // scope: what diffrent part of the users profile of the user account that we want to access to
            // init: initializaton of the library only, is not going to take the user through the process
            // clientId: id mna ako klienta google v https://console.developers.google.com/apis/credentials , teda na
            // identifikaciu mojho developerskeho uctu na google a identifikaciu mojho projektu, v ramci ktore ziadam
            // o autentifikaciu nejakeho google klienta
            window.gapi.client.init({
                clientId: "727390121568-6qi3hh4n35i6kkm6ms5v5n9q7nube1gg.apps.googleusercontent.com",
                scope: 'email',
            })
        });




    }

    render() {
        return (
            <div className="ui container">
                <h5>Google Auth</h5>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const GoogleOuth = connect(
    mapStateToProps,
    {}
)(_GoogleOuth);
