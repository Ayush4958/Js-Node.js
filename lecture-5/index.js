const express = require('express');
const cookieparser = require('cookie-parser');
const port = 5055;
const path = require('path');
const app = express();

// importing middlewares
const {funcForAuthorization , restrictrole} = require('./middleware/auth.js')

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
app.use(cookieparser()); // now it can parse the cookies
app.use(funcForAuthorization); // checks the user authorization

// using imported routes
app.use("/url" ,restrictrole(['NORMAL' , 'ADMIN']), urlRoute)
app.use("/" , staticRoute)
app.use('/user' , userRoute)

app.listen(port , () => console.log(`Server is running at port ${port}` ));