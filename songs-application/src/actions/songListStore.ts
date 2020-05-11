import {Song} from "../reducers";

export const getSongListDefault = (): Song[] => {
    let songList: Song[] = [];

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

    return songList;
}