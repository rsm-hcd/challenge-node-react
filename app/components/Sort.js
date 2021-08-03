import React from 'react';
import { connect } from 'react-redux';
import { sortStudents } from '../actions/student';

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  sort() {
    this.props.sortStudents('name');
  }

  render() {
    return (
      <div>
        <button onClick={this.sort}>sort</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student.items,
  };
};

export default connect(mapStateToProps, {})(Sort);
