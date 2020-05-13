import {combineReducers, ReducersMapObject} from 'redux';
import {postsReducer} from './reducers/postReducers';
import {usersReducer} from './reducers/usersReducers';

import {Post as PostType} from './structures/Post';
import {User as UserType} from './structures/User';

export type Post = PostType;
export type User = UserType;

export interface StoreState {
    posts: Post[];
    users: User[];
}


export const reducers = combineReducers<StoreState>({
        posts: postsReducer,
        users: usersReducer,
    }
);