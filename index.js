const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ayushcart');

const db = mongoose.connection
db.on('error' , console.error.bind(console, 'connection:error:'))
db.once('open' , function(){
    console.log('We are connected all human being')
})

let kittySchema  = new mongoose.Schema({
    name : String , 
    gender : String , 
    age : Number , 
    breed : String
});

kittySchema.methods.speak = function () {
    let greeting =  "My cat gender is "+ this.gender; 
    console.log(greeting);
};

let kittens = mongoose.model("kittens" , kittySchema )

let ayushkitty = new kittens({ 
name :"ayushkitty69" ,
gender : "Female" ,
age : 45 , 
breed : "Giga Chad"
})

console.log(ayushkitty.name);
ayushkitty.speak();

ayushkitty.save();