const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB configuration
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
    .connect
    (db,
    {useNewUrlParser: true}
    )
    .then( () => console.log("MongoDB connected successfully"))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));