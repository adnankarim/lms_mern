const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
    {
        section: {
            type: String,
            trim: true,
            required: true,
            maxlength: 1
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Section", sectionSchema);
