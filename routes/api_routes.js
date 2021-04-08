const db = require('../models');

module.exports = (app) => {
    app.get('/api/books', (req, res) => {
        db.Book.find({})
            .then(dbLibrary => {
                res.json(dbLibrary);
            })
    });

    app.delete('/api/books/:book', (req, res) => {
        console.log("book:", req.params);
    })
}