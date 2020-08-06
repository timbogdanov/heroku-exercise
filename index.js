require('dotenv').config(); // if there is a .env on the root folder, it will merge it into process.env

const express = require('express');

const server = express();

server.get('/', (req, res) => {
  const message =
    process.env.MESSAGE || 'looking good from server.get';
  res.status(200).json({ message: message });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${port} ***\n`
  );
});
