const mongoose = require('mongoose');


const schoolSchema = new mongoose.Schema({
    level: {
        type: String,
        required: true
    },

},
    { timestamps: true }

);





module.exports = mongoose.model("School", schoolSchema)