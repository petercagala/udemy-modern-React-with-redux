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

    private generateDetails(): JSX.Element {
        return (
            <div>
                <p>
                    <h3>Details for:</h3>
                    <br/>
                    Title: {this.props.song?.name}
                    <br/>
                    Duration: {this.props.song?.duration}
                    <br/>
                    Year: {this.props.song?.year}
                </p>
            </div>
        );
    }


    render() {
        console.log(this.props);

        const statement: string | null = this.props.song ? null : "Select some song";

        return (
            <div>
                {this.props.song ? this.generateDetails() : <h3>Select some song</h3>}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): { song: Song | null } => {
    return {
        song: state.selectedSong,
    }
}

export const SongDetail = connect(
    mapStateToProps,
    {}
)(_SongDetail);
