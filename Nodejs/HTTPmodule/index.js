const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Bienvenido al ejercicio de modulo HTTP en NodeJs</h1>');
    } else if (req.url === '/quienes-somos') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>¿Quiénes Somos?</h1>');
    } else if (req.url === '/donde-estamos') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>¿Dónde Estamos?</h1>');
    } else if (req.url === '/que-hacemos') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>¿Qué Hacemos?</h1>');
    } else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Página no encontrada</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});