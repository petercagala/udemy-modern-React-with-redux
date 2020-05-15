import {AnyAction} from "redux";
import {AuthenticationActionTypes} from '../';

export interface SignInAction extends AnyAction {
    type: AuthenticationActionTypes.signIn;
    payload: {
        userId: string | null;
    }
}

export interface SignOutAction extends AnyAction {
    type: AuthenticationActionTypes.signOut;
}


export const signInAction = (userId: string | null): SignInAction => {
    const signInAction: SignInAction = {
        type: AuthenticationActionTypes.signIn,
        payload: {
            userId: userId,
        }
    }

    return signInAction;
};

export const signOutAction = (): SignOutAction => {
    const signOutAction: SignOutAction = {
        type: AuthenticationActionTypes.signOut,
    }
    return signOutAction;
}