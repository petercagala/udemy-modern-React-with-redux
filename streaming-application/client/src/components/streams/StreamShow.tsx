import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../reducers/index';


interface StreamShowProps {

}

interface StreamShowState {

}

class _StreamShow extends React.Component<StreamShowProps, StreamShowState> {

    constructor(props: StreamShowProps, state: StreamShowState) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="ui container">
                <h2>StreamShow</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {} => {
    return {};
}

export const StreamShow = connect(
    mapStateToProps,
    {}
)(_StreamShow);
