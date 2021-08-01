const mongoose = require('mongoose');

const schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

const grades = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

const studentSchema = new mongoose.Schema({
  name: { first: String, last: String },
  email: { type: String, unique: true },
  age: Number,
  grade: { type: String, enum: grades }
});

studentSchema.virtual('fullName').get(function() {
  return this.name.first + ' ' + this.name.last;
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;