import {combineReducers} from 'redux';
import {searchRequest, searchSuccess, searchFailure} from '../actions';
import {handleActions} from 'redux-actions';

const isFetching = handleActions(
    {
        [searchRequest]: () => true,
        [searchSuccess]: () => false,
        [searchFailure]: () => false
    },
    false
);

const result = handleActions(
    {
        [searchSuccess]: (state, action) => state.concat(action.payload)
    },
    []
);

const error = handleActions(
    {
        [searchRequest]: () => null,
        [searchSuccess]: () => null,
        [searchFailure]: (state, action) => action.payload
    },
    null
);
export const getIsFetching = state => state.search.isFetching;
export const getSearchResult = state => state.search.result;
export const getError = state => state.search.error;

export default combineReducers({
    isFetching,
    result,
    error
});