import React from 'react';
import { connect } from 'react-redux';
import { updateSort } from '../actions/student';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: ['name', 'email', 'age', 'grade'],
      current: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const { students } = this.props;

    this.setState({ current: value });

    const checkValues = (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    };

    let newOrder;
    value === 'name'
      ? // sort by last name
        (newOrder = students.sort((a, b) =>
          checkValues(a[value].last, b[value].last)
        ))
      : // sort by age, email, or grade
        (newOrder = students.sort((a, b) => checkValues(a[value], b[value])));
    console.log('NEW SORT ORDER: ', newOrder);
    this.props.updateSort(newOrder);
  }

  render() {
    const options = this.state.columns.map((col, i) => (
      <option key={i} value={col}>
        {col}
      </option>
    ));

    return (
      <div className="col-md-2">
        <h3>Sort Students</h3>
        <form>
          <div className="form-group">
            <label>Options</label>
            <select
              name="sort"
              className="form-control"
              value={this.state.current}
              onChange={this.handleChange}
            >
              <option value="">Select an option</option>
              {options}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student.items,
  };
};

export default connect(mapStateToProps, { updateSort })(Sort);
