const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      state.items = action.payload;
      return { state };
      // return {
      //   ...state,
      //   items: action.payload
      // };
    default:
      return state;
  };
}