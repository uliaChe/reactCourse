import {
    fetchFollowersRequest,
    fetchFollowersSuccess,
    fetchFollowersFailure
} from '../../actions/users';
import {
    isFetching,
    error,
    ids
} from '../followers';

describe('followers reducers', () => {
    it('should set isFetching: true when FETCH_FOLLOWERS_REQUEST action called', () => {
        const next = isFetching(false, fetchFollowersRequest());

        expect(true).toBe(next);
    });

    it('should set ids to null when FETCH_FOLLOWERS_REQUEST action called', () => {
        const next = ids(null, fetchFollowersRequest());

        expect(next).toEqual(null);
    });

    it('should set ids with data when FETCH_FOLLOWERS_SUCCESS action called', () => {
        const res = [{login: 'test', id: '123'}, {login: 'test2', id: '1234'}];
        const next = ids([], fetchFollowersSuccess(res));

        expect([{login: 'test', id: '123'}, {login: 'test2', id: '1234'}]).toEqual(next);
    });

    it('should set error to null when FETCH_FOLLOWERS_REQUEST action called', () => {
        const next = error(null, fetchFollowersRequest());

        expect(next).toEqual(null);
    });

    it('should set error with when FETCH_USER_FAILURE action called', () => {
        const next = error(null, fetchFollowersFailure({error: 'error text'}));

        expect(next).toEqual({error: 'error text'});
    });
});