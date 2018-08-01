import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import Shelf from "./Shelf";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  //using the BooksAPI to get the data
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  //adding book to shelf
  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState(current => ({
      books: current.books
        .filter(currentBook => currentBook.id !== book.id)
        .concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
      {/*URL routing for home*/}
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
              {/*Currently Reading Shelf*/}
                <Shelf
                  title="Currently Reading"
                  books={books}
                  shelf="currentlyReading"
                  updateShelf={this.updateShelf}
                />
                {/* want To Read Shelf */}
                <Shelf
                  title="Want to read"
                  books={books}
                  shelf="wantToRead"
                  updateShelf={this.updateShelf}
                />
                {/* Read Shelf */}
                <Shelf
                  title="Read"
                  books={books}
                  shelf="read"
                  updateShelf={this.updateShelf}
                />
              </div>
              {/* Add button */}
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          )}
        />
        {/* Routing to search page */}
        <Route
          exact
          path="/search"
          render={() => <Search books={books} updateShelf={this.updateShelf} />}
        />
      </div>
    );
  }
}
export default BooksApp;
