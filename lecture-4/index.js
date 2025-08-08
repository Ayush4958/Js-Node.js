const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 2000
const users = require('./MOCK_DATA.json')

// Middleware - plugins
app.use(express.urlencoded({extended : false}))

app.get('/users', (req, res) => {
    const html =
    `
    <ul> 
        ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
    </ul>
    `
    return res.send(html)
})

// Rest API Points
app.get('/api/users', (req, res) => {
    return res.json(users)
})


app
.route('/api/users/:id')
.get((req , res) =>{
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})
.put((req,res) =>{
    // ToDo : Create a new user
    return res.json({status : "Pending"})
})
.patch((req,res) =>{
    // ToDo : Updating an existing user
    return res.json({status : "Pending"})
})
.delete((req,res) =>{
    // ToDo : Delete an user
    return res.json({status : "Pending"})
})

app.post('/api/users/:id' , (req ,res) =>{
    // ToDo : Create a new user
    const body = req.body
    users.push({...body , id : users.length + 1} )
    console.log(body)
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err ,data) =>{
        return res.json({status : "Success" , id : users.length})

    })
})

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})