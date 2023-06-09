import React from 'react';


const BookItem = ({ book }) => {
  return (
    <li>
      <span> {book.title}, {book.author}, {book.year} </span>
    </li>
  );
};

export default BookItem;
