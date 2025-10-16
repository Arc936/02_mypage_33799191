const http = require("http");
const fs = require("fs");
const port = 8000;

http.createServer(function(req, res) {
    fs.readFile('Web.html', function(err, data) {
        if (err) {
            // Handle error (e.g., file not found)
            console.error("Error reading file:", err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end("404 File Not Found");
        } 
        
        // 2. Set the Content-Type header to text/html
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // 3. Send the file content (data) as the response body
        res.write(data); 
        
        // 4. End the response only after the content has been written
        return res.end(); 
    });
    
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});