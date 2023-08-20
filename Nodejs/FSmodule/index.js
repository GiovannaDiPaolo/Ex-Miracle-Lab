const http = require('http');
const fs = require('fs');
const path = require('path');

function handle404(res) {
    const errorFilePath = path.join(__dirname, '404.html');
    fs.readFile(errorFilePath, 'utf8', function(err, errorData) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error 404 - Page Not Found');
        } else {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end(errorData);
        }
    });
}

const server = http.createServer(function(req, res) {
    const url = req.url
    if (url === '/' || url === "") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the server!');
    } else {
        const filePath = path.join(__dirname, url + ".html");
        console.log(filePath)
        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) {
                handle404(res);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    }
});

const port = 3001;
server.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});
