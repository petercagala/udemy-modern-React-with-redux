import {Dispatch} from "redux";
import {SelectAllSongsAction, SelectSongAction , Song} from "./index";
import {SongActionTypes, getSongListDefault} from "./index";


export const selectSong = (song: Song): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectSongAction>({
            type: SongActionTypes.selectSong,
            payload: {
                song: song,
            }
        })
    }
}

export const selectAllSongs = (): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectAllSongsAction>({
            type: SongActionTypes.selectAll,
            payload: getSongListDefault(),
        })
    }
}