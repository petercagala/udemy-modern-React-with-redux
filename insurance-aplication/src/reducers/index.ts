import {combineReducers, ReducersMapObject} from 'redux';
import {accountingReducer, claimsReducer, policiesReducer} from "./reducers";

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
    listOfClaims: Claim[];
    bagOfMoney: number;
    listOfPolicies: Policy[];
}


export const departmentReducers = combineReducers<StoreState>({
        listOfClaims: claimsReducer,
        bagOfMoney: accountingReducer,
        listOfPolicies: policiesReducer,
    }
);