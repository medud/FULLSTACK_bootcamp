// Get DOM elements
const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthYearEl = document.getElementById("birth-year");
const homeworldEl = document.getElementById("homeworld");
const buttonEl = document.getElementById("find-btn");
const loadingEl = document.getElementById("loading");

// Generate random ID between 1 and 83
function getRandomCharacterId() {
  return Math.floor(Math.random() * 83) + 1;
}

// Show/hide loading spinner
function showLoading() {
  loadingEl.classList.remove("hidden");
  buttonEl.disabled = true;
}

function hideLoading() {
  loadingEl.classList.add("hidden");
  buttonEl.disabled = false;
}

// Display character info
function displayCharacter(char) {
  nameEl.textContent = char.name;
  heightEl.textContent = `Height: ${char.height}`;
  genderEl.textContent = `Gender: ${char.gender}`;
  birthYearEl.textContent = `Birth Year: ${char.birthYear}`;
  homeworldEl.textContent = `Home World: ${char.homeworld}`;
}

// Fetch character from API
async function fetchCharacter(id) {
  showLoading();
  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const data = await res.json();

    const character = data.result.properties;

    // Fetch homeworld name
    const homeworldRes = await fetch(character.homeworld);
    const homeworldData = await homeworldRes.json();

    // Display character
    displayCharacter({
      name: character.name,
      height: character.height,
      gender: character.gender,
      birthYear: character.birth_year,
      homeworld: homeworldData.result.properties.name,
    });

  } catch (error) {
    console.error("Failed to fetch character:", error);
    nameEl.textContent = "Failed to load character";
    heightEl.textContent = "";
    genderEl.textContent = "";
    birthYearEl.textContent = "";
    homeworldEl.textContent = "";
  } finally {
    hideLoading();
  }
}

// Event listener
buttonEl.addEventListener("click", () => {
  const id = getRandomCharacterId();
  fetchCharacter(id);
});
