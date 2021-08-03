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
          <p className="name-font">
            {this.props.student.name.first} {this.props.student.name.last}
          </p>
        </td>
        <td>
          <p className="email-font">{this.props.student.email}</p>
        </td>
        <td>
          <p>{this.props.student.age}</p>
        </td>
        <td>
          <p>{this.props.student.grade}</p>
        </td>
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
