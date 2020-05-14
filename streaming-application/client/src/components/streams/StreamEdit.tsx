import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers/index';


interface StreamEditProps {

}

interface StreamEditState {

}

class _StreamEdit extends React.Component<StreamEditProps, StreamEditState> {

    constructor(props: StreamEditProps, state: StreamEditState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>StreamEdit</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const StreamEdit = connect(
    mapStateToProps,
    {}
)(_StreamEdit);
