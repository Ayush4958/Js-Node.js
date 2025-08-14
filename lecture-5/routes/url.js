const express = require('express');
const router = express.Router();
const URL = require('../models/url')

// importing the router functions
const {createShortUrl , redirectToUrl , getanalytics} = require('../controllers/url')

router.post('/' , createShortUrl)
router.get('/:shortId' , redirectToUrl)
router.get('/analytics/:shortId' , getanalytics)

module.exports = router;