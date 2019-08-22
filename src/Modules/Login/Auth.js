import { connect } from 'react-redux';
import { signUpUser } from './redux/actions';
import Form from '../../Components/Form/Form';

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
    signUpUser: data => {
        dispatch(signUpUser(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
