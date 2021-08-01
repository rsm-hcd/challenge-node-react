const Student = require('../models/Student');

exports.getAllStudents = (req, res) => {
  return Student.find({})
    .then(response => res.send(response));
    .catch(e => console.log(e));
};