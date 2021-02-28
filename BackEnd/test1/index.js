const http = require('http')

const a = undefined;

const server = http.createServer((req, res) => {
    debugger;
    const url = req.url;
    const path = url.split('?')[0]; //index.html
    res.end(path + '-123');
})

server.listen(3000);
console.log("2000")