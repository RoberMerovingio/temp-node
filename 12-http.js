const http = require("http");

const server = http.createServer((req, res, next) => {
  if (req.url === "/") {
    res.end("Write to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't show you what you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(3000);