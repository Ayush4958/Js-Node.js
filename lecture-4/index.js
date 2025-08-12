const express = require('express');
const app = express();
const PORT = 2000;
// Importing the function for mongoDB connection
const {createmongoconnection} = require('./connection.js');
// importing the router file
const routeuser = require('./routes/user.js');
// Importing middleware
const {createLogsFile} = require('./middleware/index.js');

// Connecting mongoDB
createmongoconnection('mongodb://localhost:27017/firtsconnection')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB connection failed"))

// Using Build-in Middleware 
app.use(express.urlencoded({ extended: false }));

// Middleware for creating logs file
app.use(createLogsFile('./logs.txt'))

// handle the request from a single route
app.use('/api/users' , routeuser)

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})