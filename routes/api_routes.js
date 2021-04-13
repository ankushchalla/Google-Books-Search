const db = require('../models');
const axios = require('axios')

module.exports = (app) => {
    app.get('/api/books', (req, res) => {
        db.Book.find({})
            .then(dbLibrary => {
                res.json(dbLibrary);
            })
    });

    app.delete('/api/books/:title', (req, res) => {
        db.Book.deleteOne({ title: req.params.title })
            .then((book) => {
                res.json(book)
            })
    });

    // Makes call to Google Books API.
    app.get('/api/search/:book', (req, res) => {
        const API_KEY = process.env.API_KEY;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${req.params.book}&key=${API_KEY}`;
        // console.log("book:", req.params.book);
        axios.get(url)
            .then((response) => {
                let firstBook = response.data.items[0].volumeInfo;
                res.json(firstBook)
            })
            .catch((err) => {
                console.log(err.reason);
            })
    });

    app.post('/api/books', ({body}, res) => {
        db.Book.create(body)
            .then(newBook => {
                res.json(newBook);
            })
    })
}