import React from 'react'
import './App.css'
import Book from './Book'

class CurrentlyReading extends React.Component {


	render () {
    const { books, changeShelf } = this.props

    return (


		<div className="bookshelf">
	      <h2 className="bookshelf-title">Reading</h2>
	      <div className="bookshelf-books">
	        <ol className="books-grid">
		        {books.filter(book => book.shelf === 'currentlyReading').map((book) => 
		        	<Book key={book.id} book={book} changeShelf={changeShelf} />
		        )}
		        
	        </ol>
	      </div>
	    </div>

	)}
}

export default CurrentlyReading