import { takeLatest, call, put } from 'redux-saga/effects';
import { getData } from '../../../DAL/goalFirebase';
import { setUserData } from './action';

function* GoalUpdateWheelSaga() {
    const userId = localStorage.getItem('userId');
    try {
        const newWheel = yield call(() => getData('wheels', userId));
        yield put(setUserData(newWheel, 'wheels'));
    } catch (e) {
        console.error(e);
    }
}

function* GoalUpdateWheelSagaWatcher() {
    yield takeLatest('TOGGLE_TASK_FINISH_SUCCESS', GoalUpdateWheelSaga);
}

export default GoalUpdateWheelSagaWatcher;
