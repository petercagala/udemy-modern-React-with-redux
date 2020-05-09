import {Reducer } from "redux";
import {Action, SongActionTypes} from '../actions'
import {Song} from './'

export const songListReducer: Reducer<Song[], Action> = (songList: Song[] = [], action: Action): Song[] => {

    switch(action.type) {
        case SongActionTypes.selectAll:
            return songList = action.payload;
        default:
            return songList;
    }

    return songList;
}

export const selectedSongReducer: Reducer<Song | null, Action> = (selectedSong: Song | null | undefined, action: Action): Song | null => {

    if(selectedSong === undefined) {
        return null;
    }

    switch(action.type) {
        case SongActionTypes.selectSong:
            return action.payload.song;
        default:
            return null;
    };

}