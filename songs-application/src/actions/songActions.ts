import {Dispatch} from "redux";
import {SelectAllSongsAction, SelectSongAction, Song} from "./index";
import {SongActionTypes} from "./index";


export const selectSongById = (song: Song): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectSongAction>({
            type: SongActionTypes.selectById,
            payload: {
                id: song.id,
                name: song.name
            }
        })
    }
}

export const selectSongByName = (song: Song): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectSongAction>({
            type: SongActionTypes.selectByName,
            payload: {
                id: song.id,
                name: song.name
            }
        })
    }
}

export const selectAllSongs = (): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectAllSongsAction>({
            type: SongActionTypes.selectAll,
        })
    }
}