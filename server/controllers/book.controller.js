const Book = require("../models/book.model");

exports.index = function(req,res) {
    Book.find()
    .then(book => res.json(book))
    .catch(err => res.json(err));
}

exports.getBook = function(req,res) {
    Book.findOne({_id: req.params._id})
    .then(bookData => res.json(bookData))
    .catch(err => res.json(err)); 
}

exports.createBook= function(req,res) {
    const book = new Book();
    book.author = req.body.author;
    book.title = req.body.title;
    book.desc = req.body.desc;
    book.isbn = req.body.isbn;
    book.rating=5;
    book.image= "https://uwm.edu/studentinvolvement/wp-content/plugins/uwmpeople/images/profile-default.jpg";



    book
    .save()
    .then(NewBook => res.json({message: "Success", book: NewBook}))
    .catch(err =>res.json(err));    
}

exports.deleteOne = function(req,res) {
    const id = req.params._id;
    console.log(id);
   Book.findOneAndDelete({_id: id})
    .then(BookData => res.json(BookData))
    .catch(err => res.json(err));  
}

exports.updateOne = function(req,res) {
    console.log("i made it momma look im updating");
    console.log(req.params._id)

    Book.updateOne({_id: req.params._id}, {
        author : req.body.author,
        title : req.body.title,
        desc :req.body.desc,
        isbn : req.body.isbn,
        rating : req.body.rating,
        image : req.body.image,
         
    } )
        .then(BookData => res.json(BookData))
        .catch(err => res.json(err));
}