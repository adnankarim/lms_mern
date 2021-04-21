const mongoose = require("mongoose");

const departmetSchema = new mongoose.Schema(
    {
        department: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);



module.exports = mongoose.model("Department", departmetSchema);
