const mongoose = require('mongoose')

const createmongoconnection = async (url) => {
    return mongoose.connect(url)
}

module.exports ={ createmongoconnection }