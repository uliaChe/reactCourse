import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../../actions/users';
import {
    isFetching,
    data,
    error
} from '../users';

describe('users reducers', () => {
    it('should set isFetching: true when FETCH_USER_REQUEST action called', () => {
        const next = isFetching(false, fetchUserRequest());

        expect(true).toBe(next);
    });

    it('should clear data field when FETCH_USER_REQUEST action called', () => {
        const next = data({}, fetchUserRequest());

        expect({}).toEqual(next);
    });

    it('should set data field when FETCH_USER_SUCCESS action called', () => {
        const res = {login: 'test', id: '123'}
        const next = data({}, fetchUserSuccess({data: res}));

        expect({login: 'test', id: '123'}).toEqual(next);
    });

    it('should clear error field when FETCH_USER_REQUEST action called', () => {
        const next = error(null, fetchUserRequest());

        expect(null).toEqual(next);
    });

    it('should clear error field when FETCH_USER_SUCCESS action called', () => {
        const next = error(null, fetchUserSuccess({data: {res: 'test'}}));

        expect(null).toEqual(next);
    });

    it('should set error field when FETCH_USER_FAILURE action called', () => {
        const resError = {error: 'response error'};
        const next = error(null, fetchUserFailure(resError));

        expect({error: 'response error'}).toEqual(next);
    });
});