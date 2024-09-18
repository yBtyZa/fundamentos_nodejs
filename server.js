const http = require('http');

const server = http.createServer( (req, res) => {
    if(req.url === '/fundamentos'){
    res.end('Hello World, fundamentos nodejs aplicado.');
    }
})

server.listen(3000);
