import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

export const receiveAllBooks = books => ({
    type: RECEIVE_ALL_BOOKS,
    books
});

export const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const fetchBooks = () => dispatch => (
    BookApiUtil.fetchBooks()
        .then(books => dispatch(receiveAllBooks(books)))
);

export const fetchBook = bookId => dispatch => (
    BookApiUtil.fetchBook(bookId)
        .then(book => dispatch(receiveBook(book)))
);