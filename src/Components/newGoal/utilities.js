import React from 'react';
import TimeFrame from './TimeFrame';

function chooseTypeTask(url) {
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const year = ['Q1', 'Q2', 'Q3', 'Q4'];
    const month = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    let res;
    switch (true) {
        case url.includes('weekly_goal'): {
            res = week;
            break;
        }
        case url.includes('monthly_goal'): {
            res = month;
            break;
        }
        case url.includes('annual_goal'): {
            res = year;
            break;
        }
        default:
            res = [];
    }
    return res;
}

function renderTimeFrames(url, props) {
    let tasksList;
    const timeFragments = chooseTypeTask(url);
    const result = timeFragments.map(name => {
        if (props.weekTasks) {
            if (props.weekTasks.hasOwnProperty('weekTasks')) {
                tasksList = props.weekTasks.weekTasks.filter(
                    el => el.weekDay === name
                );
            } else {
                tasksList = [];
            }
        } else {
            tasksList = [];
        }
        return (
            <TimeFrame
                tasksList={tasksList}
                timeFragments={name}
                key={name}
                openCloseModal={props.openCloseModal}
                setCurrentTask={props.setCurrentTask}
                openCloseViewModal={props.openCloseViewModal}
          />
        );
    });

    return result;
}

function createTask(day, formData, bigGolas) {
    return {
        ...formData,
        id: Date.now(),
        goalId: formData.listBG ? bigGolas.filter(el => el.title === formData.listBG)[0].id: 0,
        weekDay: day,
        isDone: false,
        userId: localStorage.getItem('userId')
    };
}

export { renderTimeFrames, createTask };
