import {bindActionCreators, Reducer} from "redux";
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

export const selectedSongListReducer: Reducer<Song[], Action> = (songList: Song[] = [], action: Action) => {
    switch(action.type) {
        case SongActionTypes.selectByName:
            return songList.filter(song => song.name === action.payload.name);
        case SongActionTypes.selectById:
            return songList.filter(song => song.id === action.payload.id);
        default:
            return [];
    }
}