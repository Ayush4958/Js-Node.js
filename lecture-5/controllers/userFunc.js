const { v4: uuidv4 } = require('uuid');
const User = require('../models/usermodel');
const {setUser , getUser} = require('../service/auth')

// function for creating a User
const createUser = async (req, res) => {
    const { user, mail, pass } = req.body
    await User.create({ user, mail, pass })
    return res.redirect("/")
}

// function for checking a User
const checkuser = async (req, res) => {
    const { mail, pass } = req.body
    const user = await User.findOne({ mail , pass })
    if (!user) {
        return res.render("login", { error: "Invalid Credentials" })
    }
    const token = setUser(user)
    res.cookie('token' , token)
    return res.render("home")
}
 
module.exports = {
    createUser,
    checkuser,
}