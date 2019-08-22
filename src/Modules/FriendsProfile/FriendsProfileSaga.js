import {  put, takeLatest } from 'redux-saga/effects';
import { getUserInfo, getUserWheel } from '../../DAL/profileFirebase';
import { loadFriendsInfoToStore } from "./redux/actions";

function* LoadInfoToFriendsProfile(action) {
    try {
      const friendsUid = action.friendUID;
      const friendsInfo = yield getUserInfo(friendsUid);
      friendsInfo.wheel = yield getUserWheel(friendsUid);
      yield put(loadFriendsInfoToStore(friendsInfo));
    } catch (e) {
        console.error(e);
    }
}

function* FriendsProfileSagaWatcher() {
     yield takeLatest('GET_FRIENDS_INFO', LoadInfoToFriendsProfile);
}

export default FriendsProfileSagaWatcher;