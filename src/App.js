import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import Shelf from "./Shelf";
import BookShelfChanger from "./BookShelfChanger";
import Book from "./Book";
import { BrowserRouter } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

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
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Shelf
                  title="Currently Reading"
                  books={books}
                  shelf="currentlyReading"
                  updateShelf={this.updateShelf}
                />
                <Shelf
                  title="Want to read"
                  books={books}
                  shelf="wantToRead"
                  updateShelf={this.updateShelf}
                />
                <Shelf
                  title="Read"
                  books={books}
                  shelf="read"
                  updateShelf={this.updateShelf}
                />
              </div>
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          )}
        />
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
