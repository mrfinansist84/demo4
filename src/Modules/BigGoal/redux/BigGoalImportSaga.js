import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { getBigGoalsCommunity } from '../../../DAL/bigGoalFirebase';
import { setBigGoal } from './action';

function* BigGoalImportSaga({ collection }) {
    try {
        yield delay(500);
        const bigGoalCommunity = yield call(() =>
            getBigGoalsCommunity(collection)
        );

        yield put(setBigGoal(bigGoalCommunity, collection));
    } catch (e) {
        console.error(e);
    }
}

function* BigGoalImportSagaWatcher() {
    yield takeLatest('IMPORT_BIG_GOAL', BigGoalImportSaga);
}

export default BigGoalImportSagaWatcher;
