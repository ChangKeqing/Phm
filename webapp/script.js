fetch('books.json')
  .then(response => response.json())
  .then(books => {
    const list = document.getElementById('books');
    books.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Failed to load books:', err));
