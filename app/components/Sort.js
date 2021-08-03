import React from 'react';
import { connect } from 'react-redux';

class Sort extends React.Component {}

const mapStateToProps = (state) => {
  return {
    students: state.student.items,
  };
};

export default connect(mapStateToProps, {})(Sort);
