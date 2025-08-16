const express = require('express')
const router  = express.Router();
const URL = require('../models/urlmodel')

router.get('/' , async (req , res) =>{
    const allurls = await URL.find({})
    return res.render('home' , { urls : allurls})
})

router.get('/signup' , (req,res) =>{
    res.render('signup')
})

module.exports = router;