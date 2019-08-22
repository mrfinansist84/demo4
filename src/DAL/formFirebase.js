import firebase from 'firebase';
import { db } from '../config';

function getSignInToken(data) {
    db.collection('users')
        .doc('usersData')
        .get()
        .then(doc => {
            doc.data().users.forEach(ud => {
                const user = ud.hasOwnProperty('data') ? ud.data : ud;
                if (
                    user.login === data.login &&
                    user.password === data.password
                ) {
                    localStorage.setItem('userId', user.id);
                } else {
                    throw new Error('wrongPass', 'noEmail');
                }
            });
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

function getUserData(data) {
    let check = true;

    db.collection('users')
        .doc('usersList')
        .get()
        .then(doc => {
            if (doc.exists) {
                doc.data().usersList.forEach(el => {
                    if (el === data.login) {
                        check = false;
                    }
                });
                if (check) {
                    localStorage.setItem('userId', data.id);
                    localStorage.setItem('testDone', false);
                    updateUserData(data);
                    updateUserList(data.login);
                    createEmptyCollection('weekTasks', data.id);
                }
            } else {
                console.log('No such document!');
            }
        })
        .catch(function(error) {
            console.log('Error getting document:', error);
        });
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

export { getSignInToken, getUserData };
