import {AnyAction} from "redux";
import {AuthenticationActionTypes} from '../';

export interface SignInAction extends AnyAction {
    type: AuthenticationActionTypes.signIn;
}

export interface SignOutAction extends AnyAction {
    type: AuthenticationActionTypes.signOut;
}


export const signInAction = (): SignInAction => {
    const signInAction: SignInAction = {
        type: AuthenticationActionTypes.signIn,
    }

    return signInAction;
};

export const signOutAction = (): SignOutAction => {
    const signOutAction: SignOutAction = {
        type: AuthenticationActionTypes.signOut,
    }
    return signOutAction;
}