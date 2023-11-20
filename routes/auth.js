const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    try{
        const {name, username, email, password} = req.body;
        const newUser = new User({name, username, email, password});
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch(error) {
        res.status(500).send("Error registering user");
    }
});

module.exports = router;