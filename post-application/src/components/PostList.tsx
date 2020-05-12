import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';

import {fetchPost} from '../actions';


interface PostListProps {
    fetchPost: Function;
}

interface PostListState {

}

class _PostList extends React.Component<PostListProps, PostListState> {

    constructor(props: PostListProps, state: PostListState) {
        super(props);

        this.state = {}
    }


    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        return (
            <div>
                <h2>Post List</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const PostList = connect(
    mapStateToProps,
    {
        fetchPost: fetchPost,
    }
)(_PostList);
