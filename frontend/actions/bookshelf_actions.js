import * as BookshelfApiUtil from '../util/bookshelf_api_util';

export const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';

const receiveAllBookshelves = bookshelves => ({
    type: RECEIVE_ALL_BOOKSHELVES,
    bookshelves
});

const receiveBookshelf = bookshelf => ({
    type: RECEIVE_BOOKSHELF,
    bookshelf
});

const removeBookshelf = bookshelfId => ({
    type: REMOVE_BOOKSHELF,
    bookshelfId
});

export const fetchBookshelves = () => dispatch => (
    BookshelfApiUtil.fetchBookshelves()
    .then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)))
);

export const fetchBookshelf = id => dispatch => (
    BookshelfApiUtil.fetchBookshelf(id)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const createBookshelf = bookshelf => dispatch => (
    BookshelfApiUtil.createBookshelf(bookshelf)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const updateBookshelf = bookshelf => dispatch => (
    BookshelfApiUtil.updateBookshelf(bookshelf)
    .then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const deleteBookshelf = bookshelfId => dispatch => (
    BookshelfApiUtil.deleteBookshelf(bookshelfId)
    .then(bookshelf => dispatch(removeBookshelf(bookshelfId)))
);