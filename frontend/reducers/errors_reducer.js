import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import ReviewsErrorsReducer from './errors_reducers/reviews_errors_reducer';
import BookErrorsReducer from './errors_reducers/book_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    reviews: ReviewsErrorsReducer,
    book: BookErrorsReducer,
});

export default ErrorsReducer;