import React, { Component } from 'react'
import Book from './Book'
import BookShelfChanger from './BookShelfChanger'

export class Shelf extends Component {
  render() {
    const {title} = this.props
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book/>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
