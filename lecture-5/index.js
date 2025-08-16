const express = require('express');
const port = 2000;
const path = require('path');
const app = express();
const URL = require('./models/urlmodel.js')

// Importing the function for mongoDB connection
const {createmongoconnection} = require('./connection.js');
const shortid = require('shortid');

// importing routes
const urlRoute = require("./routes/urlrouter.js");
const staticRoute = require("./routes/staticrouter.js");
const userRoute = require('./routes/userRoutes.js')

// setting for EJS
app.set('view engine' , 'ejs')
app.set('views' , path.resolve(__dirname ,"./views"))

// Connecting mongoDB
createmongoconnection('mongodb://localhost:27017/urlshorten')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB connection failed"))

// In build middleware
app.use(express.json()); // Now it can parse any JSON Data
app.use(express.urlencoded({extended : true})) // Now it can parse any form Data

// using imported routes
app.use("/url" , urlRoute)
app.use("/" , staticRoute)
app.use('/user' , userRoute)

app.listen(port , () => console.log(`Server is running at port ${port}` ));