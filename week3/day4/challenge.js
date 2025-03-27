document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("libform");
    const storySpan = document.getElementById("story");

    const stories = [
        "{person} went to {place} with a {adjective} {noun}. They decided to {verb} all day long!",
        "One day, {person} found a {adjective} {noun} in {place}. It made them {verb} with joy!",
        "{person} loves to {verb} at {place} while holding a {adjective} {noun}."
    ];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const noun = document.getElementById("noun").value;
        const adjective = document.getElementById("adjective").value;
        const person = document.getElementById("person").value;
        const verb = document.getElementById("verb").value;
        const place = document.getElementById("place").value;

        if (!noun || !adjective || !person || !verb || !place) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const randomStory = stories[Math.floor(Math.random() * stories.length)]
            .replace("{person}", person)
            .replace("{place}", place)
            .replace("{adjective}", adjective)
            .replace("{noun}", noun)
            .replace("{verb}", verb);

        storySpan.textContent = randomStory;
    });

    const shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Shuffle Story";
    shuffleButton.style.marginLeft = "10px";
    document.body.appendChild(shuffleButton);

    shuffleButton.addEventListener("click", function () {
        if (!storySpan.textContent) return; 

        const randomStory = stories[Math.floor(Math.random() * stories.length)]
            .replace("{person}", document.getElementById("person").value)
            .replace("{place}", document.getElementById("place").value)
            .replace("{adjective}", document.getElementById("adjective").value)
            .replace("{noun}", document.getElementById("noun").value)
            .replace("{verb}", document.getElementById("verb").value);

        storySpan.textContent = randomStory;
    });
});
