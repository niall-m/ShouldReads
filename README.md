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

![Search Bar](https://github.com/niall-m/ShouldReads/blob/master/app/assets/images/search.png)

## Project Design

ShouldReads was originally designed and built in 2 weeks. A proposal was drafted to help provide an implementation timeline during the development process. Relevant items of the proposal included:

+ [MVP list](https://github.com/niall-m/ShouldReads/wiki/mvp-list)
+ [Wireframes](https://github.com/niall-m/ShouldReads/wiki/wireframes)
+ [Component Hierarchy](https://github.com/niall-m/ShouldReads/wiki/component-hierarchy)
+ [Sample State](https://github.com/niall-m/ShouldReads/wiki/sample-state)
+ [Routes](https://github.com/niall-m/ShouldReads/wiki/routes)
+ [Schema](https://github.com/niall-m/ShouldReads/wiki/schema)

To improve the UI/UX, ShouldReads underwent a significant overhaul to implement search and drag n' drop functionality. This experience yielded the most valuable lessons regarding UI/UX in project planning.

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

## Future Implementations

Possible future features:
- Display a "Read Status" for each book
- Genre tags
- Likes
