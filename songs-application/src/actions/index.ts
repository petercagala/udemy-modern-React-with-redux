import {AnyAction} from "redux";
import {SongActionTypes} from "./types";
import {getSongListDefault} from './songListStore';

export {selectSong, selectAllSongs} from './songActions';
export {SongActionTypes} from "./types";
export {getSongListDefault};

export interface Song {
    id: string;
    name: string;
    year: number;
    duration: string;
}


export interface SelectSongAction extends AnyAction {
    type: SongActionTypes.selectSong,
    payload: {
        song: Song;
    };
}

export interface SelectAllSongsAction extends AnyAction {
    type: SongActionTypes.selectAll,
    payload: Song[];
}

export type Action = SelectSongAction | SelectAllSongsAction;