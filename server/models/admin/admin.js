const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const adminSchema = new Schema(
    {
        name: { type: ObjectId, ref: 'Name' },
        institute: { type: ObjectId, ref: 'Institute' },
        school: { type: ObjectId, ref: 'School' },
    },
    { timestamps: true }
);



module.exports = mongoose.model("Admin", adminSchema);
