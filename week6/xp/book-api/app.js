// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount books router
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
