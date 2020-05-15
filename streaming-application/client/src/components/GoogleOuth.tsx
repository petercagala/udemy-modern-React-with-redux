import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
import {signInAction, signOutAction} from "../actions/";

interface GoogleOAuthProps {
    signInAction: Function;
    signOutAction: Function;
    isSignedIn: boolean | null;
}

interface GoogleOuthState {
    auth: gapi.auth2.GoogleAuth | null;
}

class _GoogleOuth extends React.Component<GoogleOAuthProps, GoogleOuthState> {

    constructor(props: GoogleOAuthProps, state: GoogleOuthState) {
        super(props);

        this.state = {
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

                        // initalization of update out state in redux store
                        this.handleAuthChange(this.state.auth?.isSignedIn.get());
                        // Nastavime listenera na isSignedIn object. Ked sa na nom nieco zmeni, spusti sa arrow function
                        this.state.auth?.isSignedIn?.listen(this.handleAuthChange);

                    }
                );
        });
    }

    private handleAuthChange = (isSignedIn: boolean | undefined): void => {
        console.log(`handleAuthChange: ${isSignedIn}`);

        if(isSignedIn) {
            this.props.signInAction();
        } else{
            this.props.signOutAction();
        }
    }

    private renderAutButton(): JSX.Element | null {
        console.log(`renderAutButton: ${this.props.isSignedIn}`);

        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn === false) {
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

const mapStateToProps = (state: StoreState): {isSignedIn: boolean | null} => {
    return {
        isSignedIn: state.authenticate.isSignIn,
    };
}

export const GoogleOuth = connect(
    mapStateToProps,
    {
        signInAction: signInAction,
        signOutAction: signOutAction,
    }
)(_GoogleOuth);
