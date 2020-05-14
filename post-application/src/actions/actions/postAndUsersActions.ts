import _ from 'lodash';
import {Post} from '../../reducers/';
import {AnyAction, Dispatch, Reducer} from "redux";
import {ActionTypes} from '../types/actionTypes';
import { fetchPost, fetchUser,} from '../';
import {StoreState} from "../../reducers";


export interface FetchPostUserAction extends AnyAction {
    type: ActionTypes.fetchAndUser,
    payload: string;
};

export const fetchPostAndUsers = (): Function => {

    return async (dispatch: Dispatch<FetchPostUserAction>, getState: () => StoreState): Promise<void> => {
        // dispatch(fetchPost());
        console.log("Before fetchPost!!!");
        // @ts-ignore
        // Potrebujeme, aby sa pockalo, kym sa spusti cely fetchPost action, potrebujeme odignorovat typescript, lebo
        // neviem preco to tu nefunguje a proste ten dispatch fetchPost funkcie treba neviem preco urobit, aj ked
        // vo vnutri tejto funkcie sa dispatch aj tak robi
        await dispatch(fetchPost());
        console.log(getState().posts);
        console.log("After fetchPost!!!");

        // Get only unique users ids
        const userIds: number[] = _.uniq<number>(_.map<Post, "userId">(getState().posts, "userId"));
        console.log(userIds);
        userIds.forEach(userId => {
            // @ts-ignore
            // we don't need to use await in this case as waiting for each query is not necessary
             dispatch(fetchUser(userId));
        });
    };
}
