// Array of robot data (you can expand this or fetch from an API)
const robots = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca"
    }
  ];
  
  // Function to create a robot card
  function createCard(robot) {
    return `
      <div class="card">
         <img src="https://robohash.org/${robot.id}?size=200x200" alt="Robot Image">
        <h2>${robot.name}</h2>
        <p>${robot.email}</p>
      </div>
    `;
  }
  
  // Function to render the robot list
  function displayRobots(robotsToDisplay) {
    const robotList = document.getElementById('robotList');
    robotList.innerHTML = robotsToDisplay.map(createCard).join('');
  }
  
  // Initial render
  displayRobots(robots);
  
  // Event listener for live search
  document.getElementById('searchBox').addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();
    const filtered = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchValue)
    );
    displayRobots(filtered);
  });
  