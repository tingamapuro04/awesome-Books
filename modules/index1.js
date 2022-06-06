// Book class: Represents a book
export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // method to handle ui
  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => Book.addBookToList(book));
  }

  // Add book
  static addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title} by ${book.author}</td>

    <td class="d-flex justify-content-end"><a href='#' class="btn btn-light border border-dark btn-sm delete ">Remove</a></td>
    `;

    list.appendChild(row);
  }

  // Delete a book
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // Clear input fields after an entry
  static clearfields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  // methods to handle storage
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // add book
  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  // remove book

  static removeBook(index) {
    const books = Book.getBooks(index);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
