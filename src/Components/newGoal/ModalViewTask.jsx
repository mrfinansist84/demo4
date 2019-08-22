import React from 'react';
import { deleteTask } from '../../DAL/goalFirebase';

const ModalViewTask = props => {
    const userId = localStorage.getItem('userId');
    const { text, id, weight, category, runtime } = props.currTask;
    const { setData, oldTasks, openCloseViewModal, toggleTaskFinish, delTask } = props;
    const closeAddTaskModal = () => {
        openCloseViewModal();
    };
    const toggleFinishingTask = e => {
        toggleTaskFinish(e.target.dataset.id, oldTasks, userId, setData);
        closeAddTaskModal();
    };
    const dellTask = e => {
        deleteTask(e.target.dataset.id, userId, setData);
        closeAddTaskModal();
    }
    return (
        <div className="modal-Add-Task">
            <div className="modal-content">
                <span className="close" onClick={closeAddTaskModal}>&times;</span>
                <center>
                    <h2>{text}</h2>
                    <p className="ModalViewTask-info">
                        Time:
                    {runtime}
                    </p>
                    <p className="ModalViewTask-info">
                        Weight:
                    {weight}
                    </p>
                    <p className="ModalViewTask-info">
                        Category:
                    {category}
                    </p>
                </center>
                <center>
                    <button className="ModalViewTask-button taskIsDone" data-id={id} onClick={toggleFinishingTask}>Mark as Done</button>
                    <button className="ModalViewTask-button removeTask" data-id={id} onClick={dellTask}>Remove Task</button>
                </center>
            </div>
        </div>
    );
}

export default ModalViewTask;