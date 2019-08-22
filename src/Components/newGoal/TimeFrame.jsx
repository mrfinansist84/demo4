import React from 'react';
import Task from './Task';

const TimeFrame = props => {
    const {
        timeFragments,
        tasksList,
        openCloseModal,
        setCurrentTask,
        openCloseViewModal
    } = props;
    const openAddTaskModal = () => {
        openCloseModal(true, timeFragments);
    };

    return (
        <div className="WeeklyGoal-day">
            <span className="WeeklyGoal-day-name">{timeFragments}</span>
          <div className="WeeklyGoal-day-tasks">
              {tasksList.map((task, i) => (
                  <Task
                      task={task}
                        key={i}
                      setCurrentTask={setCurrentTask}
                      openCloseViewModal={openCloseViewModal}
                  />
                ))}
              <div className="add-taskButton-container">
                  <div className="addTaskButton" onClick={openAddTaskModal}>
                        +
                  </div>
              </div>
          </div>
      </div>
    );
};
export default TimeFrame;
