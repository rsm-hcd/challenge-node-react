import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import StudentList from './StudentList';
import AddStudent from './AddStudent';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <StudentList />
        <AddStudent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
