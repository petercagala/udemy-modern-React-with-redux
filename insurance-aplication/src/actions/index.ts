import {AnyAction} from "redux";
import {InsuranceTypes} from './types';

export interface CreatePolicy extends AnyAction {
    type: InsuranceTypes.createPolicy;
    payload: {
        firstName: string;
        lastName: string;
        cash: number;
    };
}

export interface CreateClaim extends AnyAction {
    type: InsuranceTypes.createClaim;
    payload: {
        firstName: string;
        lastName: string;
        claimAmount: number;
    };
}

export interface DeletePolicy extends AnyAction {
    type: InsuranceTypes.deletePolicy;
    payload: {
        firstName: string;
        lastName: string;
    };
}

export type Action = CreatePolicy | CreateClaim | DeletePolicy;