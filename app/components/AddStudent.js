import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/student';
import StudentForm from './StudentForm';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      grade: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name: {
        first: this.state.firstName,
        last: this.state.lastName,
      },
      email: this.state.email,
      age: Number(this.state.age),
      grade: this.state.grade,
    };

    console.log(newStudent);

    this.props.addStudent(newStudent);
  }

  render() {
    return (
      <div className="col-md-4">
        <h3>Add Student</h3>
        <StudentForm
          student={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(null, { addStudent })(AddStudent);
