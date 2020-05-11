import {Dispatch} from "redux";
import {SelectAllSongsAction, SelectSongAction, Song} from "./index";
import {SongActionTypes, getSongListDefault} from "./index";

/**
 * Staci, ked vratime Action, pretoze ak dame do reduxove connect odkaz na tuto funkciu, tak redux
 * na pozadi automaticky zavola dispatch<SelectSongAction> a tym nastartuje reducery
 * @param song
 */
export const selectSong = (song: Song): SelectSongAction => {

    return {
        type: SongActionTypes.selectSong,
        payload: {
            song: song,
        }
    }
}

export const selectAllSongs = (): SelectAllSongsAction => {

    return {
        type: SongActionTypes.selectAll,
        payload: getSongListDefault(),
    }
}