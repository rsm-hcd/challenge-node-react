import React from 'react';

const StudentForm = ({ student, handleChange, handleSubmit, isEdit, hideForm }) => {
  const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

  const options = grades.map((grade, i) => (
    <option key={i} value={grade}>{grade}</option>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={student.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={student.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={student.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          className="form-control"
          value={student.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Grade</label>
        <select
          name="grade"
          className="form-control"
          value={student.grade}
          onChange={handleChange}>
            {options}
        </select>
      </div>
      <input
        type="submit"
        className="btn btn-default"
        value="Submit"
      />
      {isEdit && (
        <button
          className="btn btn-default"
          onClick={hideForm}>
            Cancel
        </button>
      )}
    </form>
  )
}

export default StudentForm;