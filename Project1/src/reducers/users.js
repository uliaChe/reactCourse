import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../actions/users';

export const data = handleActions(
    {
        [fetchUserSuccess]: (state, action) => action.payload.data
    },
    {}
);

export const error = handleActions(
    {
        [fetchUserRequest]: () => null,
        [fetchUserSuccess]: () => null,
        [fetchUserFailure]: (state, action) => action.payload
    },
    null
);

export const isFetching = handleActions(
    {
        [fetchUserRequest]: () => true,
        [fetchUserSuccess]: () => false,
        [fetchUserFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [fetchUserRequest]: () => false,
        [fetchUserSuccess]: () => true,
        [fetchUserFailure]: () => false
    },
    false
);

export const getUserData = state => state.users.data;
export const getUserError = state => state.users.error;
export const getUserIsFetching = state => state.users.isFetching;
export const getUserIsFetched = state => state.users.isFetched;

export default combineReducers({
    data,
    error,
    isFetching,
    isFetched
})