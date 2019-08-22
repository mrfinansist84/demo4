import React, { useState } from 'react';
import { BigGoalList } from './BigGoalList';

export const BigGoalApplying = props => {
    const [selectedBG, setSelectedBG] = useState([]);
    const [selectionFlag, setSelectionFlag] = useState(false);
    const { collection, targetEl, bigGoals, applyBG, textForSection, updateBGCollection } = props;

    const applyBigGoal = () => {
        applyBG(selectedBG);
        setSelectedBG([]);
        setSelectionFlag(true);
        updateBGCollection(collection)
    }

    return (
        <div className="bigGoalApplying-wrap">
            <section className="BigGoalApplying-container">
                <BigGoalList bigGoals={bigGoals}
                    setSelectedBG={setSelectedBG}
                    selectedBG={selectedBG}
                    selectionFlag={selectionFlag}
                    setSelectionFlag={setSelectionFlag}
                />
            </section>
            <ul className="bigGoalCreating-form-mes">
                {textForSection.map((text, i) => <li key={i}>{text}</li>)}
            </ul>
            <button onClick={applyBigGoal}>
                {targetEl}{' '}Big Goal
            </button>
        </div>
    )
}