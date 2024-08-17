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

const displayBook = (library) => {
  for (const book of library) {
    console.log(book.title);
  }
};
