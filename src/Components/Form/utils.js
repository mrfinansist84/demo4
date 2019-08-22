function timeToDays(time) {
    return time / 1000 / 60 / 60 / 24;
}

function getWeekNumber() {
    let weekNumber;
    let yearStart;
    const ts = new Date();
    yearStart = new Date(ts.getFullYear(), 0, 1);
    weekNumber = Math.ceil((timeToDays(ts - yearStart) + 1) / 7);
    return weekNumber;
}

function checkForm(data) {
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    let res = true;
    const errorList = [];

    if (!regEmail.test(data.login)) {
        errorList.push('noEmail');
        res = false;
    }
    if (!regPassword.test(data.password)) {
        errorList.push('wrongPass');
        res = false;
    }
    if (data.hasOwnProperty('passRepeat')) {
        if (data.password !== data.passRepeat) {
            errorList.push('noMatch');
            res = false;
        }
    }

    return res;
}

export { timeToDays, getWeekNumber, checkForm };
