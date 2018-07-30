import React from 'react'
import { Route, Link } from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Shelf from './Shelf'
import BookShelfChanger from './BookShelfChanger'

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
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                /********** Currently Reading *****/
                <Shelf title='Currently Reading'/>
                /********** WantToRead ********/

                <Shelf title='Want to read'/>
                    /******* Read Component *******/
                <Shelf title='Read'/>
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
