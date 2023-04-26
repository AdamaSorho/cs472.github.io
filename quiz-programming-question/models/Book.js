class Book {
  constructor(title, author) {
    this.bookId = ++counter;
    this.title = title;
    this.author = author;
  }

  save() {
    dbBooks.push(this);

    return this;
  }

  static findAll() {
    return dbBooks;
  }

  static findById(bookId) {
    return dbBooks.find((book) => book.bookId == bookId);
  }

  static filterByFirstname(firstname) {
    return dbBooks.filter((book) =>
      book.author.firstname.toLowerCase().includes(firstname.toLowerCase())
    );
  }
}

let counter = 0;
let dbBooks = [];

module.exports = Book;
