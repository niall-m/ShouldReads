export const fetchBookshelves = () => (
    $.ajax({
        url: 'api/bookshelves',
        method: 'GET',
    })
);

export const fetchBookshelf = id => (
    $.ajax({
        url: `api/bookshelves/${id}`,
        method: 'GET',
    })
);

export const createBookshelf = bookshelf => (
    $.ajax({
        url: 'api/bookshelves',
        method: 'POST',
        data: { bookshelf }
    })
);

export const updateBookshelf = bookshelf => (
    $.ajax({
        url: `api/bookshelves/${bookshelf.id}`,
        method: 'PATCH',
        data: { bookshelf }
    })
);

export const deleteBookshelf = id => (
    $.ajax({
        url: `api/bookshelves/${id}`,
        method: 'DELETE',
    })
);