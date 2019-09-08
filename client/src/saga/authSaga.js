import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE, signupSucess, signupFailure } from '../actions/authAction';
import axios from 'axios';

export function* signupUser(action) {
    const response = yield axios.post('./localhost:4000');
    try {
        yield put(signupSucess(response));
    } catch (error) {
        yield put(signupFailure(error))
    }
}
export function* authWatcher() {
    yield [
        takeLatest(SIGN_UP_SUCCESS, signupUser),
        takeLatest(SIGN_UP_FAILURE, signupFailure)
    ];
}