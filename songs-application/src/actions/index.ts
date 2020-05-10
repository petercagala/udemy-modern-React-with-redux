import {AnyAction} from "redux";
import {SongActionTypes} from "./types";

export {selectSongById, selectAllSongs, selectSongByName} from './songActions';
export {SongActionTypes} from "./types";

export interface Song {
    id: string;
    name: string;
}


export interface SelectSongAction extends AnyAction {
    type: SongActionTypes,
    payload: Song;
}

export interface SelectAllSongsAction extends AnyAction {
    type: SongActionTypes,
}

export type Action = SelectSongAction | SelectAllSongsAction;