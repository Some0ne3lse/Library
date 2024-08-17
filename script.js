const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const addBookToLibrary = (title, author, pages, read) => {
  myLibrary.push(new Book(title, author, pages, read));
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary("test", "test2", 200, false);
addBookToLibrary(
  "The Hitchhiker's Guide to the Galaxy",
  "Douglas Adams",
  216,
  true
);

let booksDisplay = document.querySelector("#allBooks");

const displayBooks = (library) => {
  for (const book of library) {
    const theBook = document.createElement("div");
    theBook.classList.add("the-book");
    booksDisplay.appendChild(theBook);

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = book.title;
    theBook.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = book.author;
    theBook.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = book.pages;
    theBook.appendChild(pages);

    const readOrNot = document.createElement("p");
    readOrNot.classList.add("read-or-not");
    if (book.read === true) {
      readOrNot.textContent = "This book has been read";
    } else {
      readOrNot.textContent = "This book has not been read";
    }
    theBook.appendChild(readOrNot);
  }
};

displayBooks(myLibrary);

let newBookButton = document.querySelector("#newBook");

let formContainer = document.querySelector("#formContainer");

formContainer.style.display = "none";

const changeDisplay = (content) => {
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
};

newBookButton.onclick = function () {
  changeDisplay(formContainer);
};

let formItself = document.querySelector("#formItself");
formItself.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    document.querySelector("input[name='readOrNot']:checked").value === "true"
  ) {
    read = true;
  } else {
    read = false;
  }
  title = document.querySelector("#title").value;
  author = document.querySelector("#author").value;
  pages = document.querySelector("#pages").value;
  addBookToLibrary(title, author, pages, read);
  booksDisplay.replaceChildren();
  displayBooks(myLibrary);
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#hasBeenRead").checked = "true";
  changeDisplay(formContainer);
});
