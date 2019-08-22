import {
    connect
} from 'react-redux';
import {
    getUserData,
    setUserData,
    openCloseModal,
    addTask,
    setCurrentTask,
    openCloseViewModal,
    toggleTaskFinish,
    delTask
} from './redux/action';
import Goal from '../../Components/NewGoal/Goal';

const mapStateToProps = state => {
    const { reducer } = state;
    return {
        weekTasks: reducer.weekTasks,
        modalAddTaskOpen: reducer.modalAddTaskOpen,
        modalViewTaskOpen: reducer.modalViewTaskOpen,
        time: reducer.time,
        currTask: reducer.currTask,
        bigGoalPersonal: reducer.bigGoalPersonal
    };
};

const mapDispatchToProps = dispatch => ({
    setData: (result, dataType) => {
        dispatch(setUserData(result, dataType));
    },
    getUserData: () => {
        dispatch(getUserData());
    },
    openCloseModal: (flag, timedate) => {
        dispatch(openCloseModal(flag, timedate));
    },
    addTask: (result, dataType) => {
        dispatch(addTask(result, dataType));
    },
    setCurrentTask: currTask => {
        dispatch(setCurrentTask(currTask));
    },
    openCloseViewModal: flag => {
        dispatch(openCloseViewModal(flag));
    },
    toggleTaskFinish: (taskId, oldTasks, userId, action) => {
        dispatch(toggleTaskFinish(taskId, oldTasks, userId, action));
    },
    delTask: (taskId, action) => {
        dispatch(delTask(taskId, action));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Goal);