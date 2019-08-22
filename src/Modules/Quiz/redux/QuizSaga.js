import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {  getQuestionsFromDB, setDataWheel, setTestDone } from '../../../DAL/quizFirebase';
import { REQUEST_QUESTIONS, recieveQuestions } from "./actions";

function* GetQuestions() {
    try {
        const questions = yield call (getQuestionsFromDB);
        yield put (recieveQuestions(questions));
    } catch (e) {
        console.error(e);
    }
}

function* SendTestResultToDB(action) {
    yield call (setDataWheel, action.payload, action.uid);
    yield put(push('/myProfile'));  
    let uid = localStorage.getItem('userId');
    yield call (setTestDone, uid);
}


function* QuizSagaWatcher() {
    yield takeLatest(REQUEST_QUESTIONS, GetQuestions);
    yield takeLatest('SEND_TEST_RESULT_TO_DB', SendTestResultToDB);
    
}

export default QuizSagaWatcher;