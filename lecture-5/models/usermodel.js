const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user : {
        type : String,
        required :true,
    } ,
    mail : {
        type : String,
        required : true,
        unique : true,
    },
    role : {
        type : String,
        required : true,
        default : "NORMAL"
    } ,
    pass : {
        type : String,
        required :true,
    }
},{ timestamps : true });

const User = mongoose.model("USER" , userSchema);

module.exports = User;