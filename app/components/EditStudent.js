import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions/student';

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
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hideForm() {
    this.props.toggleEdit(null, false);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

    const options = grades.map((grade, i) => (
      <option key={i} value={grade}>{grade}</option>
    ));

    return (
      <div>
        <div className="modal-overlay" onClick={this.hideForm}>
        </div>
        <div className="modal">
          <form onSubmit={this.onSubmit}>
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
            className="btn btn-defaul"
            type="submit"
            value="Submit"
          />
          </form>
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

export default connect(mapStateToProps, { toggleEdit })(EditStudent);
