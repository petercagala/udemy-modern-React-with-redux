import {ActionTypes, FetchPostAction, Post} from './';
import {jsonPlaceHolder} from '../apis';
import {Dispatch} from "redux";
import thunk from 'redux-thunk';
import {StoreState} from "../reducers";

export const  fetchPost =  (): Function => {

    /**
     * dispatch and getState is unlimited power of redux applicaton
     * dispatch: change any data we want
     * getState: read (access) any data we want
     */
    return async (dispatch: Dispatch<FetchPostAction>, getState: () => StoreState): Promise<FetchPostAction> => {
        const response =  await jsonPlaceHolder().get("/posts");


        const post: Post = {
            userId: 1,
            id: 1,
            body: "myBody",
            title: "myTitle",
        }

        return {
            type: ActionTypes.fetchPost,
            payload: post,
        }
    }


};