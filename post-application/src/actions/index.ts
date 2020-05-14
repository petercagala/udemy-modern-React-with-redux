import {ActionTypes} from "./types/actionTypes";
import {FetchPostAction} from "./actions/postActions";
import {FetchUserAction} from "./actions/userActions";
import {Post as PostType} from './structures/Post';
import {User as UserType} from './structures/User';

export {ActionTypes} from "./types/actionTypes";
export {fetchPost} from './actions/postActions';
export {fetchUser} from './actions/userActions'
export {fetchPostAndUsers} from './actions/postAndUsersActions';
export type Post = PostType;
export type User = UserType;


export type Action = FetchPostAction | FetchUserAction;