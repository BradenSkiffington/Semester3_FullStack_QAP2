const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  
  switch (url) {
    case '/':
      console.log('Handling the root route');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Welcome to the root route</h1>');
      break;
    case '/about':
      console.log('Handling the about route');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>About Us</h1>');
      break;
    case '/contact':
      console.log('Handling the contact route');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Contact Us</h1>');
      break;
    case '/products':
      console.log('Handling the products route');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Our Products</h1>');
      break;
    case '/subscribe':
      console.log('Handling the subscribe route');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Subscribe to Network</h1>');
      break;
    default:
      console.log('Handling 404 Not Found');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
