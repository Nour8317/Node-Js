import {createServer} from 'http';
const PORT = process.env.PORT || 3000;
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const server = createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  }
  else {
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
  }
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});