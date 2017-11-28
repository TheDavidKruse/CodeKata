import axios from 'axios';

export const fetchFishData = () => {
  return {type: 'FETCH_FISH', payload: axios.get(`https://868r1t0.restletmocks.net/catfish`)}
}