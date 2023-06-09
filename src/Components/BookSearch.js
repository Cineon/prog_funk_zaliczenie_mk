import React, { useState } from 'react';


const BookSearch = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    // Przyjmuje wartość boolean.
    const foundBook = books.find((book) =>
      book.title.toLowerCase() === searchTerm.toLowerCase()
    );

    // Wynik wyszukiwarki.
    if (foundBook) {
      setSearchResult(foundBook);
      alert(`Książka "${foundBook.title}" istnieje w naszym spisie.`);
    } else {
      setSearchResult(null);
      alert(`Podany tytuł "${searchTerm}" nie istnieje w naszym spisie.`);
    }

    setSearchTerm('');
  };

  return (
    <div>
      <h3>Wyszukiwarka pozycji</h3>
      <br />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Wpisz tytuł"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Wyszukaj</button>
      </form>
      {searchResult && (
        <div>
          <br />
          <h4>Wynik wyszukiwarki:</h4>
          <p>Tytuł: {searchResult.title}</p>
          <p>Autor: {searchResult.author}</p>
          <p>Rok wydania: {searchResult.year}</p>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
