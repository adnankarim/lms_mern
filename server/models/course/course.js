const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;
const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        coursecode: {
            type: String,
            required: true
        },
        faculty: {
            type: [ObjectId],
            ref: 'Faculty'
        },
        student: {
            type: [ObjectId],
            ref: 'Student'
        },
        photos: [{
            data: Buffer,
            contentType: String,
            timestamps: true
        }]

    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
