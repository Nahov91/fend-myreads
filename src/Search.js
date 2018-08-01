import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import escapeRegExp from "escape-string-regexp";
import Book from "./Book";
import BookShelChanger from './BookShelfChanger'

class Search extends React.Component {
  state = {
    query: "",
    resultQuery: []
  };

  checkQuery = query => {
    this.setState({ query });
    this.updateSearchResults(query);
  };

  updateSearchResults = query => {
    if (query) {
      BooksAPI.search(query).then(resultQuery => {
        if (resultQuery.error) {
          this.setState({ resultQuery: [] });
        } else {
          this.setState({ resultQuery });
        }
      });
    } else {
      this.setState({ resultQuery: [] });
    }
  };

  render() {
    const { resultQuery, query } = this.state;
    const { updateShelf } = this.props;
    let bookShown=[];

    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      bookShown = resultQuery.filter((book) => match.test(book.title))
    } else {
      bookShown = resultQuery;
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.checkQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookShown.map(resultQuery => {
              let searchedItemShelf;
              bookShown.map((book) => (book.id === bookShown.id ? searchedItemShelf=book.shelf :''
            ));
              return (
                <li key={resultQuery.id}>
                  <Book book={resultQuery} updateShelf={updateShelf} shelf={searchedItemShelf}/>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
