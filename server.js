const http = require('http');

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
