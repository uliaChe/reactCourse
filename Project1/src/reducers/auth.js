import {handleAction} from 'redux-actions';
import {authorize, setToken} from '../actions/auth';

const auth = handleAction([setToken], (state, action) => ({
    token: action.payload
    }),
   {token: null}
);

export default auth;

export const getToken = state => state.auth.token;

