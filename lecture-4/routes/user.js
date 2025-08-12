const express = require('express');
const router = express.Router();

// Importing function for each router
const {
    getallUser,
    getUserbyId,
    modifyUserbyId,
    deleteUserbyId,
    createUser
} = require('../controller/routerfunc')

// Routing for different http method on a single route ('/')
router
    .route('/')
    .get(getallUser)
    .post(createUser)

// Routing for different http method on a single route ('/:id')
router
    .route('/:id')
    .get(getUserbyId)
    .patch(modifyUserbyId)
    .delete(deleteUserbyId)

// Exporting the router
module.exports = router;
