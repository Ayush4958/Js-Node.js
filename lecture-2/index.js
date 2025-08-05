const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    const now = new Date();
    const myurl = url.parse(req.url , true)
    const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const log = `${dateStr} - New request received from ${req.url} at ${time}\n`; // you can also use myurl.pathname instead of req.url and after that you want to show the search query you can also print that 
    console.log(myurl)
    if (req.url === '/favicon.ico') {
        res.end('Dont know about this Goizs')
    }
    else {
        fs.appendFile('server.log', log, (err, data) => {
            switch (myurl.pathname) {
                case '/':
                    res.end('This is the Home page Goizs')
                    break;
                case '/about':
                    const username = myurl.query.myname || 'Goizs'
                    res.end(`This is the About page ${username}`)
                    break;
                case '/contact':
                    res.end('This is the Contact page Goizs')
                    break;
                default:
                    res.end('404 Not found Goizs')
                    break;
            }
        })
    }
})

server.listen(2000, () => { console.log("Server started at port 2000") })