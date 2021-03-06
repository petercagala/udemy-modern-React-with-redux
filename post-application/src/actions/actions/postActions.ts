import {ActionTypes, Post} from '../index';
import {jsonPlaceHolder} from '../../apis';
import {AnyAction, Dispatch} from "redux";
import {StoreState} from "../../reducers";
import {AxiosResponse} from "axios";

export interface FetchPostAction extends AnyAction {
    type: ActionTypes.fetchPost;
    payload: Post[];
}


export const  fetchPost =  (): Function => {

    /**
     * dispatch and getState is unlimited power of redux applicaton
     * dispatch: change any data we want
     * getState: read (access) any data we want, getState nieje povinny parameter, napriklad tu ho ani nebudeme potrebovat
     */
    return async (dispatch: Dispatch<FetchPostAction>, getState: () => StoreState): Promise<void> => {
        const response: AxiosResponse<Post[]> =  await jsonPlaceHolder().get<Post[], AxiosResponse<Post[]>>("/posts");


        const fetchPostAction: FetchPostAction = {
            type: ActionTypes.fetchPost,
            payload: response.data,
        }

        // Dispatch si spravime krasne manualne, ked sa skonci await
        dispatch<FetchPostAction>(fetchPostAction);
    }
};