const Student = require('../models/Student');

exports.getAllStudents = (req, res) => {
  return Student.find({})
    .then(response => res.send(response))
    .catch(e => console.log(e));
};

exports.addStudent = (req, res) => {
  const student = req.body;
  const doc = new Student(student);

  return doc.save()
    .then(response => res.send(response))
    .catch(e => {
      console.log(e);
      res.status(400).send(msg: 'Student already exists');
    });
};