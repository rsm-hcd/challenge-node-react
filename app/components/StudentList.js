import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions/student';

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

  }
}

const mapStateToProps = (state) => {
  students: state.students.items,
  newStudent: state.students.item
}

export default connect(mapStateToProps, { fetchStudents })(StudentList);