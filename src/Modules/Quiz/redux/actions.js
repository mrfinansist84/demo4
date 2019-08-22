const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
const SEND_TEST_RESULT_TO_DB = 'SEND_TEST_RESULT_TO_DB';

const requestQuestions = () => ({
    type: REQUEST_QUESTIONS
});

const recieveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions: questions
});

const sendTestResultToDB = (result, uid) => {
    return {
        type: SEND_TEST_RESULT_TO_DB,
        payload: result,
        uid: uid
    };
};




export {sendTestResultToDB, requestQuestions, recieveQuestions, REQUEST_QUESTIONS };