import { takeLatest, put, call } from 'redux-saga/effects';
import { getData } from '../../../DAL/goalFirebase';
import { setUserData, setBG } from './action';

function* GoalGetTasksSaga() {
    const userId = localStorage.getItem('userId')
    try {
        const userWeekTasks = yield call(() => getData('weekTasks', userId));
        yield put(setUserData(userWeekTasks, 'weekTasks'));
        const bigGoalPersonal = yield call(() => getData('bigGoalPersonal', userId));
        yield put(setBG(bigGoalPersonal, 'bigGoalPersonal'));
    } catch (e) {
        console.error(e);
    }
}

function* GoalGetTasksSagaWatcher() {
    yield takeLatest('GET_USER_DATA', GoalGetTasksSaga);
}

export default GoalGetTasksSagaWatcher;
