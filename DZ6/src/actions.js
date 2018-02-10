import {createActions} from 'redux-actions';

const {
    searchRequest, searchSuccess, searchFailure,
    showRequest, showSuccess, showFailure} = createActions({
    SEARCH_REQUEST: undefined,
    SEARCH_SUCCESS: undefined,
    SEARCH_FAILURE: undefined,
    SHOW_REQUEST: undefined,
    SHOW_SUCCESS: undefined,
    SHOW_FAILURE: undefined
});

export {searchRequest, searchSuccess, searchFailure, showRequest, showSuccess, showFailure};