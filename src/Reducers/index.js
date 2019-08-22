const initialState = {
    data: {},
    week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    year: ['Q1', 'Q2', 'Q3', 'Q4'],
    month: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    modalAddTaskOpen: false,
    modalViewTaskOpen: false,
    time: '',
    currTask: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                data: action.payload
            };

        case 'REQUEST_QUESTIONS':
            return {
                ...state
            };

        case 'RECEIVE_QUESTIONS':
                return {
                    ...state,
                    questions:  action.questions
                };

        case 'GET_ALL_NICKNAMES':
                        return {
                            ...state,
                            allNicknames:  action.nicknames
                        };

        case 'GET_USER_INFO_SUCCESS':
            
                    return {
                        ...state,
                        userImage:  action.userImage,
                        userName: action.userName,
                        userAge: action.userAge,
                        userNickname: action.nickname
                    };
        case 'SEND_FRIENDS_INFO_TO_STORE':
                    return{
                        ...state,
                        friendsName: action.friendsName,
                        friendsImage: action.friendsImage,
                        friendsAge: action.friendsAge,
                        friendsNickname: action.friendsNickname,
                        friendsUid: action.uid
                    };

        case 'LOAD_FRIENDS_INFO_TO_STORE':
                return{
                    ...state,
                    friendsName: action.friendsName,
                    friendsImage: action.friendsImage,
                    friendsAge: action.friendsAge,
                    friendsNickname: action.friendsNickname,
                    friendsWheel: action.wheel
                };
        case 'GET_FRIENDS_INFO':
                return{
                    ...state,
                    friendsUid: action.uid
                };
        

        case 'TestResult':
            return {
                ...state,
                wheels: action.payload
            };
        case 'SET_USER_DATA':
            return {
                ...state,
                [action.dataType]: action.payload
            };

        case 'AddTask':
            return {
                ...state,
                [action.taskType]: state[action.taskType].hasOwnProperty(
                    action.taskType
                )
                    ? {
                          [action.taskType]: [
                              action.payload,
                              ...state[action.taskType].weekTasks
                          ]
                      }
                    : {
                          [action.taskType]: [action.payload]
                      }
            };
        case 'ChangedAllTasks':
            return {
                ...state,
                [action.taskType]: {
                    [action.taskType]: action.payload
                }
            };
        case 'Logout':
            return {
                state: initialState
            };
        case 'OPEN_CLOSE_MODAL':
            return {
                ...state,
                modalAddTaskOpen: action.payload,
                time: action.timedate
            };

        case 'SEND_TEST_RESULT_TO_DB':
            return {
                ...state,
                wheels: action.payload,
                id: action.uid
            };

        
        case 'SEND_TEST_RESULT_TO_DB':
                return {
                    ...state,
                    wheels: action.payload,
                    id: action.uid
                };
        case 'SET_CURRENT_TASK':
            return {
                ...state,
                currTask: action.payload
            };
        case 'OPEN_CLOSE_VIEW_MODAL':
            return {
                ...state,
                modalViewTaskOpen: action.payload
            };
        case 'SET_BIG_GOAL':
            return {
                ...state,
                [action.typeBigGoal]: action.payload
            };
        case 'OPEN_CLOSE_VIEW_MODAL':
            return {
                ...state,
                modalViewTaskOpen: action.payload
            };
        case 'ADD_TASKS_FROM_BIG_GOAL':
            return {
                ...state,
                [action.taskType]: action.payload
            };            
        default:
            return state;
    }
};

export default reducer;
