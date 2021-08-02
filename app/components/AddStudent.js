import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/student';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      grade: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      email: this.state.email,
      age: Number(this.state.age),
      grade: this.state.grade
    };

    console.log(newStudent);

    this.props.addStudent(newStudent);
  };



  render() {
    const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

    const options = grades.map((grade, i) => (
      <option key={i} value={grade}>{grade}</option>
    ));

    return (
      <div>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
              required
            />
          </div>
          <div>
            <label>Grade</label>
            <select name="grade" onChange={this.handleChange}>
              <option value="">Select a grade</option>
              {options}
            </select>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addStudent })(AddStudent);