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

exports.updateStudent = (req, res) => {
  const { _id } = req.body;
  const update = req.body;
  const options = { new: true };

  return Student.findByIdAndUpdate(_id, update, options)
    .then(response => res.status(200).send(response))
    .catch(e => {
      console.log(e);
      res.status(400).send();
    });
};

exports.deleteStudent = (req, res) => {
  const { _id } = req.body;

  return Student.deleteOne({ _id })
   .then(response => res.status(200).send(response))
   .catch(e => {
     console.log(e);
     res.status(400).send();
   });
};
