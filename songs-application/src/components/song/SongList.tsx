import React from 'react';
import {connect} from 'react-redux';
import {StoreState, Song} from "../../reducers";
import {selectAllSongs, selectSong, SelectSongAction} from "../../actions";


interface SongListProps {
    songList: Song[];
    selectAllSongs: Function;
    selectSong: Function;
}

interface SongListState {

}

class _SongList extends React.Component<SongListProps, SongListState> {

    constructor(props: SongListProps, state: SongListState) {
        super(props);

        this.state = {};
    }

    private renderSongs(): JSX.Element[] {

        return this.props.songList.map<JSX.Element>(song => {
            return (
                <div className="item" key={song.id}>
                    <div className="rightFloatedContent">
                        <button className="ui button primary"
                                onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.name}</div>
                </div>
            );
        })
    }

     handleOnClickGetAllSongs(): void  {
        this.props.selectAllSongs();
    };


    render() {
        return (
            <div className="ui divided list">
                <h2>Song List</h2>
                <button onClick={(e) => {this.handleOnClickGetAllSongs()}}>Get me some songs</button>
                <br/>
                <br/>
                <br/>
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
    songList: Song[];
} => {

    return {
        songList: state.songList,
    };
}

export const SongList = connect(
    mapStateToProps,
    {selectAllSongs: selectAllSongs,
        selectSong: selectSong,}
)(_SongList);