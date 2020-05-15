import {Reducer} from 'redux';
import {Action, AuthenticationActionTypes} from '../../actions/index';
import {Authenticate} from '../'

const INITIAL_STATE: Authenticate = {
    isSignIn: null,
    userId: null,
}


export const authenticationReducer: Reducer<Authenticate, Action> = (authenticate: Authenticate = INITIAL_STATE, action: Action): Authenticate => {
    switch (action.type) {
        case AuthenticationActionTypes.signIn:
            return {
                ...authenticate,
                isSignIn: true,
                userId: action.payload.userId
            };
        case AuthenticationActionTypes.signOut:
            return {
                ...authenticate,
                isSignIn: false,
                userId: null
            }
                ;
        default:
            return authenticate;
    }
};