import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
} from '../actions/users';

export const isFetching = handleActions(
    {
        [fetchFollowersRequest]: () => true,
        [fetchFollowersSuccess]: () => false,
        [fetchFollowersFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [fetchFollowersRequest]: () => false,
        [fetchFollowersSuccess]: () => true,
        [fetchFollowersFailure]: () => false
    },
    false
);

export const error = handleActions(
    {
        [fetchFollowersFailure]: (state, action) => action.payload
    },
    null
);

export const ids = handleActions(
    {
        [fetchFollowersRequest]: () => null,
        [fetchFollowersSuccess]: (state, action) => action.payload,
        [fetchFollowersFailure]: () => null
    },
    []
);

export default combineReducers({
    isFetching,
    isFetched,
    error,
    ids
});  

export const getFollowersData = state => state.followers.ids;
export const getFollowersError = state => state.followers.error;
export const getFollowersIsFetching = state => state.followers.isFetching;
export const getFollowersIsFetched = state => state.followers.isFetched;