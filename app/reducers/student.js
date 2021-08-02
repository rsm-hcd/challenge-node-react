const initialState = {
  items: [],
  item: {},
  editIsVisible: false,
  deleteisVisible: false
};

export default function student(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return Object.assign({}, state, { items: action.payload });
    case 'ADD_STUDENT':
      return Object.assign({}, state, { item: action.payload });
    case 'SHOW_EDIT':
      return Object.assign({}, state, { editIsVisible: action.payload });
    case 'SHOW_DELETE':
      return Object.assign({}, state, { deleteisVisible: action.payload })
    default:
      return state;
  };
}
