//Main Entry Point

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const questionRouthes = require("./routes/question");
const crypto = require("crypto");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Set up session middleware
secret = crypto.randomBytes(64);
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false
}));

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
app.use("question/", questionRouthes);

app.get("/", (req, res) => {
    res.send().json({message: "Hello World!"})
})

//Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});