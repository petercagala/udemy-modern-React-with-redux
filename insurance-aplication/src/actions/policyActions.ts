import {Dispatch} from "redux";
import {CreatePolicy, DeletePolicy} from "./index";
import {InsuranceTypes} from "./types";

export const createPolicy = (firstName: string, lastName: string, cash: number): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<CreatePolicy>(
            {
                type: InsuranceTypes.createPolicy,
                payload: {
                    firstName: firstName,
                    lastName: lastName,
                    cash: cash,
                },
            }
        );
    };
};

export const deletePolicy = (id: string, firstName: string, lastName: string): Function => {
    return (dispatch: Dispatch): void => {
        dispatch<DeletePolicy>(
            {
                type: InsuranceTypes.deletePolicy,
                payload: {
                    firstName: firstName,
                    lastName: lastName,
                },
            }
        );
    };
};