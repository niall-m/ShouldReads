import * as ShelvingApiUtil from '../util/shelving_api_util';
import { fetchBookshelf } from './bookshelf_actions';
import { fetchBook } from './book_actions';

export const createShelving = shelving => dispatch => (
    ShelvingApiUtil.createShelving(shelving)
        .then(shelving => dispatch(fetchBook(shelving.book_id)))
);

export const deleteShelving = shelvingId => dispatch => (
    ShelvingApiUtil.deleteShelving(shelvingId)
        .then()
);