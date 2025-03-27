// 1
const h1 = document.querySelector("h1");
console.log(h1);

// 2
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
if (paragraphs.length > 0) {
    article.removeChild(paragraphs[paragraphs.length - 1]); 
}

// 3 3
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

// 4
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

// 5
const boldButton = document.getElementById("boldBtn");
boldButton.addEventListener("click", () => {
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

//  BONUS 1: 
h1.addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 101) + "px";
    h1.style.fontSize = randomSize;
});

//  BONUS 2: 
if (paragraphs.length > 1) {
    paragraphs[1].addEventListener("mouseover", () => {
        paragraphs[1].classList.add("fade");
    });
}
