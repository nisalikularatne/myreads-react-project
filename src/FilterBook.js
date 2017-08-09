import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
class FilterBook extends Component{
    state={};
    render(){
        const {filteredBooks,shiftBook} =this.props;

        return(
        <div className="list-books">
            <div className="Currently Reading">
                    <ol className="books-grid">
                    {filteredBooks.map((filteredBook)=>
                        <li>
                                    <div className="bookshelf-books">
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${filteredBook.imageLinks.thumbnail})` }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select
                                                                name="shelf"
                                                                onChange={ function handleonChange(e) {
                                                                    shiftBook(filteredBook,e)
                                                                }}
                                                                value= {filteredBook.shelf}
                                                            >
                                                                <option value="none" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{filteredBook.title}</div>

                                                    <div className="book-authors">{filteredBook.author}</div>
                                                </div>
                                        </div>
                                    </li>



                    )}

                    </ol>
                </div>
</div>


        )
    }
}
export default FilterBook;