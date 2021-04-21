const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const projectSchema = new mongoose.Schema(
    {
        photo: {
            data: Buffer,
            contentType: String
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        source: {
            type: String,
            required: true        },
        link: {
            type: String,
            required: true        },
        description: {
            type: String,
            required: true        },
        stack: {
            type: String,
            required: true        },
        
    },
    { timestamps: true }
);



module.exports = mongoose.model("Project", projectSchema);
