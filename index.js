const http = require('http');
const url = require('url');
const fs = require('fs')

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const page = q.pathname === "/" ? './index.html' : `.${q.pathname}`
   
    fs.readFile(page, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"})
            fs.readFile('404.html', (err, data) => {
                if (err) throw err;
                res.write(data)
                return;
            })
            return;
        }
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        return res.end()
    })
}).listen(8080)
