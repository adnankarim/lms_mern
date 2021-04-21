const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        class: {
            type: String,
            trim: true,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);
