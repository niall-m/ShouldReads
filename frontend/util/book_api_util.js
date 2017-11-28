export const fetchBooks = () => (
    $.ajax({
        url: 'api/books',
        method: 'GET',
    })
);

export const fetchBook = id => (
    $.ajax({
        url: `api/books/${id}`,
        method: 'GET',
    })
);

export const updateBook = book => (
    $.ajax({
        url: `api/books/${book.id}`,
        method: 'PATCH',
        data: { book }
    })
);