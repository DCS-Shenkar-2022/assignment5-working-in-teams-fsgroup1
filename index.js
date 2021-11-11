const http = require ("http");
const port = 8080;

http.createServer((req, res) => {
	res.writeHead(200); // Status code in header
	res.write("Noam Roytman"); // Send res body (can write multiple times)
	res.write("Amir Avidan"); // Send res body (can write multiple times)
	res.write("Koral Tsaba");
	res.end(); // Send & close connection
}).listen(port); // Listen for connection on this port

console.log(`Listening on port ${port}`);
