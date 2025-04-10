const button = document.getElementById('find');
const characterInfo = document.getElementById('character-info');
const loading = document.getElementById('loading');

button.addEventListener('click', async () => {
  // SWAPI has 88 people in the database (you can adjust this if needed)
  const randomId = Math.floor(Math.random() * 88) + 1;

  function showLoading() {
    loading.classList.remove("hidden");
    button.disabled = true;
  }
  
  function hideLoading() {
    loading.classList.add("hidden");
    button.disabled = false;
  }
  
  showLoading()

  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    const data = await response.json();

      

    if (data.message === "ok") {
      const person = data.result.properties;

      characterInfo.innerHTML = `
        <h2>${person.name}</h2>
        <p><strong>Height:</strong> ${person.height}</p>
        <p><strong>Mass:</strong> ${person.mass}</p>
        <p><strong>Gender:</strong> ${person.gender}</p>
        <p><strong>Birth Year:</strong> ${person.birth_year}</p>
      `;
    } else {
      characterInfo.innerHTML = `<p>Character not found. Try again!</p>`;
    }

  } catch (error) {
    console.error('Error fetching character:', error);
    characterInfo.innerHTML = `<p>Failed to fetch character. Check console.</p>`;
  }
  hideLoading()
});
