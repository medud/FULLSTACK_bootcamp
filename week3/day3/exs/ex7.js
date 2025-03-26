// 1
const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://m.media-amazon.com/images/I/81OtwkiBhnL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];

// 2
const bookSection = document.querySelector(".listBooks");

// 3
allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.style.marginBottom = "20px";
    bookDiv.style.padding = "10px";
    bookDiv.style.border = "1px solid black";
    bookDiv.style.display = "flex";
    bookDiv.style.alignItems = "center";
    bookDiv.style.gap = "10px";

    const bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";

    const bookInfo = document.createElement("p");
    bookInfo.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookInfo.style.color = "red";
    }

    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookInfo);

    bookSection.appendChild(bookDiv);
});
