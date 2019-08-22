import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { useBG, getData } from '../../../DAL/bigGoalFirebase';
import { addTaskBG } from './action';

function* BigGoalUseSaga({ selectedBG }) {
    const userId = localStorage.getItem('userId');
    try {
        const oldTasksFromServer = yield call(() =>
            getData('weekTasks', userId)
        );
        yield useBG(selectedBG, oldTasksFromServer);
        yield delay(500);

        const newTasksFromServer = yield call(() =>
            getData('weekTasks', userId)
        );
        console.log(newTasksFromServer)
        yield put(addTaskBG(newTasksFromServer, 'weekTasks'));
    } catch (e) {
        console.error(e);
    }
}

function* BigGoalUseSagaWatcher() {
    yield takeLatest('USE_BIG_GOAL', BigGoalUseSaga);
}

export default BigGoalUseSagaWatcher;
