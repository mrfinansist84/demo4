import { takeLatest, put, delay, call } from 'redux-saga/effects';
import {
    setFlagFinished,
    upgradeWheel,
    getData
} from '../../../DAL/goalFirebase';
import { setUserData } from './action';

function* GoalFinishedTaskSaga({ taskId, oldTasks, userId }) {

    try {
        yield setFlagFinished(taskId, oldTasks, userId);
        yield upgradeWheel(taskId, oldTasks, userId);
        yield delay(500);
        const newWheel = yield call(() => getData('wheels', userId));
        yield put(setUserData(newWheel, 'wheels'));
    } catch (e) {
        console.error(e);
    }
}

function* GoalFinishedTaskSagaWatcher() {
    yield takeLatest('TOGGLE_TASK_FINISH', GoalFinishedTaskSaga);
}

export default GoalFinishedTaskSagaWatcher;
