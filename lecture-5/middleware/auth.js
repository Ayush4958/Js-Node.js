const { get } = require('mongoose');
const {getUser} = require('../service/auth')


const funcForAuthorization = ( req , res , next) =>{
    const tokenCookie = req.cookie?.token;
    req.user = null;

    const token = tokenCookie
    const user = getUser(token)

    req.user = user;
    next();
}

const restrictrole = (roles) =>{
    return (req , res , next) =>{
        if (!req.user) return res.redirect('/login')
        if (!roles.includes(req.user.role)) return res.end("UnAuthorized")
            next()
    }
}


module.exports = {
    funcForAuthorization,
    restrictrole
}