const express = require('express')
const router  = express.Router();
const {restrictrole} = require('../middleware/auth')
const URL = require('../models/urlmodel')

router.get('/admins' , restrictrole(["ADMIN"]) ,async (req , res) =>{
    const allurls = await URL.find({})
    return res.render('home' , { urls : allurls});
})

router.get('/' , restrictrole(["NORMAL" , "ADMIN"]) ,async (req , res) =>{
    const allurls = await URL.find({ 
        createdBy : req.user._id
    })
    return res.render('home' , { urls : allurls});
})

router.get('/signup' , (req,res) =>{
    res.render('signup');
})

router.get('/login' , (req , res) =>{
    res.render('login');
})

module.exports = router;