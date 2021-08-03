import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit, editStudent } from '../actions/student';
import StudentForm from './StudentForm';

class EditStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.student.name.first,
      lastName: this.props.student.name.last,
      email: this.props.student.email,
      age: this.props.student.age,
      grade: this.props.student.grade,
    };

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
        last: this.state.lastName,
      },
      email: this.state.email,
      age: this.state.age,
      grade: this.state.grade,
    };

    this.props.editStudent(studentData);
    this.hideForm();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="modal-overlay" onClick={this.hideForm}></div>
        <div className="modal">
          <h3>Edit Student Information</h3>
          <StudentForm
            student={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            isEdit={true}
            hideForm={this.hideForm}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student.currentStudent,
  };
};

export default connect(mapStateToProps, { toggleEdit, editStudent })(
  EditStudent
);
