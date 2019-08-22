import firebase from 'firebase/app';
import { db } from '../../config.js';

export default class ModelAdminPage {
    constructor(contr) {
        this.contr = contr;
        this.self = this;
    }

    static handlerSignInAdmin(authAdmin) {
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;
        db.collection('users')
            .doc('adminData')
            .get()
            .then(doc => {
                if (
                    doc.data().admin.login === email &&
                    doc.data().admin.password === password
                ) {
                    authAdmin(true);
                } else console.log('Wrong password or login');
            });
    }

    static addQuestionToServer(collection) {
        const newQuestion = {
            type: collection[0].value,
            inputType: 'radio',
            question: collection[1].value,
            answers: [
                {
                    text: collection[2].value,
                    value: collection[3].value
                },
                {
                    text: collection[4].value,
                    value: collection[5].value
                },
                {
                    text: collection[6].value,
                    value: collection[7].value
                },
                {
                    text: collection[8].value,
                    value: collection[9].value
                }
            ]
        };
        const questionsData = db.collection('questions').doc('questions');

        questionsData.update({
            questions: firebase.firestore.FieldValue.arrayUnion(newQuestion)
        });
    }

    static handlerKick(getUsersList, self, e) {
        const check = e.target.className;
        const indexEl = e.target.dataset.id;

        if (check === 'kickBtn') {
            self.delUserFromUsersData(indexEl);
            self.delUserFromUsersList(indexEl, getUsersList);
        }
    }

    static delUserDoc(collection, userId) {
        db.collection(`${collection}`)
            .doc(`${userId}`)
            .delete();
    }

    delUserFromUsersData(indexEl) {
        db.collection('users')
            .doc('usersData')
            .get()
            .then(doc => {
                const newUserList = doc.data().users;
                const usersData = db.collection('users').doc('usersData');
                const userId = newUserList[indexEl].id;

                newUserList.splice(indexEl, 1);
                usersData.update({
                    users: newUserList
                });
                return userId;
            })
            .then(userId => {
                this.delUserDoc('wheels', userId);
                this.delUserDoc('weekTasks', userId);
            });
    }

    static delUserFromUsersList(indexEl, getUsersList) {
        db.collection('users')
            .doc('usersList')
            .get()
            .then(doc => {
                const newListE = doc.data().usersList;
                const usersData = db.collection('users').doc('usersList');

                newListE.splice(indexEl, 1);
                usersData.update({
                    usersList: newListE
                });
            })
            .then(() => {
                getUsersList();
            });
    }

    getUsersList() {
        db.collection('users')
            .doc('usersList')
            .get()
            .then(doc =>
                this.setState({
                    data: doc.data().usersList
                })
            );
    }
}
