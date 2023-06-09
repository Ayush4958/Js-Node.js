const express = require('express');
const path =  require('path');
const fs =  require('fs');

const app = express()
const port = 80;


// EXPRESS SPECIFIC COFIGURATION
app.use('/static', express.static('static'))  // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC CONFIGURATION
app.set('view engine' , 'pug')  // Setting the template Engine as pug
app.set('views' , path.join(__dirname , 'views'));  // Set the view directory


// ENDPOINT
app.get('/' , (req , res)=>{
    const con = "This is best content on internet so far"
    const params = {title:"pug engine" , content: con } 
        res.status(200).render('index.pug' , params)
})

app.post('/' , (req,res)=>{
    identity = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let output_to_write = `The name of client is ${identity} 
    and ${age} years old
     and gendr is ${gender} and 
     residnetal address is ${address} and some 
     other information about :- ${more} `
 
    fs.writeFileSync('output.txt' , output_to_write)
    const params = {"message":"Your form has been submited succesfully" }
    res.status(200).render('index.pug' , params)
})

// START THE Server
app.listen(port ,()=>{
    console.log(`The application started at port on ${port}`)
})
