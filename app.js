const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb+srv://audrey:test123@mytodoapp.jwd0qec.mongodb.net/?retryWrites=true&w=majority");


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(8000, () => console.log("Server started listening on port: 8000"));
