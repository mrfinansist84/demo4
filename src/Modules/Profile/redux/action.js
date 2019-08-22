const GET_USER_DATA_PROFILE = 'GET_USER_DATA_PROFILE';
const SET_USER_DATA = 'SET_USER_DATA';

const getUserDataProfile = (userId, action) => ({
    type: GET_USER_DATA_PROFILE,
    payload: userId,
    action
});

const setUserData = (result, dataType) => ({
    type: SET_USER_DATA,
    dataType,
    payload: result
});

const setProfilePicToDB = (uid, file) => ({
    type: 'SET_PROFILE_PIC',
    uid: uid,
    payload: file
});

const getUserInfoSuccess = (userInfo) => ({
    type: 'GET_USER_INFO_SUCCESS', 
    userImage: userInfo.userImage,
    userName: userInfo.userName,
    userAge: userInfo.userAge,
    nickname: userInfo.userNickname,

});

const sendNewProfileFieldToDB = (uid, fieldName, fieldValue) => ({
    type: 'SEND_NEW_PROFILE_FIELD_TO_DB', 
    uid: uid,
    fieldName: fieldName,
    fieldValue: fieldValue
});

const getAllNicknames = (nicknames) => ({
    type: 'GET_ALL_NICKNAMES', 
    nicknames: nicknames
});



export {
    getUserDataProfile,
    setUserData,
    setProfilePicToDB,
    getUserInfoSuccess,
    sendNewProfileFieldToDB,
    getAllNicknames
};