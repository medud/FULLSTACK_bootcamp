const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server and listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
