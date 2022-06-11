const navigationMenu = () => {
  const listSection = document.querySelector('.booklist');
  const addSection = document.querySelector('.addnew');
  const contactSection = document.querySelector('.contacts');

  const listMenuLink = document.querySelector('#bookslist');
  const addMenuLink = document.querySelector('#addbooks');
  const contactMenuLink = document.querySelector('#contact');

  document.querySelectorAll('.navbar').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      listMenuLink.addEventListener('click', () => {
        listSection.style.display = 'block';
        addSection.style.display = 'none';
        contactSection.style.display = 'none';
      });

      addMenuLink.addEventListener('click', () => {
        listSection.style.display = 'none';
        addSection.style.display = 'block';
        contactSection.style.display = 'none';
      });

      contactMenuLink.addEventListener('click', () => {
        listSection.style.display = 'none';
        addSection.style.display = 'none';
        contactSection.style.display = 'block';
      });
    });
  });
};
export { navigationMenu };