const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const facultySchema = new Schema(
    {
        name: { type: ObjectId, ref: 'Name' },
        institute: { type: ObjectId, ref: 'Institute' },
        school: { type: ObjectId, ref: 'School' },
        department: { type: ObjectId, ref: 'Department' },
        currentstatus: {
            type: ObjectId, ref: 'FacultyStatus'
        },
        enrolledcourses: { type: [ObjectId], ref: 'Course' },
        availabletoteach: { type: [ObjectId], ref: 'Course' },
        inprogresscourses: { type: [ObjectId], ref: 'Course' },
        taughtcourses: { type: [ObjectId], ref: 'Course' },

    },
    { timestamps: true }
);



module.exports = mongoose.model("Faculty", facultySchema);
