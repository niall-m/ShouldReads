import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import reviewsErrorsReducer from './errors_reducers/reviews_errors_reducer';
import bookErrorsReducer from './errors_reducers/book_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewsErrorsReducer,
    book: bookErrorsReducer,
});

export default errorsReducer;