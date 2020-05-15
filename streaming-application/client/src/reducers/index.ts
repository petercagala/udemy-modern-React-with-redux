import {combineReducers, ReducersMapObject} from 'redux';
import {authenticationReducer} from './reducers/authenticationReducer';

export interface Authenticate {
    isSignIn: boolean | null;
}

export interface StoreState {
    authenticate: Authenticate;
}


export const reducers = combineReducers<StoreState>({
    authenticate: authenticationReducer,
    }
);