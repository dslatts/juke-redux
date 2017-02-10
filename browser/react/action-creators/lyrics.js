import { SET_LYRICS } from '../constants';


const setLyrics = (lyrics) => {
    return {
        type: SET_LYRICS,
        payLoad: lyrics
    }
}

export {setLyrics};