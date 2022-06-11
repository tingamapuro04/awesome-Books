import * as menu from './modules/menu.js';
import { Book } from './modules/storage.js';
import { DateTime } from './modules/luxon.min.js';

menu.navigationMenu();

const now = DateTime.now();
const dateTime = document.querySelector('.datetime p');
dateTime.textContent = now.toJSDate();

const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');

const bk = new Book(titleInput, authorInput);

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  bk.addbook();
  Book.clearfields();
  Book.fetchbooks();
});

Book.fetchbooks();

document.querySelectorAll('#remove-book').forEach((button, id) => {
  button.addEventListener('click', () => {
    Book.removebook(id);
    Book.fetchbooks();
  });
});