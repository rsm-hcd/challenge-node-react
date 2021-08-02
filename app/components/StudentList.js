import React from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions/student';

class StudentList extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }
}

const mapStateToProps = (state) => {

}