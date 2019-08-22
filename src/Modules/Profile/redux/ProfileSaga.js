import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { getData, storePhoto, getUserInfo, saveNewProfileFieldValue, getAllUserNicknames } from '../../../DAL/profileFirebase';
import { checkCurrentWeek } from '../../../DAL/serviceProgressAnalysis';
import { getUserInfoSuccess, getAllNicknames, setUserData } from "./action";

function* ProfileSaga(action) {
    try {
         const userWheel = yield call(() => getData('wheels', action.payload));
         yield put(setUserData(userWheel, 'wheels'));

        const userWeekTasks = yield call(() => getData('weekTasks', action.payload));
        yield put(setUserData(userWeekTasks, 'weekTasks'));

        const uid = JSON.parse(localStorage.getItem('userId'));
        const userInfo = yield call (getUserInfo, uid );
        
        yield put(getUserInfoSuccess(userInfo)); 

        const nicknames = yield getAllUserNicknames();
        yield put (getAllNicknames(nicknames));
        
        yield checkCurrentWeek(action.action);
        yield delay(500);
        
    } catch (e) {
        console.error(e);
    }
}

function* LoadPicToDB(action){
    yield storePhoto(action.uid, action.payload);
}

function* SendFieldToDB(action) {
    yield saveNewProfileFieldValue(action.uid, action.fieldName, action.fieldValue);
}


function* ProfileSagaWatcher() {
    yield takeLatest('GET_USER_DATA_PROFILE', ProfileSaga);
    yield takeLatest('SET_PROFILE_PIC', LoadPicToDB);
    yield takeLatest('SEND_NEW_PROFILE_FIELD_TO_DB', SendFieldToDB);
}

export default ProfileSagaWatcher;
