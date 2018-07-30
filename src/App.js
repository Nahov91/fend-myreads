import React from 'react'
import { Route, Link } from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Shelf from './Shelf'
import BookShelfChanger from './BookShelfChanger'
import Book from './Book'
import { BrowserRouter } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
  }

  render() {
    const {books}=this.state
    return (
      <BrowserRouter>
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf title='Currently Reading' books={books} shelf='currentlyReading'/>
                <Shelf title='Want to read' books={books} shelf='wantToRead'/>
                <Shelf title='Read' books={books} shelf='read'/>
            </div>
            <div className="open-search">
              <Link to='/search'>Search</Link>
            </div>
          </div>
      </div>
      </BrowserRouter>
              )}
    
  }

export default BooksApp
