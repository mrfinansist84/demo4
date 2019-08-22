import { connect } from 'react-redux';
import { getUserDataProfile, setUserData, setProfilePicToDB, sendNewProfileFieldToDB } from './redux/action';
import NewProfile from '../../Components/newProfile/Profile';

const mapStateToProps = state => {
const { reducer } = state;
    return {
        data: reducer.data,
        wheels: reducer.wheels,
        weekTasks: reducer.weekTasks,
        userProgressData: reducer.userProgressData,
        userImage: reducer.userImage,
        userName: reducer.userName,
        userAge: reducer.userAge,
        userNickname: reducer.userNickname,
        allNicknames: reducer.allNicknames
    };
};

const mapDispatchToProps = dispatch => ({
    setData: (result, dataType) => {
        dispatch(setUserData(result, dataType));
    },
    getUserDataProfile: (userId, action) => {
        dispatch(getUserDataProfile(userId, action));
    },
    setProfilePicture: (userId, file) => {
        dispatch(setProfilePicToDB(userId, file));
    },
    saveNewProfileField: (uid, fieldName, fieldValue) => {
        dispatch(sendNewProfileFieldToDB(uid, fieldName, fieldValue));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewProfile);