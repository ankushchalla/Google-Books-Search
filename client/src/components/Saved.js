import React from 'react';
import Book from './Book';

function Saved({ books, deleteBook }) {
    return (
        <>
        <div className="books">
            {books.map(book => {
                return <Book 
                title={book.title}
                author={book.author}
                description={book.description}
                image={book.image}
                link={book.link}
                deleteBook={deleteBook}
                key={book.title}
                />
            })}
        </div>
        <h4 className="mt-2">Some books not displaying? Try reloading the page.</h4>
        </>
    )
}

export default Saved;