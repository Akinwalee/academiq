const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//Register a new user
router.post("/register", async (req, res) => {
    try{
        const {name, username, email, password} = req.body;
        const newUser = new User({name, username, email, password});
        await newUser.save();
        res.status(201).json({message: "User registered successfully"});
    } catch(error) {
        res.status(500).json({message: "Error registering user"});
    }
});

//Login
router.post("/login", async (req, res) => {
    try{
        const {name, username, email, password} = req.body;
        const user = await User.findOne({username});
        if (!user) {
            return (res.status(404).json({message: "User was not found"}));
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return (res.status(401).json({message: "Invalid password"}));
        }
        res.status(200).json({message: "Login successful"});
    } catch (error) {
        res.status(500).json({message: "Error logging in"});
    }
});

module.exports = router;