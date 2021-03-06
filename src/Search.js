import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import escapeRegExp from "escape-string-regexp";
import Book from "./Book";

class Search extends React.Component {
  state = {
    query: "",
    resultQuery: []
  };

  /* grabs the query */
  checkQuery = query => {
    this.setState({ query });
    this.updateSearchResults(query);
  };

  /* Searches the BookAPI for results. In casre of an error gives back an empty array */
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
    const { updateShelf, books } = this.props;
    let bookShown=[];

    /* gets rid of special characters */
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      bookShown = resultQuery.filter((book) => match.test(book.title))
    } else {
      bookShown = resultQuery;
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
        {/* back link in search page */}
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
          {/* Input field, instantly checks on change of value
              and is automatically in focus */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.checkQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {/* mapping through books and displaying them */}
            {bookShown.map(resultQuery => {
              let searchedItemShelf;
              books.map((book) => (book.id === resultQuery.id ? searchedItemShelf=book.shelf :''
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
