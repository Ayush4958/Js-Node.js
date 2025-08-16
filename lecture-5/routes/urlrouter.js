const express = require('express');
const router = express.Router();
const URL = require('../models/urlmodel')

// importing the router functions
const {createShortUrl , redirectToUrl , getanalytics} = require('../controllers/urlFunc')

router.post('/' , createShortUrl)
router.get('/:shortId' , redirectToUrl)
router.get('/analytics/:shortId' , getanalytics)

module.exports = router;