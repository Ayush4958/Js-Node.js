const fs = require('fs')
// Custom middleware to save logs of users request
const createLogsFile = (filename) => {
    return (req, res, next) => {
        const now = new Date();
        const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        fs.appendFile(
            filename,
            `\nRequest received on ${dateStr} at ${time} , path :- ${req.path}\n`
            , (err, data) => {
                next()
            })
    }
}
module.exports = {createLogsFile}