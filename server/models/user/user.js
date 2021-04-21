const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid");
const { Schema, ObjectId } = mongoose;
const userSchema = new Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        description: {
            type: String,
            maxlength: 150
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String,
        role: {
            type: Number,
            default: 3,
            required: true
        },
        _faculty: {
            type: ObjectId,
            ref: "Faculty",
        },
        _student: {
            type: ObjectId,
            ref: "Student",
        },
        _admin: {
            type: ObjectId,
            ref: "Admin",
        },
        _superadmin: {
            type: ObjectId,
            ref: "SuperAdmin",
        },
    },

    { timestamps: true }
);

// virtual field
userSchema
    .virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuid.v1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

userSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function (password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

module.exports = mongoose.model("User", userSchema);
