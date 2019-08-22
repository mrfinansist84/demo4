import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import './Quiz.scss';

const ViewQuiz = props => {

    const {
        sendTestResultToDB,
        setQuestionsToStore
    } = props;

    
    const [ quizQuestions, setQuizQuestions ] = useState(0);
    const [ questionCounter, setQuestionCounter] = useState(0);

    const [ testDone, setTestDone ] = useState(false);
    const [ myResult, setMyResult ] = useState({
        health: 0,
        finance: 0,
        career: 0,
        leisure: 0,
        relatives: 0
    });

    useEffect(() =>{
        setQuestionsToStore();
    }, []);

    useEffect(() => {
        if (props.questions !== undefined){
            fillInitialState(props);
        }
    });


    const fillInitialState = (props) => {
        let quizQuestions = props.questions;
        setQuizQuestions(quizQuestions);
    }

    const handleAnswerSelected = (event) => {
        setUserAnswer(event.currentTarget.value);
        if (questionCounter < quizQuestions.length-1) {
            setTimeout(() => setNextQuestion(), 300);
        } else {
            setTestDone(true);
        }
    }

    const renderQuiz = (questions) => {
        return (
          <Quiz
              inputType={quizQuestions[questionCounter].inputType}
              typeOfQuestion={quizQuestions[questionCounter].type}
              answer={''}
              answerOptions={quizQuestions[questionCounter].answers}
              questionId={questionCounter+1}
              question={questions[questionCounter].question}
              questionTotal={quizQuestions.length}
              onAnswerSelected={handleAnswerSelected}
            />
        );
    }

    const setUserAnswer = (answer) => {
        const updatedResult = Object.assign({}, myResult);
        const currentTypeOfQuestion = quizQuestions[questionCounter].type;
        
        updatedResult[currentTypeOfQuestion] += Number(answer);
        setMyResult(updatedResult);
    }

    const setNextQuestion = () => {
        setQuestionCounter(questionCounter+1);
    }

    
    const renderResult = () =>{
        const uid = JSON.parse(localStorage.getItem('userId'));
        sendTestResultToDB(myResult, uid);
        return false;
    }
    
    if (quizQuestions !== 0) {
        return (
        <div className="container-main-quiz">
            { testDone
                  ? renderResult()
                  : renderQuiz(quizQuestions)}
          </div>)}
           else  return <div className="container-main-quiz"></div>;
}

export default ViewQuiz;
