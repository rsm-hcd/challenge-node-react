const initialState = {
  items: [],
  item: {}
};

export default function student(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return Object.assign({}, state, { items: action.payload });
    case 'ADD_STUDENT':
      return Object.assign({}, state, { item: action.payloade });
    default:
      return state;
  };
}
