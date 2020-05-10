import {AnyAction} from "redux";
import {SongActionTypes} from "./types";
import {getSongListDefault} from './songListStore';

export {selectSongById, selectAllSongs, selectSongByName} from './songActions';
export {SongActionTypes} from "./types";
export {getSongListDefault};

export interface Song {
    id: string;
    name: string;
    year: number;
    duration: string;
}


export interface SelectByNameSongAction extends AnyAction {
    type: SongActionTypes.selectByName,
    payload: Song;
}

export interface SelectByIdSongAction extends AnyAction {
    type: SongActionTypes.selectById,
    payload: Song;
}

export interface SelectAllSongsAction extends AnyAction {
    type: SongActionTypes.selectAll,
    payload: Song[];
}

export type Action = SelectByNameSongAction | SelectByIdSongAction | SelectAllSongsAction;