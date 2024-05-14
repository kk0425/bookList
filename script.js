function Book(title, author, numOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = numOfPages;
  this.hasBeenRead = hasBeenRead ? "Has been read." : "Has not been read.";
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasBeenRead}`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());