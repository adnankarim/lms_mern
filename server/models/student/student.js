const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const studentSchema = new Schema(
    {
        name: { type: ObjectId, ref: 'Name' },
        school: { type: ObjectId, ref: 'School' },
        batch: { type: ObjectId, ref: 'Batch' },
        semester: {
            type: ObjectId, ref: 'Semester'
        },
        section: {
            type: ObjectId, ref: 'Section'
        },
        level: {
            type: ObjectId, ref: 'Level'
        },
        department: {
            type: ObjectId, ref: 'Department'
        },
        degree: {
            type: ObjectId, ref: 'Degree'
        },
        institute: {
            type: ObjectId, ref: 'Institute'
        },
        currentstatus: {
            type: ObjectId, ref: 'StudentStatus'
        },
        section: {
            type: ObjectId, ref: 'Section'
        },
        enrolledcourses: { type: [ObjectId], ref: 'Course' },
        availabletoenroll: { type: [ObjectId], ref: 'Course' },
        inprogresscourses: { type: [ObjectId], ref: 'Course' },
        finishedcourses: { type: [ObjectId], ref: 'Course' },


    },
    { timestamps: true }
);



module.exports = mongoose.model("Student", studentSchema);
