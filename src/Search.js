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
    const { books } = this.props;
    let bookShown=[];
console.log(this.props.books)

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
              bookShown.map((book) => (book.id === bookShown.id ));
              return (
                <li>
                  <Book book={resultQuery} key={resultQuery.id} />
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
