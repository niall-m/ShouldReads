# ShouldReads

[ShouldReads](https://stark-coast-59940.herokuapp.com), inspired by GoodReads, is a web application for users to create their own online library.

ShouldReads is a personal project by Niall Mahford.

## Features
- User accounts with secure authentication
- Peruse a catalogue index of books
- View individual book details
- Create and manage bookshelves
- Write book reviews

## Project Design

ShouldReads was designed and built in 2 weeks.

A proposal was drafted to help provide an implementation timeline during the development process.
Relevant items of the proposal included:

+ [MVP list](https://github.com/niall-m/ShouldReads/wiki/mvp-list)
+ [Wireframes](/wiki/wireframes)
+ [Component Hierarchy](component-hierarchy)
+ [Sample State](sample-state)
+ [Routes](routes)
+ [Schema](schema)

## Technology

ShouldReads is a single-page application.

The backend was built with Ruby on Rails (RoR).
RoR provides RESTful API routes and JSON data retrieval from the database.

Backend dependencies:
- Heroku: a cloud platform for hosting apps
- PostgreSQL RDBMS: database management
- BCrypt: password-salting and hashing for secure authentication

The frontend was built with React.js, which allows the 'single-page application'.

Frontend dependencies:
- Webpack: bundles all frontend/Redux components
- jQuery: used to make AJAX requests with the RoR server
- Sass: used to style the html elements
- Babel for transpiling JSX into Javascript
- Redux: API utilities, action creators, dispatcher, reducers, and stores
    - React Dom
    - React Router

## Future Implementations

ShouldReads does not yet reach the MVP standard.

The features that will be added include:
- Implement the Shelving joins-table, allowing users to add books to the shelves
- Display a "Read Status" for each book
- Liking Books
- Adding Book Tags for genres
- Search for books or authors
- Index books by author
