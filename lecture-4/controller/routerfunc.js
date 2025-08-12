const User = require('../models/user');

// Function for getting all users
const getallUser = async (req, res) => {
    const alluser = await User.find({});
    return res.json(alluser)
};

// Function for getting a user by ID
const getUserbyId = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ status: "Failed", message: "User not found" })
    return res.json(user);
};

// Function for modifying the User by ID
const modifyUserbyId = async (req, res) => {
    // We will modify this later from frontend
    await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" })
    return res.json({ status: "Success" })
}

// Function for deleting the User by ID
const deleteUserbyId = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
}

// Function for Handling the POST request
const createUser = async (req, res) => {
    //for Create a new user
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
        return res.status(201).json({ status : "Success" , ID : result._id})
}

module.exports = {
    getallUser,
    getUserbyId,
    modifyUserbyId,
    deleteUserbyId,
    createUser,
};