// routes/books.js
const express = require('express');
const router = express.Router();

// In-memory "database"
let books = [];
let idCounter = 1;

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: idCounter++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title;
  book.author = author;
  res.json(book);
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

module.exports = router;
