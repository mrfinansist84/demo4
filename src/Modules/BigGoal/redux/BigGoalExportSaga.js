import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { getBigGoalsPersonal } from '../../../DAL/bigGoalFirebase';
import { setBigGoal } from './action';

function* BigGoalExportSaga({ collection }) {
    try {
        yield delay(500);
        const bigGoalPersonal = yield call(() =>
            getBigGoalsPersonal(collection)
        );
        yield put(setBigGoal(bigGoalPersonal, collection));
    } catch (e) {
        console.error(e);
    }
}

function* BigGoalExportSagaWatcher() {
    yield takeLatest('EXPORT_BIG_GOAL', BigGoalExportSaga);
}

export default BigGoalExportSagaWatcher;
