const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('home.html')
const about = fs.readFileSync('about.html')
const services = fs.readFileSync('services.html')
const contact = fs.readFileSync('contact.html')

const hostname = "127.0.0.1";
const port = 5500;

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (url == '/'){
    res.end(home);
  }

  else if(url == '/about.html'){
    res.end(about)
  }

  else if(url == '/services.html'){
    res.end(services)
  }

  else if(url == '/contact.html'){
    res.end(contact)
  }

  else{
    res.statusCode = 404;
    res.end("<h1> ERROR 404 NOT FOUND </h1>")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at this link ${http}://${hostname}:${port}/`);
});     

