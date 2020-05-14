import {Reducer} from 'redux';
import {Action, ActionTypes} from '../../actions';
import {Post as PostState} from '../index';
import {Post as PostAction} from '../../actions';


export const postsReducer: Reducer<PostState[], Action> = (posts: PostState[] = [], action: Action): PostState[] => {

    switch (action.type) {
        case ActionTypes.fetchPost:
            return mapPostActionToState(action.payload);
        default:
            return posts;
    }
};

const mapPostActionToState = (postAction: PostAction[]): PostState[] => {
    const postState: PostState[] = [];

    for (const postActionElement of postAction) {
        postState.push(
            {
                id: postActionElement.id,
                userId: postActionElement.userId,
                title: postActionElement.title,
                body: postActionElement.body,
            }
        )
    }
    return postState;
}