import {Dispatch} from "redux";
import {CreateClaim} from "./index";
import {InsuranceTypes} from "./types";


export const createClaim = (firstName: string, lastName: string, claimAmount: number): CreateClaim => {

    return {
        type: InsuranceTypes.createClaim,
        payload: {
            firstName: firstName,
            lastName: lastName,
            claimAmount: claimAmount,
        },
    }

    // return (dispatch: Dispatch): void => {
    //     dispatch<CreateClaim>(
    //         {
    //             type: InsuranceTypes.createClaim,
    //             payload: {
    //                 firstName: firstName,
    //                 lastName: lastName,
    //                 claimAmount: claimAmount,
    //             },
    //         }
    //     );
    // };
};