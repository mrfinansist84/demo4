import React from 'react';
import './Quiz.scss';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import RenderRange from './RenderRange';


const getRadio = (props) => {
  let result = props.answerOptions.map((option, key)=>
     (<AnswerOption
        typeOfQuestion={props.typeOfQuestion}
        key={option.text}
        answerContent={option.text}
        answerValue={option.value}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />)
  );
  
    return result;
}

const getRange = (props) => {
  return <RenderRange onAnswerSelected={props.onAnswerSelected} />;
}

const Quiz = (props) =>{
  const answerFormat =
            props.inputType === 'range'
                ? getRange(props)
                : getRadio(props);

        return (
          <div className="cQuizQuestion" key={props.questionId}>
              <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            />
                <h2 className="question">{props.question}</h2>
              <div className="answerOptions">{answerFormat}</div>
            </div>
        );
}

export default Quiz;