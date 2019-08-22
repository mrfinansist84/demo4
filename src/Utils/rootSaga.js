import { all } from 'redux-saga/effects';
import LoginSaga from '../Modules/Login/redux/LoginSaga';
import QuizSaga from '../Modules/Quiz/redux/QuizSaga';
import ProfileSagaWatcher from '../Modules/Profile/redux/ProfileSaga';
import GoalGetTasksSagaWatcher from '../Modules/Goal/redux/GoalGetTasksSaga';
import GoalFinishedTaskSagaWatcher from '../Modules/Goal/redux/GoalToggleFinish';
import GoalDelTaskSagaSagaWatcher from '../Modules/Goal/redux/GoalDelTaskSaga';
import BigGoalExportSagaWatcher from '../Modules/BigGoal/redux/BigGoalExportSaga';
import BigGoalImportSagaWatcher from '../Modules/BigGoal/redux/BigGoalImportSaga';
import BigGoalUseSagaWatcher from '../Modules/BigGoal/redux/BigGoalUseSaga';
import BigGoalCreateSagaWatcher from '../Modules/BigGoal/redux/BigGoalCreateSaga';
import BigGoalDelSagaWatcher from '../Modules/BigGoal/redux/BigGoalDelSaga';
import GoalUpdateWheelSagaWatcher from '../Modules/Goal/redux/GoalUpdateWheel';
import HeaderSagaWatcher from '../Modules/Header/HeaderSaga';
import FriendsProfileSagaWatcher from '../Modules/FriendsProfile/FriendsProfileSaga';

export default function* rootSaga() {
    yield all([
        LoginSaga(),
        QuizSaga(),
        ProfileSagaWatcher(),
        HeaderSagaWatcher(),
        GoalGetTasksSagaWatcher(),
        GoalFinishedTaskSagaWatcher(),
        GoalDelTaskSagaSagaWatcher(),
        BigGoalExportSagaWatcher(),
        BigGoalImportSagaWatcher(),
        BigGoalUseSagaWatcher(),
        BigGoalCreateSagaWatcher(),
        BigGoalDelSagaWatcher(),
        GoalUpdateWheelSagaWatcher(),
        FriendsProfileSagaWatcher()
    ]);
}