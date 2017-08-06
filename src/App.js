import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from "./BooksList";
import {Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import './App.css'

class App extends React.Component {
    state={
          books:[]
          }
    componentDidMount(){

        BooksAPI.getAll().then((books)=>{console.log(books);this.setState({books})})
    }
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={()=>(<BooksList books={this.state.books} />)}/>
                <Route path="/search" render={()=>(<SearchBooks />)}/>

            </div>
        )
    }
}
export default App
