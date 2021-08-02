const initialState = {
  items: [],
  item: {}
};

export default function student(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      var newState = state;
      newState.items = action.payload;
      return { newState };
    case 'ADD_STUDENT':
      newState = state;
      newState.item = action.payload;
      return { newState };
    default:
      return state;
  };
}
