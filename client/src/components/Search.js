import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import API from '../utils/API';

function Search() {
    const [searchedBook, setSearchedBook] = useState({})
    function searchBook(event) {
        let input = document.getElementById('search').value;
        let modifiedInput = input.replaceAll(' ', '+');
        axios.get(`/api/search/${modifiedInput}`)
            .then(({ data }) => {
                let [title, author, description, link, image] =
                    [data.title, data.authors[0], data.description, data.infoLink, data.imageLinks.thumbnail]
                setSearchedBook({
                    title,
                    author,
                    description,
                    link,
                    image
                });
            });
    }
    function saveBook(event) {
        event.preventDefault();
        API.saveBook(searchedBook)
    }

    return (
        <>
            <div className="row">
                <div className="input-group mb-3">
                    <input
                        type="text" className="form-control"
                        placeholder="Search by title." aria-label="Recipient's username" aria-describedby="button-addon2"
                        id="search"
                    />
                    <button className="btn btn-outline-primary" type="button"
                        onClick={(e) => { searchBook(e) }}
                        id="search-button">Search</button>
                </div>
            </div>
            <div className="row">
                {
                    Object.keys(searchedBook).length !== 0 ?
                        <Book
                            title={searchedBook.title} author={searchedBook.author} description={searchedBook.description}
                            image={searchedBook.image} link={searchedBook.link}
                            saveBook={(e) => {saveBook(e)}}
                        />
                        :
                        <h3>Searched books will appear here.</h3>
                }
            </div>
        </>
    )
}

export default Search;