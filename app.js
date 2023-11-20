//Main Entry Point

const express = reuire("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

//Use Express JSON Middleware
app.use(express.json())

//Establlish a connection to the database
mongoose.connect("mongodb://localhost/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to database")
    })
    .catch((error) => {
        console.error("Error connecting to database:", error.message)
    })

//Routes
app.use("auth/", authRoutes);

//Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});