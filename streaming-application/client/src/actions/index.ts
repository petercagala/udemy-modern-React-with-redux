import {AuthenticationActionTypes} from "./types/authenticationActionTypes";
import {signInAction, signOutAction} from "./actions/signInAction";
import {SignInAction, SignOutAction} from "./actions/signInAction";
import {Type as DefaultType} from './structures/Type';

export {AuthenticationActionTypes} from "./types/authenticationActionTypes";
export {signInAction, signOutAction} from './actions/signInAction';
export type Type = DefaultType;


export type Action = SignInAction | SignOutAction;