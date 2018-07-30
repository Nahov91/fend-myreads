import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import Book from './Book'

export class WantToRead extends Component {
  render() {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          <Book/>
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
