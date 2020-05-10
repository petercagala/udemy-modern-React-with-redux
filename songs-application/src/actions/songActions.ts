import {Dispatch} from "redux";
import {SelectAllSongsAction, SelectByIdSongAction, SelectByNameSongAction , Song} from "./index";
import {SongActionTypes, getSongListDefault} from "./index";


export const selectSongById = (song: Song): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectByIdSongAction>({
            type: SongActionTypes.selectById,
            payload: {
                id: song.id,
                name: song.name,
                duration: song.duration,
                year: song.year,
            }
        })
    }
}

export const selectSongByName = (song: Song): Function => {

    return (dispatch: Dispatch): void => {
        dispatch<SelectByNameSongAction>({
            type: SongActionTypes.selectByName,
            payload: {
                id: song.id,
                name: song.name,
                duration: song.duration,
                year: song.year,
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