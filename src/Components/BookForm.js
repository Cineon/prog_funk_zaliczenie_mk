import React, { useState } from 'react';


const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  // Funkcja reagująca na event wysłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();

    // Walidacja formularza
    if (!title || !author || !year) {
      alert('Proszę uzupełnić wszystkie pola!');
      return;
    }
    if (isNaN(year)) {
      alert('Rok wydania musi być liczbą całkowitą!');
      return;
    }

    // Tworzenie obiektu book
    const book = {
      title,
      author,
      year
    };

    // Komunikacja child-parent, przekazanie obiektu book
    onAddBook(book);

    // Wyczyszczenie inputów
    setTitle('');
    setAuthor('');
    setYear('');

    // Wiadomość dla pomyślnego dodania książki do bazy
    alert(`Dodano "${book.title}" do naszego rekordu.`);
  };

  return (
    <div>
      <h3>Dodaj książkę do spisu</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rok wydania"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Dodaj pozycję</button>
      </form>
    </div>
  );
};
export default BookForm;
