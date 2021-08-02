import React from 'react';
import { connect } from 'react-redux';
import { showEdit, showDelete } from '../actions/student';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editIsVisible: false,
      deleteisVisible: false
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.props.showEdit(this.props.editIsVisible);
  }

  handleDelete() {
    this.props.showDelete(this.props.deleteisVisible);
  }

  render() {
    return (
      <tr>
        <td>{this.props.student.name.first} {this.props.student.name.last}</td>
        <td>{this.props.student.email}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.grade}</td>
        <td>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    editIsVisible: state.student.editIsVisible,
    deleteisVisible: state.student.deleteisVisible
  }
};

export default connect(mapStateToProps, { showEdit, showDelete })(Student);
