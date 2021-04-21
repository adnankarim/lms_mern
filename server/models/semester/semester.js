const mongoose = require('mongoose');


const semesterSchema = new mongoose.Schema({
    semester: {
        type: Number,
        default: 1
    },

},
    { timestamps: true }

);





module.exports = mongoose.model("Semester", semesterSchema)