import React from 'react';
import {connect} from 'react-redux';
import {StoreState, Song} from "../../reducers";
import {selectAllSongs} from "../../actions";


interface SongListProps {
    songList: Song[];
    selectAllSongs: Function;
}

interface SongListState {

}

class _SongList extends React.Component<SongListProps, SongListState> {

    constructor(props: SongListProps, state: SongListState) {
        super(props);

        this.state = {};
    }

    private renderSongs(): JSX.Element[] {
        console.log(this.props.songList);

        return this.props.songList.map<JSX.Element>(song => {
            return (
                <div>
                    <ul>
                        <li>{song.name}</li>
                        <li>{song.year}</li>
                    </ul>
                </div>
            );
        })
    }

     handleOnClickGetAllSongs(): void  {
        this.props.selectAllSongs();
    };


    render() {
        return (
            <div>
                <h2>Song List</h2>
                <button onClick={(e) => {this.handleOnClickGetAllSongs()}}>Get me some songs</button>
                {this.renderSongs()}
            </div>
        );
    }
}

/**
 * The name mapStateToProps is only convention.
 * @param state
 */
const mapStateToProps = (state: StoreState): {
    songList: Song[],
} => {
    console.log(state);

    return {
        songList: state.songList,
    };
}

export const SongList = connect(
    mapStateToProps,
    {selectAllSongs}
)(_SongList);