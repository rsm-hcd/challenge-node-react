import React from 'react';
import { connect } from 'react-redux';

class EditStudent extends React.Component {


  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    studentId: state.student.currentStudentId
  }
};

export default connect(mapStateToProps)(EditStudent);