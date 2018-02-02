import React from 'react';
// import { Route } from 'react-router-dom';
import BookshelvesIndexItem from './bookshelves_index_item';
import BookshelfShowContainer from './bookshelf_show_container';
import BookshelvesIndexContainer from './bookshelves_index_container';

class BookshelfShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBookshelf(this.state)
            .then(this.setState( { shelf_name: '' } ));
    }

    render() {
        const { bookshelves, deleteBookshelf } = this.props;
        return (
            <div className="bookshelf-show-background">
                <div className="bookshelves-show">
                    <BookshelvesIndexContainer />
                </div>
            </div>
        );
    }
}

export default BookshelfShow;