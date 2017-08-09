import React, { Component } from "react";
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom';
class SearchBooks extends Component {
    state = {query: '',
             results:[]
           }
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.search(this.state.query,10)

    }
    search=(query,maxResults)=>{

        BooksAPI.search(query,maxResults).then(results=>{
            this.setState({
                results:results
            })
        })
    }
    render() {
        const {results} = this.state;
        const { query } = this.state;
        const { onshiftBook } = this.props;
        let showingBooks
           if (this.state.query) {
               const match = new RegExp(escapeRegExp(this.state.query), 'i')
               showingBooks =results.filter((result) => match.test(result.title))
                                 }
           else {
               showingBooks = results
           }

               showingBooks.sort(sortBy('title'))
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="close-search">
                        <Link to="/" className="close-search">Close</Link>
                    </div>
                    <div className="search-books-input-wrapper">
                        {/*
                              NOTES: The search from BooksAPI is limited to a particular set of search terms.
                              You can find these search terms here:
                              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                              you don't find a specific author or title. Every search is limited by search terms.
                         */}
                         <input type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                         />
                    </div>
                    </div>
                <div className="search-books-results">
                    <ol className="books-grid" />
                    <div className="book-title">
                        <ol className="books-grid">
                        {showingBooks.map((Book) =>(
                            <li>
                                <div className="bookshelf-books">
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${Book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select
                                                    name="shelf"
                                                    onChange={ function handleonChange(e) {
                                                        onshiftBook(Book,e)
                                                    }}

                                                    value= {Book.shelf}
                                                >
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{Book.title}</div>
                                        <div className="book-authors">{Book.author}</div>
                                    </div>
                                </div>
                            </li>


                        ))}
                        </ol>
                    </div>
                </div>
              </div>
                );
              }
    }

export default SearchBooks;