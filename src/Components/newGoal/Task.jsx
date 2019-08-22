import React from 'react';
import { getCurrentTask } from './utilities';

const Task = props => {
    const {
        task,
        openCloseViewModal,
        setCurrentTask
    } = props;

    const openModalViewTask = (e) => {
        setCurrentTask(task, e.target.dataset.id);
        openCloseViewModal(true);
    };

    return (
      <div className={task.isDone ? 'Task completed' : 'Task'}
        >
          <span className="Task-header">{task.text}</span>
          <div>
              <i className="far fa-clock fa-lg Task-icon" />
              <span className="Task-type">
                  {task.runtime}
                    min
                </span>
            </div>
          <div>
              <i className="fas fa-lg  fa-balance-scale-right Task-icon" />
              <span className="Task-type">{task.weight}</span>
            </div>
          <div>
              <i className="far fa-lg  fa-check-circle Task-icon" />
              <span className="Task-type">{task.category}</span>
            </div>
          <p
                className="Task-details"
                data-id={task.id}
                onClick={openModalViewTask}
            >
                Details
            </p>
        </div>
    );
};

export default Task;
