import { DateTime } from './modules/luxon.js';
import Book from './modules/index1.js';

const listOfBooks = document.querySelector('#list');
const addBooks = document.querySelector('#add');
const contactUs = document.querySelector('#contact1');
const contact = document.querySelector('.contact');
const listComplete = document.querySelector('.all-box');
const awesomeH1 = document.querySelector('.awesome-h1');
const date = document.querySelector('.Date');

// Events: display books
document.addEventListener('DOMContentLoaded', Book.displayBooks());

// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instantiate book
  const book = new Book(title, author);

  // add Book to UI
  Book.addBookToList(book);

  // add Book to Store
  Book.addBook(book);

  // clear fields
  Book.clearfields();
});

// Event: remove book

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove Book from UI
  Book.deleteBook(e.target);

  // remove book from local storage
  Book.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

const form = document.querySelector('.add-box');
addBooks.addEventListener('click', () => {
  form.style.display = 'block';
  contact.style.display = 'none';
  listComplete.style.display = 'none';
  awesomeH1.style.display = 'none';
});

listOfBooks.addEventListener('click', () => {
  listComplete.style.display = 'block';
  awesomeH1.style.display = 'block';
  contact.style.display = 'none';
  form.style.display = 'none';
});

contactUs.addEventListener('click', () => {
  contact.style.display = 'flex';
  listComplete.style.display = 'none';
  awesomeH1.style.display = 'none';
  form.style.display = 'none';
});

window.addEventListener('load', () => {
  listComplete.style.display = 'block';
});

date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
