import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import BookForm from './BookForm';
import BookSearch from './BookSearch';
import BookList from './BookList';

// Marcin Kubicki, numer albumu: 497 66

function Main() {

    // tablica przechowująca wszystkie dodane książki
    const [books, setBooks] = useState([]);
  
    const addBook = (book) => {
      setBooks([...books, book]);
    }

    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            Biblioteka app
                        </a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/BookForm">
                                        Formularz wysyłkowy
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/book-list">
                                        Lista
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/book-search">
                                        Wyszukiwarka
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="card border-primary m-5">
                    <div className="card-body">
                        <h1 className="card-title"> Biblioteka app </h1>
                        <br /> <br />
                        <Routes>
                            <Route path="/BookForm" element={<BookForm onAddBook={addBook} />} />
                            <Route path="/book-list" element={<BookList books={books} />} />
                            <Route path="/book-search" element={<BookSearch books={books} />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}
export default Main;