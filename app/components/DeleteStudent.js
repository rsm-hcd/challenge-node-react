import React from 'react';
import { connect } from 'react-redux';
import { toggleDelete, deleteStudent } from '../actions/student';

class DeleteStudent extends React.Component {
  constructor(props) {
    super(props);

    this.hideAlert = this.hideAlert.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  hideAlert() {
    this.props.toggleDelete(null, false);
  }

  handleDelete() {
    this.props.deleteStudent(this.props.student);
    this.hideAlert();
  }

  render() {
    return (
      <div>
        <div className="modal-overlay" onClick={this.hideAlert}></div>
        <div className="modal">
          <h3>
            Are you sure you want to delete {this.props.student.name.first}{' '}
            {this.props.student.name.last}?
          </h3>
          <button className="btn btn-default" onClick={this.handleDelete}>
            Yes
          </button>
          <button className="btn btn-default" onClick={this.hideAlert}>
            No
          </button>
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

export default connect(mapStateToProps, { toggleDelete, deleteStudent })(
  DeleteStudent
);
