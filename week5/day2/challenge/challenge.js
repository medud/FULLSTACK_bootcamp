const form = document.getElementById("gif-form");
const input = document.getElementById("category-input");
const container = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all-btn");

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const category = input.value.trim();
  if (!category) return;

  const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;

    // Create elements
    const gifBox = document.createElement("div");
    gifBox.classList.add("gif-box");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = category;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => {
      gifBox.remove();
    });

    gifBox.appendChild(img);
    gifBox.appendChild(deleteBtn);
    container.appendChild(gifBox);

    input.value = "";
  } catch (error) {
    console.error("Failed to fetch GIF:", error.message);
  }
});

// Delete all GIFs
deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
