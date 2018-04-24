import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const LOADING_BOOK = 'LOADING_BOOK';
export const LOADING_BOOKS = 'LOADING_BOOKS';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';

export const receiveAllBooks = books => ({
    type: RECEIVE_ALL_BOOKS,
    books
});

export const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const loadBook = () => ({
    type: LOADING_BOOK
});

export const loadBooks = () => ({
    type: LOADING_BOOKS
});

export const receiveBookErrors = errors => ({
    type: RECEIVE_BOOK_ERRORS,
    errors
});

export const fetchBooks = () => dispatch => {
    dispatch(loadBooks());
    return BookApiUtil.fetchBooks()
        .then(books => dispatch(receiveAllBooks(books)));
};

export const fetchBook = bookId => dispatch => {
    dispatch(loadBook());
    return BookApiUtil.fetchBook(bookId).then(
        (book) => dispatch(receiveBook(book)),
        (err) => dispatch(receiveBookErrors(err.responseJSON))
    );
};

const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
});

export const searchDatabase = (query) => dispatch => (
    BookApiUtil.searchBookDatabase(query)
        .then(results => dispatch(receiveSearchResults(results)))
);