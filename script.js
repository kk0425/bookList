const library = [];
addBook("Star Wars", "George Forman", 5, false);
addBook("How to be a Bird", "Dee's a Bird!", 420, true);

function Book(title, author, numOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = numOfPages;
  this.hasBeenRead = hasBeenRead ? "Has been read." : "Has not been read.";
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasBeenRead}`;
}

function addBook(title, author, numOfPages, hasBeenRead) {
  library.push(new Book(title, author, numOfPages, hasBeenRead));
}

const libraryContainer = document.querySelector('#library-list');
function displayLibrary() {
  library.forEach((e) => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');
    bookContainer.textContent = e.info();
    libraryContainer.appendChild(bookContainer);
  });
}
displayLibrary();