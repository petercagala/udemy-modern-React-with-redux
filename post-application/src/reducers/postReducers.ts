import {Reducer} from 'redux';
import {Action, ActionTypes} from '../actions/index';
import {Post} from './';


export const postsReducer: Reducer<Post[], Action> = (posts: Post[] = [], action: Action): Post[] => {

    switch (action.type) {
        case ActionTypes.fetchPost:
            return action.payload;
        default:
            return posts;
    }
};