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

const booksDisplay = document.querySelector("#allBooks");

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

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";
    theBook.appendChild(deleteButton);

    deleteButton.onclick = function () {
      const findBook = myLibrary.findIndex(
        (element) =>
          element.title === book.title && element.author === book.author
      );

      if (findBook !== -1) {
        myLibrary.splice(findBook, 1);
        booksDisplay.replaceChildren();
        displayBooks(myLibrary);
      } else {
        console.log("Book not found in the library.");
      }
    };
    const readOrNotButton = document.createElement("button");
    readOrNotButton.classList.add("read-or-not-button");
    readOrNotButton.textContent = "Read?";
    theBook.appendChild(readOrNotButton);

    readOrNotButton.onclick = function () {
      book.read = !book.read;
      booksDisplay.replaceChildren();
      displayBooks(myLibrary);
    };
  }
};

displayBooks(myLibrary);

const newBookButton = document.querySelector("#newBook");

const formContainer = document.querySelector("#formContainer");

const alreadyAdded = document.querySelector("#alreadyAdded");
alreadyAdded.style.visibility = "hidden";

newBookButton.onclick = function () {
  formContainer.showModal();
};

const formItself = document.querySelector("#formItself");
formItself.addEventListener("submit", (event) => {
  event.preventDefault();
  let read;
  if (
    document.querySelector("input[name='readOrNot']:checked").value === "true"
  ) {
    read = true;
  } else {
    read = false;
  }
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  if (
    myLibrary.find(
      (book) =>
        book.title.toLowerCase() === title.toLowerCase() &&
        book.author.toLowerCase() === author.toLowerCase()
    )
  ) {
    alreadyAdded.style.visibility = "visible";
  } else {
    addBookToLibrary(title, author, pages, read);
    booksDisplay.replaceChildren();
    displayBooks(myLibrary);
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#hasBeenRead").checked = "true";
    formContainer.close();
  }
});

const cancelButton = document.querySelector("#closeModal");
cancelButton.onclick = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#hasBeenRead").checked = "true";
  formContainer.close();
};
