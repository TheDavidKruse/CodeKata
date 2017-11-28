import axios from "axios";

export const fetchFishData = () => {
    console.log('Retrieved fish data');
    return {
        type: 'FETCH_FISH',
        payload: axios.get(`https://868r1t0.restletmocks.net/catfish`)
    }
}