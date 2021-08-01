export const fetchStudents = () => dispatch => {
  fetch('/students')
    .then(res => res.json())
    .then(students =>
      dispatch({
        type: 'FETCH_STUDENTS',
        payload: students
      })
    )
    .catch(e => console.log(e));
};