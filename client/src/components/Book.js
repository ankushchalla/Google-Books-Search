import React from 'react';

function Book({ title, author, description, image, link, deleteBook, saveBook }) {
    return (
        <div className="row">
            <div className="book card">
                <h5 className="card-title ml-2">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted ml-2">{author}</h6>
                <div className="row">
                    <div className="col-3">
                        <img src={image} className="card-img-top ml-2" alt="..." />
                    </div>
                    <div className="col-9 card-body">
                        <p className="card-text">{description}</p>
                        <a href={link} target='_blank' rel="noreferrer" className="btn btn-outline-primary">View</a>
                        {
                            saveBook != null ?
                                <a onClick={(e) => saveBook(e)} className="btn ml-2 btn-outline-success">Save</a>
                                :
                                <a onClick={() => deleteBook(title)} className="btn ml-2 btn-outline-danger">Delete</a>
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Book;