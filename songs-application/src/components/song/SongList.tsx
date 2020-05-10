import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from "../../../../insurance-aplication/src/reducers";


interface SongListProps {

}

interface SongListState {

}

class _SongList extends React.Component<SongListProps, SongListState> {

    constructor(props: SongListProps, state: SongListState) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div>
                <h2>React Application</h2>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): any => {

}

export const SongList = connect(
    mapStateToProps,
    {}
)(_SongList);