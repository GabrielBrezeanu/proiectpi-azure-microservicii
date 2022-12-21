const http = require('http');
const port = 1337;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'aplicatie cobai - test!!!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
