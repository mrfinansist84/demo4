import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

function* getFriendsProfile(action) {
    try {
      yield put(push(`/friend/${action.uid}`));
    } catch (e) {
        console.error(e);
    }
}

function* LogoutRedirect() {
    try {
      yield put(push(`/`));
    } catch (e) {
        console.error(e);
    }
}

function* HeaderSagaWatcher() {
    yield takeLatest('REDIRECT_TO_FRIENDS_PROFILE', getFriendsProfile);
    yield takeLatest('Logout', LogoutRedirect);
}

export default HeaderSagaWatcher;