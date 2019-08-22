import React, { useState, useEffect } from 'react';
import { ItemDescription } from './ItemDescription';
import { countTotalRuntime } from './utils';

export const BigGoalItem = props => {
    const [check, setCheck] = useState(false);
    const { goal, selectionFlag, selectedBG, setSelectedBG, setSelectionFlag } = props;
    const checkedGoal = () => {
        const flag = check ? false : true;
        setCheck(flag);
        if (flag) {
            setSelectedBG([...selectedBG, goal])
        } else {
            setSelectedBG(selectedBG.filter((el) => {
                return el.id != goal.id;
            }))
        }
    }
    useEffect(() => {
        if (selectionFlag) {
            setCheck(false);
            setSelectionFlag(false);
        }
    });
    let checkedClass = check ? "BigGoalApplying-item-checked" : "";
   
    return (
        <div className="BigGoalApplying-item">
            <div className={checkedClass} onDoubleClick={checkedGoal}>
            <p className="BigGoalApplying-item-title">{goal.title}</p>
            <div>
                <i className="far fa-lg  fa-check-circle Task-icon"></i>
                <span className="Task-type">tasks inside {goal.tasks.length} pc</span>
            </div>
            <div>
                <i className="far fa-clock fa-lg Task-icon"></i>
                <span className="Task-type">time to reach {countTotalRuntime(goal)} min</span>
            </div>
            </div>
            <ItemDescription text={goal.description} />
        </div>
    )
}