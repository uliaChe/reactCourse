import {combineReducers} from 'redux';
import {showRequest, showSuccess, showFailure} from '../actions';
import {handleActions} from 'redux-actions';

const isFetching = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false,
        [showFailure]: () => false
    },
    false
);

const entities = handleActions(
    {
        [showSuccess]: (state, action) => state.concat(action.payload)
    },
    []
);

export const getIsFetching = state => state.shows.isFetching;
export const getEntities = state => state.shows.entities;

export default combineReducers({
    isFetching,
    entities
});