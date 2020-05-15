import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../reducers/index';
import {Link} from 'react-router-dom';
import {GoogleOuth} from './GoogleOuth';


interface HeaderProps {

}

interface HeaderState {

}

class _Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps, state: HeaderState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to={"/"} className={"item"}>Streamer</Link>
                <div className="right menu">
                    <Link to={"/"} className="item">All Streams</Link>
                </div>
                <GoogleOuth/>



            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const Header = connect(
    mapStateToProps,
    {}
)(_Header);
