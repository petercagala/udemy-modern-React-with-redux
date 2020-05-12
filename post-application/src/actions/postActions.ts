import {ActionTypes, FetchPostAction, Post} from './';

export const fetchPost: () => FetchPostAction = (): FetchPostAction => {

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
};