//APP Main Entry Point

const mongoose = require("mongoose");

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