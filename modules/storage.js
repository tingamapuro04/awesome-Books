export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static clearfields() {
    document.querySelector('#title-input').value = '';
    document.querySelector('#author-input').value = '';
  }

  addbook() {
    const book = {
      title: this.title.value,
      author: this.author.value,
    };

    const books = [];
    if (JSON.parse(localStorage.getItem('booklist')) === null) {
      books.push(book);
      localStorage.setItem('booklist', JSON.stringify(books));
    } else {
      const newbooks = JSON.parse(localStorage.getItem('booklist'));
      newbooks.push(book);
      localStorage.setItem('booklist', JSON.stringify(newbooks));
    }
  }

  static fetchbooks() {
    const booklist = document.querySelector('.list');
    const data = JSON.parse(localStorage.getItem('booklist'));

    let str = '';
    if (data === null || data.length === 0) {
      str = '<li class="list-item">No book stored!</li>';
    } else {
      data.forEach((book) => {
        str += `<li class="list-item">
          <p>${book.title} by ${book.author}</p>
          <a href="" class="remove-btn" id="remove-book">Remove</a>
        </li>`;
      });
    }
    booklist.innerHTML = str;
  }

  static removebook(id) {
    let data = JSON.parse(localStorage.getItem('booklist'));
    const selectedbook = data[id];
    const filteredBooks = data.filter((item) => item !== selectedbook);
    localStorage.setItem('booklist', JSON.stringify(filteredBooks));
    const newData = JSON.parse(localStorage.getItem('booklist'));
    data = newData;
  }
}