import {bindActionCreators, Reducer} from "redux";
import {Action} from "../actions";
import {InsuranceTypes} from "../actions/types";
import {Claim, Policy} from './index';


/**
 * Velky pozor, musime osetrit, ze na zaciatku v state nebudu ziadne data: state: Claim[] = []
 * @param listOfClaims
 * @param action
 */
export const claimsReducer:  Reducer<Claim[], Action> = (listOfClaims: Claim[] = [],
                                                       action: Action): Claim[] => {

    switch(action.type) {
        case InsuranceTypes.createClaim:
            // !!!! we want to return new object of Claim !!! no updated ald object
            return [...listOfClaims, action.payload];
        default:
            return listOfClaims;
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
};

export const policiesReducer: Reducer<Policy[], Action> = (listOfPolicies: Policy[] = [],
                                                           action: Action): Policy[] => {
    switch(action.type) {
        case InsuranceTypes.createPolicy:
            return [...listOfPolicies, action.payload];
        case InsuranceTypes.deletePolicy:
            // TODO sprav filter
            return listOfPolicies.filter((policy) => !(policy.firstName === action.payload.firstName &&
                policy.lastName === action.payload.lastName));
        default:
            return listOfPolicies;
    }
}