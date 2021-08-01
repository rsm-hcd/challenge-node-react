const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  };
}