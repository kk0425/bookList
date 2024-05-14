function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = numOfPages;
  this.hasBeenRead = hasBeenRead ? "Has been read." : "Has not been read.";
  this.bookInfo = function () {
    return title + " by " + author + ", " + numOfPages + "pages, " + hasBeenRead;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

console.log(theHobbit.info());