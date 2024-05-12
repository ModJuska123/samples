// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
