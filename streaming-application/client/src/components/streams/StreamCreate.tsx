import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers/index';


interface StreamCreateProps {

}

interface StreamCreateState {

}

class _StreamCreate extends React.Component<StreamCreateProps, StreamCreateState> {

    constructor(props: StreamCreateProps, state: StreamCreateState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>StreamCreate</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const StreamCreate = connect(
    mapStateToProps,
    {}
)(_StreamCreate);
