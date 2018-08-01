import React from "react";
import Book from "./Book";

class Shelf extends React.Component {
  render() {
    const { title, books, shelf, updateShelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {/* shows the shelf for each individual book */}
            <li>
              {books
                .filter(book => book.shelf === shelf)
                .map(book => (
                  <Book
                    book={book}
                    key={book.id}
                    updateShelf={updateShelf}
                    shelf={shelf}
                  />
                ))}
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
