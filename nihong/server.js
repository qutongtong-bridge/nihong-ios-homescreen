const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.method} ${req.url}`);
    
    // Parse URL to remove query parameters
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    
    let filePath = path.join(__dirname, pathname);
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            const ext = path.extname(filePath);
            let contentType = 'text/html';
            
            if (ext === '.css') contentType = 'text/css';
            else if (ext === '.js') contentType = 'text/javascript';
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop');
});