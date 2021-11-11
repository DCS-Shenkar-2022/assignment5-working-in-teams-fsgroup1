const http = require ("http");
const port = 8080;

http.createServer((req, res) => {
	res.writeHead(200);
	res.write("Noam Roytman"); 
	res.write("Amir Avidan"); 
	res.write("Koral Tsaba");
	res.write("Idan Kario");
	res.write("Bader Daka");
	res.end(); 
}).listen(port); 

console.log(`Listening on port ${port}`);
