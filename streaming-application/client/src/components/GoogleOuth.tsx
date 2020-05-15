import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';

interface GoogleOuthProps {

}

interface GoogleOuthState {
    isSignedIn: boolean | null;
}

class _GoogleOuth extends React.Component<GoogleOuthProps, GoogleOuthState> {

    constructor(props: GoogleOuthProps, state: GoogleOuthState) {
        super(props);

        this.state = {
            isSignedIn: false,
        }
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
                // po inicializacii  aplikacie (klienta) potrebujeme vytiahnut auth object, pomocou ktoreho
                // budeme pre nasu app autentifikovat usera pomocu google uctu
                .then(() => {
                    const auth: gapi.auth2.GoogleAuth = window.gapi.auth2.getAuthInstance();
                    this.setState({
                        isSignedIn: auth.isSignedIn.get(),
                    })
                })
        });
    }

    private renderAutButton(): JSX.Element {
        if(this.state.isSignedIn === null) {
            return (
                <div>
                    I don't know, if we are signed in!!!
                </div>
            );
        } else if(this.state.isSignedIn === false) {
            return (
                <div>
                    You are not signed in !!!
                </div>
            );
        } else {
            return (
                <div>
                    You are signed in, PERFECT !!!
                </div>
            );
        }



    }

    render() {
        return (
            <div className="ui container">
                {this.renderAutButton()}
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
