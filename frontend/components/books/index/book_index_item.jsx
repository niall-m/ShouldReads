import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => {
    return (
        <li>
            <Link to={`/books/${book.id}`}>
                <img src={book.cover_img} alt={book.title} />
            </Link>
        </li>
    );
};