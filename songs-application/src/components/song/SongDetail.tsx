import React from 'react';
import {connect} from 'react-redux';
import {StoreState, Song} from '../../reducers/index';


interface SongDetailProps {
    song: Song | null;
}

interface SongDetailState {

}

class _SongDetail extends React.Component<SongDetailProps, SongDetailState> {

    constructor(props: SongDetailProps, state: SongDetailState) {
        super(props);

        this.state = {}
    }


    render() {
        console.log(this.props);

        return (
            <div>
                Song detail
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { song: Song | null} => {
    return {
        song: state.selectedSong,
    }
}

export const SongDetail = connect(
    mapStateToProps,
    {}
)(_SongDetail);
