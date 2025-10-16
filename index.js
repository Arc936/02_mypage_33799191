var http = require("http");
const fs = require("fs");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    fs.readFile('Web.html', function(err, data) {
        if (err) {
            // Handle error (eS.g., file not found)
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end("404 File Not Found");
        } 
        
        // 3. Set the Content-Type header to text/html
        res.writeHead(200, { 'Content-Type': 'Web/html' }); 
        
        // 4. Send the file content (data) as the response body
        res.write(data); 
        return res.end();
    });
    
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});