const express = require('express');
const bookController = require('./../controllers/bookController');
const router = express.Router();

router.route('/cheapest').get(bookController.TopCheapBooks, bookController.getAllBooks);

router.route('/').get(bookController.getAllBooks).post(bookController.createBook)
router.route('/:id').get(bookController.getBook, bookController.updateBook, bookController.deleteBook);


module.exports = router;