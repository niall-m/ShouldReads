import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
    return (
        <li>
            <Link to={`/books/${book.id}`}>
                {book.title}
            </Link>
        </li>
    );
};

export default withRouter(BookIndexItem);