const mongoose = require("mongoose");

const studentstatusSchema = new mongoose.Schema(
    {
        Status: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("StudentStatus", studentstatusSchema);
