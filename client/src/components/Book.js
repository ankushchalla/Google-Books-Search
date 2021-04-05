import React from 'react';

function Book({ title, authors, description, image, link }) {
    return (
        <div className="row">
            <div className="book card">
                <h5 className="card-title ml-2">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted ml-2">{authors.reduce((a, name) => name + " ", "")}</h6>
                <div className="row">
                    <div className="col-3">
                        <img src={image} className="card-img-top ml-2" alt="..." />
                    </div>
                    <div className="col-9 card-body">
                        <p className="card-text">{description}</p>
                        <a href={link} className="btn btn-primary">View</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Book;