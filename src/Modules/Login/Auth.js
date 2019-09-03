import { connect } from 'react-redux';
import { signUpUser } from './redux/actions';
import Form from '../../Components/Form/Form';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => ({
    signUpUser: (
        data,
        setErrorLoginFlag,
        setErrorPasswordFlag,
        setErrorRepasswordFlag
    ) => {
        dispatch(
            signUpUser(
                data,
                setErrorLoginFlag,
                setErrorPasswordFlag,
                setErrorRepasswordFlag
            )
        );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
