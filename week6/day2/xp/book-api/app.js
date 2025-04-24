const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Mount routes
const bookRoutes = require('./server/routes/bookRoutes');
app.use('/api/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
