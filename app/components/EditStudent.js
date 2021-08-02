import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions/student';

class EditStudent extends React.Component {
  constructor(props) {
    super(props)

    this.hideForm = this.hideForm.bind(this);
  }

  hideForm() {
    this.props.toggleEdit(null, false);
  }

  render() {
    return (
      <div className="modal-overlay" onClick={this.hideForm}>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    studentId: state.student.currentStudentId,
  }
};

export default connect(mapStateToProps, { toggleEdit })(EditStudent);