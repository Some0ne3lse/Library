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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

addBookToLibrary("test", "test2", 200, "not read yet");
addBookToLibrary(
  "The Hitchhiker's Guide to the Galaxy",
  "Douglas Adams",
  216,
  "read"
);

let table = document.querySelector("#libraryTable");

const displayBook = (library) => {
  for (const book of library) {
    let row = table.insertRow(-1);
    let c0 = row.insertCell(0);
    let c1 = row.insertCell(1);
    let c2 = row.insertCell(2);
    let c3 = row.insertCell(3);

    c0.innerText = book.title;
    c1.innerText = book.author;
    c2.innerText = book.pages;
    c3.innerText = book.read;
  }
};

displayBook(myLibrary);
