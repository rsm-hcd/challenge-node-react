import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit, editStudent } from '../actions/student';
import StudentForm from './StudentForm';

class EditStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.student.name.first,
      lastName: this.props.student.name.last,
      email: this.props.student.email,
      age: this.props.student.age,
      grade: this.props.student.grade
    }

    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hideForm() {
    this.props.toggleEdit(null, false);
  }

  handleSubmit(e) {
    e.preventDefault();

    const studentData = {
      _id: this.props.student._id,
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      email: this.state.email,
      age: this.state.age,
      grade: this.state.grade
    }

    this.props.editStudent(studentData)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="modal-overlay" onClick={this.hideForm}>
        </div>
        <div className="modal">
          <h3>Edit Student Information</h3>
          <StudentForm
            student={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {/* <form handleSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.age}
              required
            />
          </div>
          <div className="form-group">
            <label>Grade</label>
            <select
              name="grade"
              value={this.state.grade}
              className="form-control"
              onChange={this.handleChange}>
              {options}
            </select>
          </div>
          <input
            className="btn btn-default"
            type="submit"
            value="Submit"
          />
          </form> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student.currentStudent,
  }
};

export default connect(mapStateToProps, { toggleEdit, editStudent })(EditStudent);
