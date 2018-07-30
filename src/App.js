import React from 'react'
import { Route, Link } from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Read from './Read'
import BookShelfChanger from './BookShelfChanger'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                /********** Currently Reading *****/
                <CurrentlyReading/>
                /********** WantToRead ********/

                <WantToRead/>
                    /******* Read Component *******/
                <Read/>
            </div>
                    /******* Search Component *****/
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }}

export default BooksApp
