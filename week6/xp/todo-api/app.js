// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
  });
  

// Import the todos router
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
