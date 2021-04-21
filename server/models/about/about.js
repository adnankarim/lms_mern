const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        stack: {
            type: String,
            required: true
        },

    },
    { timestamps: true }
);



module.exports = mongoose.model("About", aboutSchema);
