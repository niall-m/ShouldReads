import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => {
    return (
        <li className="book-index-item">
            <Link to={`/books/${book.id}`}>
                <img 
                className="book-cover-img-index" 
                src={book.cover_img} 
                alt={book.title} />
            </Link>
        </li>
    );
};