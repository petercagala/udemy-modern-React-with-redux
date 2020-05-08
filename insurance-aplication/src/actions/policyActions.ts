import {Dispatch} from "redux";
import {CreatePolicy, DeletePolicy} from "./index";
import {InsuranceTypes} from "./types";

export const createPolicy = (firstName: string, lastName: string, cash: number): CreatePolicy => {

    return {
        type: InsuranceTypes.createPolicy,
        payload: {
            firstName: firstName,
            lastName: lastName,
            cash: cash,
        },
    }

    // return (dispatch: Dispatch): void => {
    //
    //     // CreatePolicy will be send to each of different reducer thank to dispatch function
    //     dispatch<CreatePolicy>(
    //         {
    //             type: InsuranceTypes.createPolicy,
    //             payload: {
    //                 firstName: firstName,
    //                 lastName: lastName,
    //                 cash: cash,
    //             },
    //         }
    //     );
    // };
};

export const deletePolicy = (id: string, firstName: string, lastName: string): DeletePolicy => {
    return {
        type: InsuranceTypes.deletePolicy,
        payload: {
            firstName: firstName,
            lastName: lastName,
        },
    }

    // return (dispatch: Dispatch): void => {
    //     dispatch<DeletePolicy>(
    //         {
    //             type: InsuranceTypes.deletePolicy,
    //             payload: {
    //                 firstName: firstName,
    //                 lastName: lastName,
    //             },
    //         }
    //     );
    // };
};