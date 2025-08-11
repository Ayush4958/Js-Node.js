const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 2000
// const users = require('./MOCK_DATA.json')
const mongoose = require('mongoose')

// Middleware - plugins
app.use(express.urlencoded({ extended: false }))

// Mongoose connection
mongoose.connect('mongodb://localhost:27017/firtsconnection')
.then(()=>{ console.log("Mongoose is connected sucessfully")})
.catch((err) =>{ console.log("Mongoose connection error occured")})

// Creating a schema
const userschema = new mongoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name:{
        type : String,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    job_title:{
        type : String,
    },
    gender:{
        type : String,
    },


})

// creating a model
const User = mongoose.model('user' , userschema)

// Middleware from scratch
app.use((req, res, next) => {
    const now = new Date();
    const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    fs.appendFile('./logs.txt',
        `\nRequest received on ${dateStr} at ${time} , path :- ${req.path}\n`
        , (err, data) => {
            next()
        })
})


app.get('/users', async (req, res) => {
    const alluser = await User.find({});
    const html =
        `
    <ul> 
        ${alluser.map(user => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
    </ul>
    `
    return res.send(html)
})

app.post('/api/users/:id', async (req, res) => {
    // ToDo : Create a new user
    const body = req.body
    if (!body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender) {
        return res.status(400).json({ status: "Failed", message: "All fields are required" })
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender
    })
        .then((data) => {
            return res.status(201).json({ status: "Success" })
            console.log("result :- " , result)
        })
        .catch((err) => {
            return res.status(500).json({ status: "Failed", message: err.message })
        })
})

// Rest API Points
app.get('/api/users', async (req, res) => {
    const alluser = await User.find({});
    return res.json(alluser)
})

app
    .route('/api/users/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ status: "Failed", message: "User not found" })
        return res.json(user);
    })
    .patch(async(req, res) => {
        // We will modify this later from frontend
        await User.findByIdAndUpdate(req.params.id , {last_name : "Changed"})
        return res.json({ status: "Success" })
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "Success" })
    })

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})