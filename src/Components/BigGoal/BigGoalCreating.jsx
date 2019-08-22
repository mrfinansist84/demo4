import React, { useState } from 'react';

export const BigGoalCreating = props => {
    const [addMessege, setAddMessege] = useState(false);
    const creatingBigGoal = e => {
        props.applyBG(e);
        setAddMessege(true);
        props.updateBGCollection(props.collection)

    }
    const delMessege = () => {
        setAddMessege(false);
    }
    return (
        <div className="bigGoalCreating">
            <form className="bigGoalCreating-form" onSubmit={creatingBigGoal}>
                <input type="text"
                    placeholder="Add new Big Goal ..."
                    className="bigGoalCreating-form-input" />
                <input type="text"
                    placeholder="Add description of Big Goal ..."
                    className="bigGoalCreating-form-input" />
                <ul className="bigGoalCreating-form-mes">
                    {props.textForCreate.map((text,i) => <li key={i}>{text}</li>)}
                </ul>
                <button type="submit" className="bigGoalCreating-form-btn">Add Big Goal</button>
                {addMessege && <p className="bigGoalCreating-form-mes-sucsses">
                    You have successfully created a BIG GOAL template.
                Go to the Goal`s section of filling this template with tasks
                <i onClick={delMessege} className="bigGoalCreating-form-mes-close">X</i>
                </p>}
            </form>
        </div>
    );
};
