let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FISH_PENDING':
      console.log('Pending fish request');
      return state;
      
    case 'FETCH_FISH_FULFILLED':
      console.log('Got fish data');
      return state.concat(...action.payload.data);

    case 'FETCH_FISH_REJECTED':
      console.log('Fish request rejected');
      return state;

      default:
      return state
    }}