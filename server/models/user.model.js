const mongoose = require("mongoose");
const fs = require("fs");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required:true, minlength: 2 },
        lastName: { type: String, required: true, minlength: 2 },
        userName: { type: String, required:true, minlength: 4},
        email: { type: String, required: true },
        password: { type: String, required: true, minlength: 8},
    }, { timestamps: true }
);

UserSchema.pre("update", function(next) {
    if (this.isNew) {
        this.password = bcrypt.hash(this.password, "5");
        next();
    }
})

module.exports = mongoose.model("User", UserSchema);