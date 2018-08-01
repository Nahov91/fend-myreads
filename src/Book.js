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
          {/* book cover images from database or generated
              placeholder using placeholder.com if not found. */}
            <img
              src={book.imageLinks ? book.imageLinks.smallThumbnail : "http://via.placeholder.com/128x193/2e7d32/fff?text=No+cover+found"}
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
    );
  }
}

export default Book;
