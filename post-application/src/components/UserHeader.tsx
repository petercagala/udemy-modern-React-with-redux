import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
import {fetchUser} from '../actions';
import {User} from '../reducers'


interface UserHeaderProps {
    fetchUser: Function;
    userId: number;
    users: User[];
}

interface UserHeaderState {

}

class _UserHeader extends React.Component<UserHeaderProps, UserHeaderState> {

    constructor(props: UserHeaderProps, state: UserHeaderState) {
        super(props);

        this.state = {}
    }


    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    private findUserById(): User | null {
        const user: User | undefined = this.props.users.find((user) => user.id === this.props.userId);

        return user ? user: null;
    }

    private renderUser(): JSX.Element {
        const user: User | null = this.findUserById();

        return (
            <div>
                <h3>{user ? user.name: "Loading..."}</h3>
                <h4>{user?.email}</h4>
            </div>
        );
    }

    render() {
        return (
            <div className="ui container">
                {this.renderUser()}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {users: User[]} => {

    return {
        users: state.users,
    };
}

export const UserHeader = connect(
    mapStateToProps,
    {
        fetchUser: fetchUser,
    }
)(_UserHeader);
