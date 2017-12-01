export const fetchBooks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/books',
    })
);

export const fetchBook = id => (
    $.ajax({
        method: 'GET',
        url: `api/books/${id}`,
    })
);

export const updateBook = book => (
    $.ajax({
        method: 'PATCH',
        url: `api/books/${book.id}`,
        data: { book }
    })
);

// export const searchBookDatabase = (query) => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/book_searches',
//         data: { search: { query } }
//     })
// );