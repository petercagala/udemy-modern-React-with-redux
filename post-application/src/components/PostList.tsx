import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';


interface PostListProps {

}

interface PostListState {

}

class _PostList extends React.Component<PostListProps, PostListState> {

    constructor(props: PostListProps, state: PostListState) {
        super(props);

        this.state = {}
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
    {}
)(_PostList);
