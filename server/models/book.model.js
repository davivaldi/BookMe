const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is Required"],
    minlength: [3, "Name must have at least 3 Characters"]},
    desc: {type: String, required: [true, 'Price is required'], min: [ 1, "Description must be at least 3 characters Long"]},
    author: {type: String, required: [true, "Author name is Required"],
    minlength: [3, "Name must have at least 3 Characters"]},
    isbn: {type: Number, required: [true, "ISBN is required"],
    minlength: [13, "ISBN Numbers are at least 13 digits long"]},
    image:{type: String},
    rating: {type: Number}
},{timestamps: true});


module.exports = mongoose.model('Book', BookSchema);