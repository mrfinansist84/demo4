export const showError = errorList => {
    const componentProps = {};
    errorList.forEach(error => {
        switch (error) {
            case 'noEmail': {
                componentProps.emailError = 'noEmail';
                break;
            }

            case 'wrongPass': {
                componentProps.passError = 'wrongPass';
                break;
            }

            case 'noMatch': {
                componentProps.passNoMatch = 'noMatch';
                break;
            }
            case 'userExists': {
                componentProps.emailError = 'noEmail';
                break;
            }
            default:
                break;
        }
    });
};
