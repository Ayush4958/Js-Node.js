const express = require('express');

const app = express()

app.get('/' , (req , res) =>{
    return res.send('Hi from Home page goizs')
})

app.get('/about' , (req, res) =>{
    return res.send(`Hi from about page ${req.query.name || 'goizs'} `)
})

app.listen(2000 , () =>{
    console.log("Server started at port 2000")
})