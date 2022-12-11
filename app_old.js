const http = require('http');

const server = http.createServer( (req, res) => {

    res.write('Hola Mundo');
    res.end();

});

const port = 8080;
server.listen( port );

console.log(`Escuchando en el puerto ${port}`);