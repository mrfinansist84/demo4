import { connect } from 'react-redux';
import { sendTestResultToDB, requestQuestions} from './redux/actions';
import MainQuiz from '../../Components/Quiz/MainQuiz';
import { withRouter } from "react-router";

const mapStateToProps = state => {
  return {
      questions: state.reducer.questions
  };
};

const mapDispatchToProps = dispatch => ({
      setQuestionsToStore: () => {
        dispatch(requestQuestions());
    },
    sendTestResultToDB: (result, uid) => {
          dispatch(sendTestResultToDB(result, uid));
      },
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainQuiz));