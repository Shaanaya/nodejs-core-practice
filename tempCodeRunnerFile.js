// server.js
import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/favicon.ico') {
      res.writeHead(204); // No Content
      res.end();
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Sayani</h1>');
  } catch (err) {
    console.error("Error occurred:", err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Server Error" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
