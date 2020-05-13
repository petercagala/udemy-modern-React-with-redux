import React from 'react';
import {connect} from 'react-redux';
import {StoreState, Post, User} from '../reducers/index';

import {fetchPost, fetchUser} from '../actions';
import {UserHeader} from './UserHeader';


interface PostListProps {
    fetchPost: Function;
    fetchUser: Function;
    postList: Post[];
    users: User[];
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

    private findUserById(userId: number): User | null {
        const user: User | undefined = this.props.users.find(user => user.id === userId);
        if(user) {
            return user
        } else {
            this.props.fetchUser(userId);
        }

        const fetchedUser: User | undefined = this.props.users.find((user) => user.id === userId);

        return fetchedUser ? fetchedUser: null;
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
                            <UserHeader user={this.findUserById(post.userId)} />
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

const mapStateToProps = (state: StoreState): {
    postList: Post[];
    users: User[];
} => {
    return {
        postList: state.posts,
        users: state.users,
    };
}

export const PostList = connect(
    mapStateToProps,
    {
        fetchPost: fetchPost,
        fetchUser: fetchUser,
    }
)(_PostList);
