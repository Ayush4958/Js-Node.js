const {getUser} = require('../controllers/userFunc')

const forLoggedinUser = (req , res , next) =>{
    const useruid = req.cookies.uid
    if (!useruid) return res.redirect('/login')
    const user = getUser(useruid)
    if (!user) return res.redirect('/login')
    req.user = user
    next();
}

const checkauth = async (req , res , next) =>{
    const useruid = req.cookies.uid
    const user = getUser(useruid)
    req.user = user
    next();
}

module.exports = {
    forLoggedinUser , 
    checkauth
}