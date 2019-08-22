const EXPORT_BIG_GOAL = 'EXPORT_BIG_GOAL';
const IMPORT_BIG_GOAL = 'IMPORT_BIG_GOAL';
const SET_BIG_GOAL = 'SET_BIG_GOAL';
const ADD_TASKS_FROM_BIG_GOAL = 'ADD_TASKS_FROM_BIG_GOAL';
const USE_BIG_GOAL = 'USE_BIG_GOAL';
const DELETE_BIG_GOAL = 'DELETE_BIG_GOAL';
const CREATE_BIG_GOAL = 'CREATE_BIG_GOAL';

const deleteBG = goals => {
    return {
        type: DELETE_BIG_GOAL,
        goals
    };
};

const createBG = event => {
    return {
        type: CREATE_BIG_GOAL,
        event
    };
};

const showBigGoalForExport = collection => {
    return {
        type: EXPORT_BIG_GOAL,
        collection
    };
};
const useBigGoal = selectedBG => {
    return {
        type: USE_BIG_GOAL,
        selectedBG
    };
};
const showBigGoalForImport = collection => {
    return {
        type: IMPORT_BIG_GOAL,
        collection
    };
};
const setBigGoal = (data, collection) => {
    return {
        type: SET_BIG_GOAL,
        payload: data,
        typeBigGoal: collection
    };
};

const addTaskBG = (task, type) => ({
    type: ADD_TASKS_FROM_BIG_GOAL,
    taskType: type,
    payload: task
});

export {
    useBigGoal,
    addTaskBG,
    setBigGoal,
    showBigGoalForExport,
    showBigGoalForImport,
    createBG,
    deleteBG
};