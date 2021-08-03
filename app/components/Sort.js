import React from 'react';
import { connect } from 'react-redux';
import { updateSort } from '../actions/student';

class Sort extends React.Component {
  constructor(props) {
    super(props);

    this.sort = this.sort.bind(this);
  }

  sort() {}

  render() {
    return (
      <div className="col-md-2">
        <h3>Sort Students</h3>
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
