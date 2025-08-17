const express = require('express');
const router = express.Router();
const {createUser , checkuser} = require('../controllers/userFunc');

router.post('/' , createUser) ;
router.post('/login' , checkuser) ;

module.exports = router;