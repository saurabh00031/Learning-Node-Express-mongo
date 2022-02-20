const http = require('http');
const fs=require('fs');

const home=fs.readFileSync('tut67.html');
const about=fs.readFileSync('about.html');
const contact=fs.readFileSync('contact.html');
const features=fs.readFileSync('features.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  url=req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(url=='/')
  {
  res.end(home);
  }
  else if(url=='/features')
  {
    res.end(features);
  }
  else if(url=='/about')
  {
    res.end(about);
  }
  else if(url=='/contact')
  {
    res.end(contact);
  }
  else
  {
    res.end('<h1>404 error</h1>');
  }

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});