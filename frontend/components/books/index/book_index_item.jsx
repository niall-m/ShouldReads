import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../../util/dnd';
import { DragSource } from 'react-dnd';

const bookSource = {
    beginDrag(props) {
        return {
            bookId: props.book.id
        };
    }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
});

class BookIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { book, connectDragSource, isDragging } = this.props;

        return connectDragSource(
            <li>
                <Link to={`/books/${book.id}`}>
                    <img src={book.cover_img} alt={book.title} />
                </Link>
            </li>
        );
    }
}

BookIndexItem.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.BOOK, bookSource, collect)(BookIndexItem);
