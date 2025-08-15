const {nanoid} = require('shortid');
const URL = require('../models/url');
const shortid = require('shortid');


// Function for creating a short id for your url
const createShortUrl = async (req , res) =>{
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "URL is required"})
    const shortID = shortid.generate();
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : [] , 
    })
    return res.render('Home' , {id : shortID})
}

// function for redirecting user to the original url
const redirectToUrl = async (req , res) =>{
    const shortId = req.params.shortId
    const now = new Date()
    const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`.toString();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`.toString();
    const entry = await URL.findOneAndUpdate( 
        {shortId} ,
        { $push : {
            visitHistory : {
                timestamp : `Date :- ${dateStr} , Time :- ${time}`
            }
        }})
    res.redirect(entry.redirectUrl);
}

// function to show analytics 
const getanalytics =async (req ,res) =>{
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    if (!result) return res.status(404).json({error : "URL not Found"})
    return res.status(202).json({totalclicks : result.visitHistory.length , analytics : result.visitHistory})
}

module.exports = {
    createShortUrl ,
    redirectToUrl,
    getanalytics
}