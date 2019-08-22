import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { deleteTask, getData } from '../../../DAL/goalFirebase';
import { setUserData } from './action';

function* GoalDelTaskSaga({ taskId, userId }) {
    try {
        yield deleteTask(taskId, userId);
        yield delay(500);
        const newTasks = yield call(() => getData('weekTasks', userId));
        yield put(setUserData(newTasks, 'weekTasks'));
    } catch (e) {
        console.error(e);
    }
}

function* GoalDelTaskSagaSagaWatcher() {
    yield takeLatest('DEL_TASK', GoalDelTaskSaga);
}

export default GoalDelTaskSagaSagaWatcher;
