import {fork} from 'redux-saga/effects';
import {fetchUserWatch} from './users';
import {fetchFollowersWatch} from './followers';
import {authFlow, setTokenWatch} from './auth';

export default function*() {
    //yield fork(authFlow);
  yield fork(setTokenWatch);  
  yield fork(fetchUserWatch);
  yield fork(fetchFollowersWatch);
}
