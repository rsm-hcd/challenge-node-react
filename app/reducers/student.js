const initialState = {
  items: [],
  item: {},
  editIsVisible: false,
  deleteisVisible: false,
  currentStudentId: null
};

export default function student(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS': // get students from database
      return Object.assign({}, state, { items: action.payload });
    case 'ADD_STUDENT': // add a new student to database
      return Object.assign({}, state, { item: action.payload });
    case 'SHOW_EDIT': // show the edit student form
      return Object.assign({}, state, {
        currentStudentId: action.payload,
        editIsVisible: true
      });
    case 'SHOW_DELETE': // show the delete student confirmation
      return Object.assign({}, state, {
        currentStudentId: action.payload,
        deleteisVisible: true
      })
    default:
      return state;
  };
}
