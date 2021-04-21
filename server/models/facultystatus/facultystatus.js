const mongoose = require("mongoose");

const facultyStatusSchema = new mongoose.Schema(
    {
        Status: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("FacultyStatus", facultyStatusSchema);
