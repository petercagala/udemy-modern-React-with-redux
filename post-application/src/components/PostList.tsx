import React from 'react';
import {connect} from 'react-redux';
import {StoreState, Post} from '../reducers/index';

import {fetchPost} from '../actions';


interface PostListProps {
    fetchPost: Function;
    postList: Post[];
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

    private renderList(): JSX.Element[] {
        return (
            this.props.postList.map<JSX.Element>((post) => {
                return (
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon utensil utensils"/>
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })
        );
    }

    render() {


        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState): {postList: Post[]} => {
    return {
        postList: state.posts,
    };
}

export const PostList = connect(
    mapStateToProps,
    {
        fetchPost: fetchPost,
    }
)(_PostList);
