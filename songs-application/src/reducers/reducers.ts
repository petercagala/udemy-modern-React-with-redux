import {bindActionCreators, Reducer} from "redux";
import {Action, SongActionTypes} from '../actions'
import {Song} from './'

export const songListReducer: Reducer<Song[], Action> = (songList: Song[] = [], action: Action): Song[] => {

    if(songList.length === 0) {
        const song1: Song = {
            id: "1",
            duration: "4:14",
            name: "Polepetko",
            year: 1992,
        };

        const song2: Song = {
            id: "2",
            duration: "3:19",
            name: "Kratke lasky",
            year: 1985,
        };

        const song3: Song = {
            id: "3",
            duration: "2:20",
            name: "Iskricky stastia",
            year: 1996,
        };
        songList.push(song1, song2, song3);
    }

    switch(action.type) {
        case SongActionTypes.selectByName:
            return songList.filter(song => song.name === action.payload.name);
        case SongActionTypes.selectById:
            return songList.filter(song => song.id === action.payload.id);
        case SongActionTypes.selectAll:
            return songList;
        default:
            return [];
    }
}