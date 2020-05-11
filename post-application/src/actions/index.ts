import {AnyAction} from "redux";
import {ActionTypes} from "./actionTypes";

export {ActionTypes} from "./actionTypes";
export {fetchPost} from './postActions';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface FetchPostAction extends AnyAction {
    type: ActionTypes.fetchPost;
    payload: Post[];
}

export type Action = FetchPostAction;