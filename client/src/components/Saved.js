import React from 'react';
import Book from './Book';

function Saved(props) {
    let books = props.books;
    return (
        <div className="books">
            {books.map(book => {
                return <Book 
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                key={book.title}
                />
            })}
        </div>
    )
}

export default Saved;