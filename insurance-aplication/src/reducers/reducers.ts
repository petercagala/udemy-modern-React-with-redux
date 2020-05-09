import {Reducer} from "redux";
import {Action} from "../actions";
import {InsuranceTypes} from "../actions/types";
import {Claim} from './index';


/**
 * Velky pozor, musime osetrit, ze na zaciatku v state nebudu ziadne data: state: Claim[] = []
 * @param oldListOfClaims
 * @param action
 */
export const claimsReducer:  Reducer<Claim[], Action> = (oldListOfClaims: Claim[] = [],
                                                       action: Action): Claim[] => {

    switch(action.type) {
        case InsuranceTypes.createClaim:
            // !!!! we want to return new object of Claim !!! no updated ald object
            return [...oldListOfClaims, action.payload];
        default:
            return oldListOfClaims;
    }
};

/**
 * Insurance company has initially for example 1000 dollars.
 * @param bagOfMoney
 * @param action
 */
export const accountingReducer: Reducer<number, Action> = (bagOfMoney: number = 1000,
                                                           action: Action): number => {

    switch(action.type) {
        case InsuranceTypes.createClaim:
            return bagOfMoney - action.payload.claimAmount;
        case InsuranceTypes.createPolicy:
            return bagOfMoney + action.payload.cash;
        default:
            return bagOfMoney;
    }
}