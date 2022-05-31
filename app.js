// Book class: Represents a book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI class: Handle UI Task
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title} by ${book.author}</td>

    <td class="d-flex justify-content-end"><a href='#' class="btn btn-light border border-dark btn-sm delete ">Remove</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearfields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Store class: Handles storage
class Store {
  // get books
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
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  // remove book

  static removeBook(index) {
    const books = Store.getBooks(index);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Events: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instantiate book
  const book = new Book(title, author);

  // add Book to UI
  UI.addBookToList(book);

  // add Book to Store
  Store.addBook(book);

  // clear fields
  UI.clearfields();
});

// Event: remove book

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove Book from UI
  UI.deleteBook(e.target);

  // remove book from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});