const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;

    // Debugging output
    console.log('Requested URL:', url);

    // Set the response Content-Type to text/html by default
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Define a function to serve static files
    const serveStaticFile = (fileName, contentType) => {
        const filePath = path.join(__dirname, 'public', fileName);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Handling 404 Not Found');
                res.end('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            }
        });
    };

    switch (url) {
        case '/':
            console.log('Handling the root route');
            const homePage = fs.readFileSync('./Views/home.html', 'utf8');
            res.write(homePage);
            res.end();
            break;
        case '/about':
            console.log('Handling the about route');
            const aboutPage = fs.readFileSync('./Views/about.html', 'utf8');
            res.write(aboutPage);
            res.end();
            break;
        case '/subscribe':
            console.log('Handling the subscribe route');
            const subscribePage = fs.readFileSync('./Views/subscribe.html', 'utf8');
            res.write(subscribePage);
            res.end();
            break;
        case '/products':
            console.log('Handling the products route');
            const productsPage = fs.readFileSync('./Views/products.html', 'utf8');
            res.write(productsPage);
            res.end();
            break;
        case '/contact':
            console.log('Handling the contact route');
            const contactPage = fs.readFileSync('./Views/contact.html', 'utf8');
            res.write(contactPage);
            res.end();
            break;
        case '/menu.css':
            // Serve your CSS file
            serveStaticFile('menu.css', 'text/css');
            break;
        default:
            console.log('Handling 404 Not Found');
            res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
