import {AnyAction} from "redux";
import {InsuranceTypes} from './types';
import {Claim, Policy} from "../reducers";

export interface CreatePolicy extends AnyAction {
    type: InsuranceTypes.createPolicy;
    payload: Policy;
}

export interface CreateClaim extends AnyAction {
    type: InsuranceTypes.createClaim;
    payload: Claim;
}

export interface DeletePolicy extends AnyAction {
    type: InsuranceTypes.deletePolicy;
    payload: {
        firstName: string;
        lastName: string;
    };
}

export type Action = CreatePolicy | CreateClaim | DeletePolicy;