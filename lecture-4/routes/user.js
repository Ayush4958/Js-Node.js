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

// UI display of all users
// router.get('/users', async (req, res) => {
//     const alluser = await User.find({});
//     const html =
//         `
//         <ul> 
//             ${alluser.map(user => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
//         </ul>
//     `
//     return res.send(html)
// });

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
