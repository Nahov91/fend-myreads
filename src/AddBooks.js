import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddBooks extends Component {
    render(){
        return(
            <div className="user-books">
            <div className="open-search">
            <Link to='/search'>Add Books<Link>
            </div>
            </div>
        )
    }
}

export default AddBooks;