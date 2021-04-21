const mongoose = require("mongoose")


const batchSchema = mongoose.Schema(
    {
        batch: {
            type: Number,
            required: true

        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Batch", batchSchema);
