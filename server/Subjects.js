const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
  batch: { type: Number, required: true, unique: true },
  semscomp: { type: [Number], required: true },
});

// Define a schema for each subject item
const subjectItemSchema = new mongoose.Schema({
  "Subject-code": String,
  "Subject-name": String,
  "Faculty-name": String,
  credits: Number,
});
const subjectSchema = new mongoose.Schema({
  batch: { type: Number, required: true },
  reg: { type: [String], required: true },
  sem1: {
    P1: [subjectItemSchema],
    P2: [subjectItemSchema],
    P3: [subjectItemSchema],
    P4: [subjectItemSchema],
    P5: [subjectItemSchema],
    P6: [subjectItemSchema],
  },
  sem2: {
    P1: [subjectItemSchema],
    P2: [subjectItemSchema],
    P3: [subjectItemSchema],
    P4: [subjectItemSchema],
    P5: [subjectItemSchema],
    P6: [subjectItemSchema],
  },
  sem3: {
    P1: [subjectItemSchema],
    P2: [subjectItemSchema],
    P3: [subjectItemSchema],
    P4: [subjectItemSchema],
    P5: [subjectItemSchema],
    P6: [subjectItemSchema],
  },
  sem4: {
    P1: [subjectItemSchema],
    P2: [subjectItemSchema],
    P3: [subjectItemSchema],
    P4: [subjectItemSchema],
    P5: [subjectItemSchema],
    P6: [subjectItemSchema],
  },
});



// ...




/*const subjectSchema = new mongoose.Schema({
  batch: { type: Number, required: true },
  reg: { type: [String], required: true }, // Assuming `reg` is an array of strings
  sem1: {
    P1: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P2: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P3: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P4: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P5: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P6: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
  },
  sem2: {
    P1: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P2: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P3: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P4: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P5: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P6: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
  },
  sem3: {
    P1: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P2: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P3: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P4: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P5: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P6: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
  },
  sem4: {
    P1: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P2: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P3: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number},
    ],
    P4: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P5: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
    P6: [
      {"Subject-code": String},
      {"Subject-name": String},
      {"Faculty-name": String},
      {"credits": Number}
    ],
  },
});*/

/* Subject.updateOne(
  { batch: 2019 }, // Assuming batch 2019
  { $set: { 'sem5.P1': [...] } } // Add sem5.P1 with its data
)

This code is for making dynamic inputs of semester while making admin create Subject 
*/
const Semester = mongoose.model("semesterupdater", semesterSchema);
const Subject = mongoose.model("sujects.finder", subjectSchema);

module.exports = { Semester, Subject };
