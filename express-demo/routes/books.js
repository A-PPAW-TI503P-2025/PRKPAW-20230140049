const express = require('express');
const router = express.Router();


let books = [
	{ id: 1, title: 'Book 1', author: 'Author 1' },
	{ id: 2, title: 'Book 2', author: 'Author 2' }
];

// READ
router.get('/', (req, res) => {
	res.json(books);
});

// READ
router.get('/:id', (req, res) => {
	const book = books.find(b => b.id === parseInt(req.params.id));
	if (!book) return res.status(404).send('Book not found');
	res.json(book);
});

// CREATE
router.post('/', (req, res) => {

	const { title, author } = req.body;
	if (!title || !author) {
		return res.status(400).json({ message: 'Title and author are required' });
	}

	const newBook = {
		id: books.length ? books[books.length - 1].id + 1 : 1,
		title,
		author
	};
	books.push(newBook);
	res.status(201).json(newBook);
});

// UPDATE
router.put('/:id', (req, res) => {
	const book = books.find(b => b.id === parseInt(req.params.id));
	if (!book) return res.status(404).send('Book not found');


	const { title, author } = req.body;
	if (!title || !author) {
		return res.status(400).json({ message: 'Title and author are required' });
	}

	book.title = title;
	book.author = author;
	res.json(book);
});

// DELETE
router.delete('/:id', (req, res) => {
	const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
	if (bookIndex === -1) return res.status(404).send('Book not found');

	const deletedBook = books.splice(bookIndex, 1);
	res.json({ message: 'Book deleted successfully', book: deletedBook[0] });
});

module.exports = router; 