const express = require('express');
const port = 2000;
const app = express();
const URL = require('./models/url.js')

// importing routes
const urlRoute = require("./routes/url")

// Importing the function for mongoDB connection
const {createmongoconnection} = require('./connection.js');
const shortid = require('shortid');

// Connecting mongoDB
createmongoconnection('mongodb://localhost:27017/urlshorten')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB connection failed"))

// using imported routes
app.use(express.json());
app.use("/url" , urlRoute)

app.listen(port , () => console.log(`Server is running at port ${port}` ));