import {ActionTypes, FetchPostAction, Post} from './';
import {jsonPlaceHolder} from '../apis';
import {Dispatch} from "redux";
import {StoreState} from "../reducers";
import {AxiosResponse} from "axios";

export const  fetchPost =  (): Function => {

    /**
     * dispatch and getState is unlimited power of redux applicaton
     * dispatch: change any data we want
     * getState: read (access) any data we want, getState nieje povinny parameter, napriklad tu ho ani nebudeme potrebovat
     */
    return async (dispatch: Dispatch<FetchPostAction>, getState: () => StoreState) => {
        const response: AxiosResponse<Post[]> =  await jsonPlaceHolder().get("/posts");


        const fetchPostAction: FetchPostAction = {
            type: ActionTypes.fetchPost,
            payload: response.data,
        }

        // Dispatch si spravime krasne manualne, ked sa skonci await
        dispatch<FetchPostAction>(fetchPostAction);
    }


};