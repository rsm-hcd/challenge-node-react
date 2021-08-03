import React from 'react';

const StudentForm = ({
  student,
  handleChange,
  handleSubmit,
  isEdit,
  hideForm,
}) => {
  const grades = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
  ];

  const options = grades.map((grade, i) => (
    <option key={i} value={grade}>
      {grade}
    </option>
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
      <div className="row">
        <div className="form-group col-md-5">
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
        <div className="form-group col-md-7">
          <label>Grade</label>
          <select
            name="grade"
            className="form-control"
            value={student.grade}
            onChange={handleChange}
          >
            <option value="">Select a grade</option>
            {options}
          </select>
        </div>
      </div>
      <input type="submit" className="btn btn-default" value="Submit" />
      {/* Show a cancel button if Edit Student form */}
      {isEdit && (
        <button className="btn btn-default" onClick={hideForm}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default StudentForm;
