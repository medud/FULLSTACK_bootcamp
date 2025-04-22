// Import the axios module
const axios = require('axios');

// Create a function to fetch posts from JSONPlaceholder
async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

// Export the function so it can be used elsewhere
module.exports = {
  fetchPosts,
};
