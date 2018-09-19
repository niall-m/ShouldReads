# ShouldReads

[ShouldReads](https://stark-coast-59940.herokuapp.com), a personal project by Niall Mahford, is a web application inspired by GoodReads for users to create their own personal online library.

![Login Page](https://github.com/niall-m/ShouldReads/blob/master/app/assets/images/login_page.png)

## Features
- User accounts with secure authentication
- Navigate a catalogue of books with ease
- Create and manage bookshelves
- Write book reviews with 1-5 star ratings
- Drag n' Drop books from catalogue to shelf
- Search functionality

## Technology

ShouldReads is a single-page application. The backend was built with Ruby on Rails (RoR), which was used to create RESTful API routes and JSON data retrieval from the PostgreSQL database.

Backend dependencies:
- Heroku: a cloud platform for hosting apps
- PostgreSQL RDBMS: database management
- BCrypt: password-salting and hashing for secure authentication
- RSpec: testing suite for backend validation
- JBuilder: relay fetched data from backend to frontend

The frontend was built with React.js, which facilitates the 'single-page application'.

Frontend dependencies:
- Webpack: bundles all frontend/Redux components
- jQuery: used to make AJAX requests with the RoR server
- Sass: used to style the HTML5 elements with CSS3
- Babel: for transpiling JSX into Javascript
- Redux: API utilities, action creators, dispatcher, reducers, and store
    - React Dom
    - React Router
- React DnD: external library for drag n' drop, developed by Abramov, creator of Redux
- FontAwesome: external library for FontAwesome icons

## Project Design

ShouldReads was originally designed and built in 2 weeks. A proposal was drafted to help provide an implementation timeline during the development process. Relevant items of the proposal included:

+ [MVP list](https://github.com/niall-m/ShouldReads/wiki/mvp-list)
+ [Wireframes](https://github.com/niall-m/ShouldReads/wiki/wireframes)
+ [Component Hierarchy](https://github.com/niall-m/ShouldReads/wiki/component-hierarchy)
+ [Sample State](https://github.com/niall-m/ShouldReads/wiki/sample-state)
+ [Routes](https://github.com/niall-m/ShouldReads/wiki/routes)
+ [Schema](https://github.com/niall-m/ShouldReads/wiki/schema)

To improve the UI/UX, ShouldReads underwent a significant overhaul to implement search and drag n' drop functionality. This experience yielded the most valuable lessons regarding UI/UX in project planning.

## Drag n' Drop with ReactDnD

- Drag n' Drop is an essential aspect of any modern UI/UX. It's difficult to implement and the beauty in its simplicity is often taken for granted. 
The ReactDnD library accomplishes this by defining draggable objects and droppable targets.
- When a draggable item is clicked and dragged, a snapshot of the component is taken and can then be moved throughout the UI. It is monitored by the DOM. The original component and its data persists in the DOM.

```js
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
```

- When hovering over a droppable target (e.g. a bookshelf index item), that components's state is toggled. The corresponding logic decides whether to display an icon that will show the user over which target they are currently hovering.

```js
    componentWillReceiveProps(nextProps) {
        if (!this.props.isOver && nextProps.isOver) {
            this.setState({ hover: true });
        }
        if (this.props.isOver && !nextProps.isOver) {
            this.setState({ hover: false });
        }
    }
```

- When the drop action is initiated by the user, an AJAX call is sent to the backend to attempt to create a new shelving with the props from the snapshotted component. If successful, the frontend reducer triggers a rerender of the relevent components.

```js
const bookshelfTarget = {
    drop(props, monitor, component) {
        const shelf_id = props.bookshelf.id;
        const book_id = monitor.getItem().bookId;
        const shelving = { book_id, shelf_id };
        props.createDropShelving(shelving).then(
            props.fetchBookshelves()
        );
        return {};
    }
};
```

![Search Bar](https://github.com/niall-m/ShouldReads/blob/master/app/assets/images/dnd.png)

## Book Search

![Search Bar](https://github.com/niall-m/ShouldReads/blob/master/app/assets/images/search.png)

The BookSearch component sets the user input as the state, which is sent out as a query to search the database. The input is dynamically searched and rendered.

```js
class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: ''};
        this.handleInput = this.handleInput.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        const val = e.target.value;
        this.setState({ searchValue: val }, () => {
            this.props.searchDatabase(this.state.searchValue);
        });
    }

    // code for rendering results

    render() {
        return (
            <div className="book-search">
                <FontAwesomeIcon icon="book" />
                <input 
                    type="text" 
                    onChange={this.handleInput}
                    placeholder="search for a book"
                    value={this.state.searchValue} 
                />
                <div>
                    {this.renderResults()}
                </div>
            </div>
        );
    }
}
```

This asynchronous AJAX request is used to send the query to be processed by the backend.

```js
export const searchDatabase = (query) => dispatch => (
    BookApiUtil.searchBookDatabase(query).then(
        results => dispatch(receiveSearchResults(results))
    )
);
```

## Future Implementations

Possible future features:
- Display a "Read Status" for each book
- Genre tags
- Likes
