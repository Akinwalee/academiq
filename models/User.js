//Import necessary modules
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//User Schema
const userSchema = new mongoose.Schema({
    name: {type: String, unique: false, required: true},
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: true, requires: true}
});

//Hash a password before saving it in to the databse
userSchema.pre("save", async function (next) {
    const user = this;
    if(!user.isModified("password")){
        return (next());
    }

    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return (next(error));
    }
});

const User = mongoose.model("User", userSchema);

//Export the User module
module.exports = User;