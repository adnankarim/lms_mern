const mongoose = require('mongoose');


const levelSchema = new mongoose.Schema({
    level: {
        type: String,
        required: true
    },

},
    { timestamps: true }

);





module.exports = mongoose.model("Level", levelSchema)