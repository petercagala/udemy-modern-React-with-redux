import {AnyAction, Dispatch} from "redux";
import {ActionTypes} from "../";
import {User} from "../index";
import {StoreState} from "../../reducers";
import {AxiosResponse} from "axios";
import {jsonPlaceHolder} from "../../apis";

export interface FetchUserAction extends AnyAction {
    type: ActionTypes.fetchUser;
    payload: User;
}

export const fetchUser = (userId: number): Function => {

    return async (dispatch: Dispatch<FetchUserAction>, getState: StoreState) => {
        const response: AxiosResponse<User> = await jsonPlaceHolder().get<User, AxiosResponse<User>>(`/users/${userId}`);

        dispatch<FetchUserAction>({
            type: ActionTypes.fetchUser,
            payload: response.data,
        })
    }
}