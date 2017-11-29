import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default ({ book }) => {
    return (
        <li>
            <Link to={`/books/${book.id}`}>
                {book.title}
            </Link>
        </li>
    );
};