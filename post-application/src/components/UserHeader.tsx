import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
import {User} from '../reducers'


interface UserHeaderProps {
    user: User | null;
}

interface UserHeaderState {

}

class _UserHeader extends React.Component<UserHeaderProps, UserHeaderState> {

    constructor(props: UserHeaderProps, state: UserHeaderState) {
        super(props);

        this.state = {}
    }


    private renderUser(): JSX.Element {
        return (
            <div>
                <h3>{this.props.user ? this.props.user.name: "Loading..."}</h3>
                <h4>{this.props.user?.email}</h4>
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

// const mapStateToProps = (state: StoreState): void => {
//
// }

export const UserHeader = connect(
    null,
    {
    }
)(_UserHeader);
