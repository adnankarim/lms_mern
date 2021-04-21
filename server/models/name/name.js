

const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true }
    },
    { timestamps: true }
);



module.exports = mongoose.model("Name", nameSchema);
