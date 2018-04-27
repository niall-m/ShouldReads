import * as BookshelfApiUtil from '../util/bookshelf_api_util';

export const RECEIVE_ALL_BOOKSHELVES = 'RECEIVE_ALL_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';
export const LOAD_BOOKSHELF = 'LOAD_BOOKSHELF';
export const LOAD_BOOKSHELVES = 'LOAD_BOOKSHELVES';

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

export const loadBookshelf = () => ({
    type: LOAD_BOOKSHELF
});

export const loadBookshelves = () => ({
    type: LOAD_BOOKSHELVES
});

export const fetchBookshelves = () => dispatch => {
    dispatch(loadBookshelves());
    return BookshelfApiUtil.fetchBookshelves().then(
        bookshelves => dispatch(receiveAllBookshelves(bookshelves))
    );
};

export const fetchBookshelf = id => dispatch => {
    dispatch(loadBookshelf());
    return BookshelfApiUtil.fetchBookshelf(id).then(
        bookshelf => dispatch(receiveBookshelf(bookshelf))
    );
};

export const createBookshelf = bookshelf => dispatch => (
    BookshelfApiUtil.createBookshelf(bookshelf).then(
        shelf => dispatch(receiveBookshelf(shelf))
    )
);

export const updateBookshelf = bookshelf => dispatch => (
    BookshelfApiUtil.updateBookshelf(bookshelf).then(
        shelf => dispatch(receiveBookshelf(shelf))
    )
);

export const deleteBookshelf = bookshelfId => dispatch => (
    BookshelfApiUtil.deleteBookshelf(bookshelfId).then(
        bookshelf => dispatch(removeBookshelf(bookshelfId))
    )
);