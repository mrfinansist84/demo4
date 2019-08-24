const GET_USER_DATA = 'GET_USER_DATA';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA_BG = 'SET_USER_DATA_BG'
const OPEN_CLOSE_MODAL = 'OPEN_CLOSE_MODAL';
const SET_CURRENT_TASK = 'SET_CURRENT_TASK';
const OPEN_CLOSE_VIEW_MODAL = 'OPEN_CLOSE_VIEW_MODAL';
const TOGGLE_TASK_FINISH = 'TOGGLE_TASK_FINISH';
const DEL_TASK = 'DEL_TASK';
const TOGGLE_TASK_FINISH_SUCCESS = 'TOGGLE_TASK_FINISH_SUCCESS';

const getUserData = () => ({
    type: GET_USER_DATA
});

const toggleTaskFinishedSuccess = () => ({
    type: TOGGLE_TASK_FINISH_SUCCESS
});

const setUserData = (result, dataType) => ({
    type: SET_USER_DATA,
    dataType,
    payload: result
});

const setBG = (result, dataType) => ({
    type: SET_USER_DATA_BG ,
    dataType,
    payload: result.bigGoals
});

const openCloseModal = (flag, timedate) => ({
    type: OPEN_CLOSE_MODAL,
    payload: flag,
    timedate
});
const addTask = (task, type) => ({
    type: 'AddTask',
    taskType: type,
    payload: task
});
const setCurrentTask = currTask => ({
    type: SET_CURRENT_TASK,
    payload: currTask
});
const openCloseViewModal = flag => ({
    type: OPEN_CLOSE_VIEW_MODAL,
    payload: flag
});
const toggleTaskFinish = (taskId, oldTasks, userId, action) => ({
    type: TOGGLE_TASK_FINISH,
    taskId,
    oldTasks,
    userId,
    action
});
const delTask = (taskId, action) => ({
    type: DEL_TASK,
    taskId,
    action
});
export {
    getUserData,
    setUserData,
    openCloseModal,
    addTask,
    setCurrentTask,
    openCloseViewModal,
    toggleTaskFinish,
    delTask,
    setBG,
    toggleTaskFinishedSuccess
};