const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome!");
  res.end();
});

server.listen(3000);
