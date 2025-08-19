const jwt = require('jsonwebtoken');
const secret = "my_sec_ret"

const setUser = (user) => {
    return jwt.sign({
        _id : user._id,
        mail : user.mail,
        role : user.role
    } , secret)
}

const getUser = (token) => {
    if (!token) return null;
    return jwt.verify(token , secret)
}

module.exports = {
    setUser ,
    getUser
}