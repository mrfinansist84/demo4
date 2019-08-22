import { connect } from 'react-redux';
import { redirectToFriendsProfile } from './redux/actions';
import Header from '../../Components/Header/Header';
import { withRouter } from "react-router";
import { actionLogout } from '../../Actions/index';

const mapStateToProps = state => ({
  allNicknames: state.reducer.allNicknames
});

const mapDispatchToProps = dispatch => ({
    switchToFriendsProfile: (uid) => {
          dispatch(redirectToFriendsProfile(uid));
      },
      signOut: () => {
        dispatch(actionLogout());
      }
  
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps
)(Header));