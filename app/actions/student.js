// get student info form datatbase
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

// add new student to database
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

// show edit student form
export const toggleEdit = (studentId, editIsVisible) => dispatch => {
  console.log('COUNTING');
  dispatch({
    type: 'SHOW_EDIT',
    payload: { studentId, editIsVisible }
  })
};

// show delete student form
export const toggleDelete = (studentId, deleteisVisible) => dispatch => {
  dispatch({
    type: 'SHOW_DELETE',
    payload: { studentId, deleteisVisible }
  })
};

// update student info in the database
export const editStudent = (studentData) => dispatch => {
  fetch('/edit', {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(studentData)
  })
    .then(res => res.json())
    .then(student =>
      dispatch({
        type: 'EDIT_STUDENT',
        payload: student
      })
    )
    .catch(e => console.log(e));
};

// delete student from the database
export const deleteStudent = (studentId) => dispatch => {
  fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' }
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: 'DELETE_STUDENT',
        payload: studentId
      })
    )
    .catch(e => console.log(e));
}
