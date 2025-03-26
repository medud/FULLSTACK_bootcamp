// 1
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "goldenrod", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "orange", moons: 79 },
    { name: "Saturn", color: "khaki", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2
const planetSection = document.querySelector(".listPlanets");

// 3
planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    planetDiv.style.position = "relative";
    planetDiv.style.margin = "20px";
    
    for (let i = 0; i < planet.moons; i++) {
        let moon = document.createElement("div");
        moon.classList.add("moon");

        let angle = Math.random() * 360;
        let distance = 50 + Math.random() * 50; 
        let x = Math.cos(angle) * distance;
        let y = Math.sin(angle) * distance;
        moon.style.left = `${50 + x}px`;
        moon.style.top = `${50 + y}px`;

        planetDiv.appendChild(moon);
    }

    planetSection.appendChild(planetDiv);
});
