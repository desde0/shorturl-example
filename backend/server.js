const http = require('http');
const { onRequest } = require('./actions');

const server = http.createServer(onRequest);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});