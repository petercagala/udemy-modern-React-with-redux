import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
// import GoogleAuth = gapi.auth2.GoogleAuth;

interface GoogleOuthProps {

}

interface GoogleOuthState {
    isSignedIn: boolean | null;
    auth: gapi.auth2.GoogleAuth | null;
}

class _GoogleOuth extends React.Component<GoogleOuthProps, GoogleOuthState> {

    constructor(props: GoogleOuthProps, state: GoogleOuthState) {
        super(props);

        this.state = {
            isSignedIn: null,
            auth: null,
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
                }
            )
                // po inicializacii  aplikacie (klienta) potrebujeme vytiahnut auth object, pomocou ktoreho
                // budeme pre nasu app autentifikovat usera pomocu google uctu
                .then(() => {
                        this.setState({
                                auth: window.gapi.auth2.getAuthInstance(),
                            }
                        )
                        this.setState({
                                isSignedIn: this.state.auth ? this.state.auth.isSignedIn.get() : null,
                            }
                        );
                        // Nastavime listenera na isSignedIn object. Ked sa na nom nieco zmeni, spusti sa arrow function
                        //handleAuthChange
                        this.state.auth?.isSignedIn?.listen(this.handleAuthChange);

                    }
                );
        });
    }

    private handleAuthChange = (): void => {
        this.setState(
            {
                isSignedIn: this.state.auth?  this.state.auth.isSignedIn.get(): null,
            }
        );
    }

    private renderAutButton(): JSX.Element | null {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn === false) {
            return (
                <button onClick={this.handleSignIn} className="ui red google button" >
                    <i className="google icon"></i>
                    Sign in with Google
                </button>
            );
        } else {
            return (
                <button onClick={this.handleSignOut} className="ui red google button" >
                    <i className="google icon"></i>
                    Sign out
                </button>
            );
        }
    }

     private handleSignIn = (): void => {
        this.state.auth?.signIn();
    };

    private handleSignOut = (): void => {
        this.state.auth?.signOut();
    };

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
