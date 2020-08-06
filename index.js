const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ message: 'looking good' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${port} ***\n`
  );
});
