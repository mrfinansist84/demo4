import { takeLatest, call, put, delay } from 'redux-saga/effects';
import {
    deleteBG,
    getBigGoalsPersonal
} from '../../../DAL/bigGoalFirebase';
import { setBigGoal } from './action';

function* BigGoalDelSaga({ goals }) {
    try {
        yield deleteBG(goals);
        yield delay(1500);

        const newBGPersonalFromServer = yield call(() =>
            getBigGoalsPersonal('bigGoalPersonal')
        );
        yield put(setBigGoal(newBGPersonalFromServer, 'bigGoalPersonal'));
    } catch (e) {
        console.error(e);
    }
}

function* BigGoalDelSagaWatcher() {
    yield takeLatest('DELETE_BIG_GOAL', BigGoalDelSaga);
}

export default BigGoalDelSagaWatcher;
