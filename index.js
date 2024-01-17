const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.sendFile('/home/radtrad/repos/node-informational-site/index.html', (err) => {
        if (err) throw err;
    })
})

app.get('/about', (req, res) => {
    res.sendFile('/home/radtrad/repos/node-informational-site/about.html', (err) => {
        if (err) throw err;
    })
})

app.get('/contact-me', (req, res) => {
    res.sendFile('/home/radtrad/repos/node-informational-site/contact-me.html', (err) => {
        if (err) throw err;
    })
})

app.use((req, res, next) => {
    res.status(404).sendFile('/home/radtrad/repos/node-informational-site/404.html', (err) => {
        if (err) throw err;
    })
})

app.listen(3000, () => {
    console.log(`Listening at http://localhost:8000`)
})

// http.createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     const page = q.pathname === "/" ? './index.html' : `.${q.pathname}`
   
//     fs.readFile(page, (err, data) => {
//         if (err) {
//             res.writeHead(404, {"Content-Type": "text/html"})
//             fs.readFile('404.html', (err, data) => {
//                 if (err) throw err;
//                 res.write(data)
//                 return;
//             })
//             return;
//         }
//         res.writeHead(200, {"Content-Type": "text/html"})
//         res.write(data)
//         return res.end()
//     })
// }).listen(8080)

