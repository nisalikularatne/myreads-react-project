import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FilterBook from "./FilterBook";
class BooksList extends Component{
    state={};
    render(){
        const { books,onshiftBook }=this.props;// for plural objects
        const currentlyReading = books.filter(book=>book.shelf==='currentlyReading')
        const wantToRead = books.filter(book=>book.shelf==='wantToRead')
        const read = books.filter(book=>book.shelf==='read')
     return(
        <div className="app-whole">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>

            <FilterBook filteredBooks ={currentlyReading}
                        shiftBook={onshiftBook}/>
                    </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>

                    <FilterBook filteredBooks ={wantToRead}
                                shiftBook={onshiftBook}/>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>

                    <FilterBook filteredBooks ={read}
                                shiftBook={onshiftBook}/>
                </div>
                </div>


            <div className="open-search">
            <Link to="/search">Search</Link>
        </div>
            </div>

    )
}
}
export default BooksList;