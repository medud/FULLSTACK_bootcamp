console.log("Fetching GIFs...");

const searchQuery = "hilarious";
const rating = "g"; // Level 1
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const apiURL = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&rating=${rating}&api_key=${apiKey}`;

const fetchGifs = async () => {
  try {
    const response = await fetch(apiURL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received GIF data:", data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

fetchGifs();
