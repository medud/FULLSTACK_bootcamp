const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Simulated in-memory database
let books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

// READ ALL BOOKS
app.get('/api/books', (req, res) => {
  res.json(books);
});

// READ SINGLE BOOK
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json(book);
});

// CREATE A NEW BOOK
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
