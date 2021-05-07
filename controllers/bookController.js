const Book = require('./../models/bookModel');
const APIfeatures = require('./../utils/apiFeatures');

exports.TopCheapBooks = (req, res, next) => {
    req.query.limit = '1000';
    req.query.sort = 'price';
    req.query.fields = 'name,price,difficulty,summary';

    next();
}

exports.getAllBooks = async (req, res) => {
    try {

        //Execute Query
        const features = new APIfeatures(Book.find(), req.query).filter().sort().limitFields().paginate();
        const books = await features.query;

        //Send Response
        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books
            }
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.getBook = async(req, res) => {
    try {
        //Execute Query
        const book = await Book.findById(req.params.id);

        //Send Response
        res.status(200).json({
            status: 'success',
            data: {
                book
            }
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.createBook = async (req,res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                book: book
            }
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
        })
    }
}

exports.updateBook = async (req,res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data:{
                book
            }
        });
    } 
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.deleteBook = async (req,res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
}