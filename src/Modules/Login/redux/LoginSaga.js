import { takeLatest } from 'redux-saga/effects';
import { getUserData } from '../../../DAL/formfirebase';

function* LoginSaga(action) {
    try {
        const res = yield getUserData();
    } catch (e) {
        console.error(e);
    }
}

function* LoginSagaWatcher() {
    yield takeLatest('SIGN_UP_USER', LoginSaga);
    yield takeLatest('SIGN_UP_USER', LoginSaga);
    yield takeLatest('SIGN_UP_USER', LoginSaga);
}

export default LoginSagaWatcher;