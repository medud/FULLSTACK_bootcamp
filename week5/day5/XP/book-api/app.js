const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
app.use(express.json());

app.get('/api/json-posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('✅ Fetched posts from JSONPlaceholder and sent the response.');
    res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Failed to fetch posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts from external API' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
