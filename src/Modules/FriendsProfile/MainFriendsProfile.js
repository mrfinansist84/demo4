import { connect } from 'react-redux';
import { getFriendsInfo } from './redux/actions';
import FriendsProfile from '../../Components/newProfile/FriendsProfile';
import { withRouter } from "react-router";

const mapStateToProps = state => {
  return{
  pathname: state.router.location.pathname,
  friendsImage: state.reducer.friendsImage,
  friendsName: state.reducer.friendsName,
  friendsAge: state.reducer.friendsAge,
  friendsNickname: state.reducer.friendsNickname,
  friendsWheel: state.reducer.friendsWheel,
  allNicknames: state.reducer.allNicknames
}};

const mapDispatchToProps = dispatch => ({
    loadFriendsInfo: (uid) => {
          dispatch(getFriendsInfo(uid));
      }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsProfile));