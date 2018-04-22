# ShouldReads

[ShouldReads](https://stark-coast-59940.herokuapp.com), a personal project by Niall Mahford, is a web application inspired by GoodReads for users to create their own personal online library.

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
+ [Wireframes](https://github.com/niall-m/ShouldReads/wiki/wireframes)
+ [Component Hierarchy](https://github.com/niall-m/ShouldReads/wiki/component-hierarchy)
+ [Sample State](https://github.com/niall-m/ShouldReads/wiki/sample-state)
+ [Routes](https://github.com/niall-m/ShouldReads/wiki/routes)
+ [Schema](https://github.com/niall-m/ShouldReads/wiki/schema)

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

Possible future features:
- Display a "Read Status" for each book
- Liking Books
- Adding Book Tags for genres
- Search for books or authors
- Drag and drop books to shelvings