const http = require("http");
const port = 8000;

// 1. Store the HTML in a variable
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Alamagan’s Page</title>
</head>
<body>
    <h1>Hello, I’m Alamagan!</h1>
    <h2>A Computer Science Student and Aspiring Data Engineer</h2>
    <p>I’m currently in my third year studying computer science. I enjoy learning about data systems and coding in Python, and I’m excited to explore projects that solve real-world problems.</p>
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