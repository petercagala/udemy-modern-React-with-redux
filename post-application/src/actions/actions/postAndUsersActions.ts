import {AnyAction, Dispatch, Reducer} from "redux";
import {ActionTypes} from '../types/actionTypes';
import { fetchPost, fetchUser,} from '../';


export interface FetchPostUserAction extends AnyAction {
    type: ActionTypes.fetchAndUser,
    payload: string;
};

export const fetchPostAndUsers = (): Function => {

    return async (dispatch: Dispatch<FetchPostUserAction>): Promise<void> => {
        // dispatch(fetchPost());
        console.log("Before fetchPost!!!");
        // @ts-ignore
        await dispatch(fetchPost());
        console.log("After fetchPost!!!");
    };
}
