import {combineReducers, ReducersMapObject} from 'redux';
import { songListReducer} from "./reducers";


export interface Song {
    id: string;
    name: string;
    year: number;
    duration: string;
}


export interface StoreState {
    songList: Song[];
    selectedSong: Song[];
}


export const reducers = combineReducers<StoreState>({
        songList: songListReducer,
        selectedSong:  songListReducer,
    }
);