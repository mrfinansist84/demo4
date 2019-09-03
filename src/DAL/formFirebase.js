import firebase from 'firebase';
import { db } from '../config';

function checkUserData(data, setErrorLoginFlag, setErrorPasswordFlag) {
    let wrongLogin = true;
    let wrongPassword = true;

    db.collection('users')
        .doc('usersData')
        .get()
        .then(doc => {
            doc.data().users.forEach(ud => {
                const user = ud.hasOwnProperty('data') ? ud.data : ud;
                if (user.login === data.login) {
                    wrongLogin = false;
                    if (user.password === data.password) {
                        wrongPassword = false;
                        if (!wrongLogin && !wrongPassword) {
                            localStorage.setItem('userId', user.id);
                            document.location.href = '/myProfile';
                        }
                    }
                }
            });
            if (wrongLogin) {
                setErrorLoginFlag(true);
            }
            if (wrongPassword) {
                setErrorPasswordFlag(true);
            }
        });
}

function updateUserData(data) {
    const usersData = db.collection('users').doc('usersData');
    usersData.update({
        users: firebase.firestore.FieldValue.arrayUnion({
            ...data
        })
    });
}

function updateUserList(email) {
    const usersData = db.collection('users').doc('usersList');
    usersData.update({
        usersList: firebase.firestore.FieldValue.arrayUnion(email)
    });
}
function checkForm(
    data,
    setErrorLoginFlag,
    setErrorPasswordFlag,
    setErrorRepasswordFlag
) {
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    let res = true;

    if (!regEmail.test(data.login)) {
        setErrorLoginFlag(true);
        res = false;
    }
    if (!regPassword.test(data.password)) {
        setErrorPasswordFlag(true);
        res = false;
    }
    if (data.hasOwnProperty('repassword')) {
        if (data.password !== data.repassword) {
            setErrorRepasswordFlag(true);
            res = false;
        }
    }
    return res;
}
function createEmptyCollection(el, userId) {
    db.collection(`${el}`)
        .doc(`${userId}`)
        .set({});
}
function sendUserData(data) {
    localStorage.setItem('userId', data.id);
    localStorage.setItem('testDone', false);
    updateUserData(data);
    updateUserList(data.login);
    createEmptyCollection('weekTasks', data.id);
    createEmptyCollection('bigGoalPersonal', data.id);
}

function redirectToQuiz() {
    document.location.href = '/quiz';
}

export { checkUserData, sendUserData, redirectToQuiz, checkForm };
