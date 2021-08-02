import React from 'react';
import { connect } from 'react-redux';

class DeleteStudent extends React.Component {


  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student.currentStudent
  }
};

export default connect(mapStateToProps)(DeleteStudent);