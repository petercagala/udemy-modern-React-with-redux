import {combineReducers, ReducersMapObject} from 'redux';
import {postsReducer} from './postReducers';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface StoreState {
    posts: Post[];
}


export const reducers = combineReducers<StoreState>({
        posts: postsReducer,
    }
);