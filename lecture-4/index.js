const express = require('express')
const app = express()
const PORT = 2000
const users = require('./MOCK_DATA.json')

app.get('/users' , (req , res) => {
    return res.json(users)
})

app.listen(PORT , () =>{
    console.log(`Server started at PORT ${PORT}`)
})