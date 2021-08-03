import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit, toggleDelete } from '../actions/student';

class Student extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.props.toggleEdit(this.props.student, true);
  }

  handleDelete() {
    this.props.toggleDelete(this.props.student, true);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.student.name.first} {this.props.student.name.last}
        </td>
        <td>{this.props.student.email}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.grade}</td>
        <td>
          <button className="btn btn-default" onClick={this.handleEdit}>
            Edit
          </button>
          <button className="btn btn-default" onClick={this.handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editIsVisible: state.student.editIsVisible,
    deleteisVisible: state.student.deleteisVisible,
  };
};

export default connect(mapStateToProps, { toggleEdit, toggleDelete })(Student);
