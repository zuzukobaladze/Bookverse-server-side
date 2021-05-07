const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./../models/bookModel');

dotenv.config({path: './config.env'})

let DB = process.env.DB_LINK.replace('<password>', process.env.DB_PASSWORD);
DB = DB.replace('<username>', process.env.DB_USERNAME);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(con => console.log('connection successful'))

//Read JSON file
const books = JSON.parse(fs.readFileSync(`${__dirname}/books-sample.json`, 'utf-8'));

//Import data into DB
const importData = async () => {
    try {
        await Book.create(books, 1)
        console.log('Data loaded successfully')
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

//Delete all data from Collection
const deleteData = async () => {
    try {
        await Book.deleteMany()
        console.log('Data deleted successfully')
        process.exit();
    } catch (error) {
        console.log(error)
    }
}

if (process.argv[2] === "--import"){
    importData();
}
else if(process.argv[2] === "--delete"){
    deleteData();
}

console.log(process.argv);