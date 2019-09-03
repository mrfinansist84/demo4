const SIGN_UP_USER = 'SIGN_UP_USER';

const signUpUser = (
    data,
    setErrorLoginFlag,
    setErrorPasswordFlag,
    setErrorRepasswordFlag
) => ({
    type: SIGN_UP_USER,
    data,
    setErrorLoginFlag,
    setErrorPasswordFlag,
    setErrorRepasswordFlag
});


export { signUpUser };
