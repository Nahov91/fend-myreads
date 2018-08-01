import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  render() {
    const { book, updateShelf, shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193
            }}
          >
          <img
            src={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
            alt={book.title}
          />
          </div>
          <BookShelfChanger
            shelf={shelf}
            book={book}
            updateShelf={updateShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;
