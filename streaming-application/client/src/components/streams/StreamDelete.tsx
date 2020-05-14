import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers/index';


interface StreamDeleteProps {

}

interface StreamDeleteState {

}

class _StreamDelete extends React.Component<StreamDeleteProps, StreamDeleteState> {

    constructor(props: StreamDeleteProps, state: StreamDeleteState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>StreamDelete</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const StreamDelete = connect(
    mapStateToProps,
    {}
)(_StreamDelete);
