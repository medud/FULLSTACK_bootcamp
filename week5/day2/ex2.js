async function fetchSunGifs() {
    const url = "https://api.giphy.com/v2/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Sun GIFs Data:", data);
    } catch (error) {
      console.error("Failed to fetch sun GIFs:", error.message);
    }
  }
  
  // Call the function
  fetchSunGifs();
  