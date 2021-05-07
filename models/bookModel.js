const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A book must have a title'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'A book must have an author'],
        trim: true
    },
    country: {
        type: String,
        required: [true, "A book must have a country of origin"],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A book must have a description'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'A book must have a category'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'A book must have a price']
    },
    pages: {
        type: Number,
        required: [true, 'A book must have pages']
    },
    average_ratings: {
        type: Number,
        default: 0
    },
    book_cover: {
        type: String,
        required: [true, 'A book must have a cover image']
    },
    amount_in_stock: {
        type: Number,
        default: 0
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;