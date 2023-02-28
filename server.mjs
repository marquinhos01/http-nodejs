import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hellssso World!');
  res.end();
}).listen(process.env.PORT);
