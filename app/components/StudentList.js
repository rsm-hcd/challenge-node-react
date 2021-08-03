import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions/student';
import Student from './Student';

class StudentList extends React.Component {
  // call to the db for current list of students
  componentDidMount() {
    this.props.fetchStudents();
  }

  // add new student to the list after added to the db
  componentWillReceiveProps(nextProps) {
    if (nextProps.newStudent) {
      this.props.students.push(nextProps.newStudent);
    }
  }

  render() {
    const students = this.props.students.map((student, i) => (
      <Student key={i} student={student} />
    ));

    return (
      <div className="col-md-6">
        <h3>Current Students</h3>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student.items,
    newStudent: state.student.item,
  };
};

export default connect(mapStateToProps, { fetchStudents })(StudentList);
