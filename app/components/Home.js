import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import DeleteStudent from './DeleteStudent';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <StudentList />
        <AddStudent />
        {this.props.editIsVisible && <EditStudent />}
        {this.props.deleteisVisible && <DeleteStudent />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    editIsVisible: state.student.editIsVisible,
    deleteisVisible: state.student.deleteisVisible
  };
};

export default connect(mapStateToProps)(Home);
