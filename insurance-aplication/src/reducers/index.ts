import {combineReducers, ReducersMapObject} from 'redux';
import {accountingReducer, claimsReducer} from "./reducers";

export interface Claim {
    firstName: string;
    lastName: string;
    claimAmount: number;
}

export interface Policy {
    firstName: string;
    lastName: string;
    cash: number;
}

export interface StoreState {
    oldListOfClaims: Claim[];
    bagOfMoney: number;

}


export const reducers = combineReducers<StoreState>({
        oldListOfClaims: claimsReducer,
        bagOfMoney: accountingReducer,
    }
);