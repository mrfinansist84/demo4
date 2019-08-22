import { takeLatest, call, put, delay } from 'redux-saga/effects';
import {
    createBigGoal,
    getBigGoalsPersonal
} from '../../../DAL/bigGoalFirebase';
import { setBigGoal } from './action';

function* BigGoalCreateSaga({ event }) {
    try {
        yield createBigGoal(event);
        yield delay(500);

        const newBGPersonalFromServer = yield call(() =>
            getBigGoalsPersonal('bigGoalPersonal')
        );
        yield put(setBigGoal(newBGPersonalFromServer, 'bigGoalPersonal'));
    } catch (e) {
        console.error(e);
    }
}

function* BigGoalCreateSagaWatcher() {
    yield takeLatest('CREATE_BIG_GOAL', BigGoalCreateSaga);
}

export default BigGoalCreateSagaWatcher;
