// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import the router
const routes = require('./routes/index');

// Use the router
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
