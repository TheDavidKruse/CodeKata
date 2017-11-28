let initialState = [];

const estimateWeight = (length, girth) => {
  return Math.round(length * girth * girth / 800);
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_FISH_PENDING':
      return state;

    case 'FETCH_FISH_FULFILLED':
      let topFive = action.payload.data.map(fish => {
        return {
          ...fish,
          weight: estimateWeight(fish.length, fish.girth)
        }
      })
      .sort((a,b) => b.weight - a.weight)
      .splice(0,5)

      console.log(topFive)
      return state.concat(topFive)

      return 
    default:
      return state;
  }
}