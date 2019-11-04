module.exports =function(app) {
    const book = require('../controllers/book.controller');

    app.get("/api/books", book.index)

    app.get("/api/book/:_id", book.getBook)

    app.post("/api/book", book.createBook)

    app.put("/api/book/:_id", book.updateOne)

    app.delete("/api/book/:_id", book.deleteOne)
    
}