import React from "react";

function Search() {
    function searchBook(event) {
        let input = document.getElementById('search').value;
        console.log("value:", input);
    }

    return (
        <>
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
        </>
    )
}

export default Search;