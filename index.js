function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function (res){
    // console.log(res);
    return res.json();
  })
  .then(function (bookTitles) {
    renderBooks(bookTitles);
  });
}

function renderBooks(books) {
  // console.log(books)
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});