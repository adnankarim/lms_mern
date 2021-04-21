const mongoose = require('mongoose');


const degreeSchema = new mongoose.Schema({
    degree: {
        type: String,
    },

},
    { timestamps: true }

);





module.exports = mongoose.model("Degree", degreeSchema)