const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    youtube: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});



module.exports = mongoose.model("Contact", contactSchema);
