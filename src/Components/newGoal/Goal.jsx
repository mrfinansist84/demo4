import React, { useEffect } from 'react';
import Header from '../../Modules/Header/MainHeader';
import { renderTimeFrames } from './utilities';
import store from '../../store';
import './Goal.scss';
import ModalAddTask from './ModalAddTask';
import ModalViewTask from './ModalViewTask';

const Goal = props => {
    const {
        weekTasks,
        getUserData,
        setData,
        modalAddTaskOpen,
        modalViewTaskOpen,
        openCloseModal,
        time,
        addTask,
        currTask,
        openCloseViewModal,
        toggleTaskFinish,
        delTask,
        bigGoalPersonal
    } = props;

    useEffect(() => {
        const token = localStorage.getItem('userId');
        if (!store.getState().weekTasks && !weekTasks) {
            getUserData(token);
        }
    });
    return (
        <div className="WeeklyGoal">
            <div className='WeeklyGoal-wrapper'>
            <Header />
            <div className="WeeklyGoal-container">
                {modalAddTaskOpen && <ModalAddTask
                    openCloseModal={openCloseModal}
                    day={time}
                    addTask={addTask}
                    bigGoals={bigGoalPersonal}
                    setData={setData}
                />}
                {modalViewTaskOpen && <ModalViewTask
                    openCloseModal={openCloseModal}
                    toggleTaskFinish={toggleTaskFinish}
                    delTask={delTask} 
                    currTask={currTask}
                    openCloseViewModal={openCloseViewModal}
                    oldTasks={weekTasks}
                    setData={setData}
                />}
                {renderTimeFrames(document.URL, props)}
            </div>
            </div>
            </div>
    );
};

export default Goal;