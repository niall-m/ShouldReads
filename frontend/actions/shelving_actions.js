import * as ShelvingApiUtil from '../util/shelving_api_util';
import { fetchBook } from './book_actions';
import { fetchBookshelf } from './bookshelf_actions';

export const createShelving = shelving => dispatch => (
    ShelvingApiUtil.createShelving(shelving)
        .then(shelving => dispatch(fetchBook(shelving.book_id)))
);

export const deleteShelving = shelving => dispatch => (
    ShelvingApiUtil.deleteShelving(shelving)
        .then(shelving => dispatch(fetchBook(shelving.book_id)))
);

// export const deleteShelving = shelving => dispatch => (
//     ShelvingApiUtil.deleteShelving(shelving)
//         .then(shelving => dispatch(fetchBookshelf(shelving.shelf_id)))
// );