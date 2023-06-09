import React from 'react';
import BookItem from './BookItem';

// Komunikacja parent-child
// wyświetlenie zmapowanych pozycji
const BookList = ({ books }) => {
  return (
    <div>
    <h3>Lista książek</h3>
    <br />
    <ul>
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </ul>
    </div>
  );
};

export default BookList;
