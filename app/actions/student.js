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

export const addStudent = (studentData) => dispatch => {
  fetch('/new-student', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(studentData)
  })
    .then(res => res.json())
    .then(student =>
      dispatch({
        type: 'ADD_STUDENT',
        payload: student
      })
    )
    .catch(e => console.log(e));
};
