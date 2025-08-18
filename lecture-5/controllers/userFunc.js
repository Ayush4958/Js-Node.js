const { v4: uuidv4 } = require('uuid');
const User = require('../models/usermodel');

// Session Management
const sessionIdToUserMap = new Map();
const setUser = (id, user) => {
    sessionIdToUserMap.set(id, user);
}
const getUser = (id) => {
    return sessionIdToUserMap.get(id);
}

// function for creating a User
const createUser = async (req, res) => {
    const { user, mail, pass } = req.body;
    await User.create({ user, mail, pass })
    return res.redirect("/")
}

// function for checking a User
const checkuser = async (req, res) => {
    const { mail, pass } = req.body;
    const user = await User.findOne({ mail, pass })
    if (!user) {
        return res.render("login", { error: "Invalid Credentials" })
    }
    const sessionId = uuidv4();
    setUser(sessionId, user)
    res.cookie("uid" , sessionId)
    return res.redirect("/")
}
 
module.exports = {
    createUser,
    checkuser,
    setUser,
    getUser,
}