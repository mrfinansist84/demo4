import React from 'react';

const AnswerOption = (props)  => {
        return (
          <div className="answerOption">
              <input
                  type="radio"
                  className="radioCustomButton"
                    name="radioGroup"
                  checked={props.answerValue === props.answer}
                  value={props.answerValue}
                    id={props.answerValue}
                  disabled={props.answer}
                  onChange={props.onAnswerSelected}
                />
              <label
                  className="radioCustomLabel"
                  htmlFor={props.answerValue}
                >
                  {props.answerContent}
                </label>
            </div>
        );
    }

export default AnswerOption;
