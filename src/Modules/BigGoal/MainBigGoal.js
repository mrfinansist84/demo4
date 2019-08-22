import { connect } from 'react-redux';
import {
    setBigGoal,
    showBigGoalForExport,
    showBigGoalForImport,
    addTaskBG,
    useBigGoal,
    deleteBG,
    createBG
} from './redux/action';
import BigGoal from '../../Components/BigGoal/BigGoal';

const mapStateToProps = state => {
    const { reducer } = state;
    return {
        bigGoalPersonal: reducer.bigGoalPersonal,
        bigGoalСommunity: reducer.bigGoalСommunity
    };
};

const mapDispatchToProps = dispatch => ({
    showBigGoalForExport: collection => {
        dispatch(showBigGoalForExport(collection));
    },
    showBigGoalForImport: collection => {
        dispatch(showBigGoalForImport(collection));
    },
    setBigGoal: (data, collection) => {
        dispatch(setBigGoal(data, collection));
    },
    addTaskBG: (data, collection) => {
        dispatch(addTaskBG(data, collection));
    },
    useBigGoal: selectedBG => {
        dispatch(useBigGoal(selectedBG));
    },
    createBG: event => {
        dispatch(createBG(event));
    },
    deleteBG: goals => {
        dispatch(deleteBG(goals));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BigGoal);