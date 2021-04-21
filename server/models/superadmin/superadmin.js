const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const superAdminSchema = new Schema(
    {
        name: { type: ObjectId, ref: 'Name' },
    },
    { timestamps: true }
);



module.exports = mongoose.model("SuperAdmin", superAdminSchema);
