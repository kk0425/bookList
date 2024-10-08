const library = [];
addBook("Star Wars", "George Forman", 5, false);
addBook("How to be a Bird", "Dee's a Bird!", 420, true);

/*
function Book(title, author, numOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = numOfPages;
  this.hasBeenRead = hasBeenRead;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasBeenRead ? "Has been read." : "Has not been read."}`;
}
*/

class Book {
  constructor(title, author, numOfPages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = numOfPages;
    this.hasBeenRead = hasBeenRead;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasBeenRead ? "Has been read." : "Has not been read."}`;
  }
}

function addBook(title, author, numOfPages, hasBeenRead) {
  library.push(new Book(title, author, numOfPages, hasBeenRead));
}

const libraryContainer = document.querySelector('#library-list');
function displayLibrary() {
  libraryContainer.innerHTML = '';
  library.forEach((book) => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');
    bookContainer.textContent = book.info();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      library.splice(library.indexOf(book), 1);
      displayLibrary();
    });

    const toggleReadStatus = document.createElement('button');
    toggleReadStatus.textContent = "Has been read?";
    toggleReadStatus.classList.add('toggle-read-status');
    toggleReadStatus.addEventListener('click', () => {
      book.hasBeenRead = book.hasBeenRead ? false : true;
      displayLibrary();
    });
    bookContainer.appendChild(toggleReadStatus);
    bookContainer.appendChild(deleteButton);
    libraryContainer.appendChild(bookContainer);
  });
}

const addButton = document.querySelector('#add-book');
const dialog = document.querySelector('#add-book-dialog');
const closeButton = document.querySelector('#close-button');
const submitButton = document.querySelector('#submit-button');
addButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});

const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const pages = document.querySelector('#book-pages');
const beenRead = document.querySelector('#has-been-read');
const addBookForm = document.querySelector('#add-book-form');
addBookForm.addEventListener('submit', () => {
  addBook(title.value, author.value, Number(pages.value), beenRead.checked);
  addBookForm.reset();
  displayLibrary();
});

displayLibrary();