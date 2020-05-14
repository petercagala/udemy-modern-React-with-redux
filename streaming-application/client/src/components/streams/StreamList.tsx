import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers/index';


interface StreamListProps {

}

interface StreamListState {

}

class _StreamList extends React.Component<StreamListProps, StreamListState> {

    constructor(props: StreamListProps, state: StreamListState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>Hi Peter, this is React</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const StreamList = connect(
    mapStateToProps,
    {}
)(_StreamList);
