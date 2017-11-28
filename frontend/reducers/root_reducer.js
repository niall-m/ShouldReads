import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import BooksReducer from './books_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  books: BooksReducer,
});

export default rootReducer;