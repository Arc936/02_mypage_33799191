const http = require("http");
const port = 8000;

// 1. Store the HTML in a variable
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Reyes' Page</title>
</head>
<body>
    <h1>Hello,I am Reyes!</h1>
    <h2>A Computer Science Student</h2>
    <p>I am currently in my third year studying computer science.I am excited to explore projects that solve problems.</p>
</body>
</html>
`;

http.createServer(function(req, res) {
    // 2. Set the Content-Type header to text/html
    res.writeHead(200, { "Content-Type": "text/html" });
    
    // 3. Send the HTML string and end the response
    res.end(htmlContent);
    
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});