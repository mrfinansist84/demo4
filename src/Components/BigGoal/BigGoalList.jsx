import React, { Fragment } from 'react';
import { BigGoalItem } from './BigGoalItem';

export const BigGoalList = props => {
    console.log(props.bigGoals, 'BigGoalList')
    return (
        <Fragment>
            {props.bigGoals &&
                props.bigGoals.map((goal, i) => {
                    return (
                   <BigGoalItem 
                   setSelectedBG={props.setSelectedBG}
                   selectedBG={props.selectedBG}
                   selectionFlag={props.selectionFlag}
                   setSelectionFlag={props.setSelectionFlag}
                    goal={goal} key={i}/>
                    )
                })
            }
        </Fragment>
    )
}