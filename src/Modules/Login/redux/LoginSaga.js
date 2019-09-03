import { takeLatest } from 'redux-saga/effects';
import { sendUserData, redirectToQuiz } from '../../../DAL/formFirebase';

function* signUpSaga({ data }) {
    try {
        yield sendUserData(data);
        yield redirectToQuiz();
    } catch (e) {
        console.error(e);
    }
}

function* LoginSagaWatcher() {
    yield takeLatest('SIGN_UP_USER', signUpSaga);
}

export default LoginSagaWatcher;