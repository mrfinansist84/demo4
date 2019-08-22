import { db } from '../config.js';

  async function getQuestionsFromDB() {
      let questions = 'fail';
        questions = await db.collection('questions')
            .doc('questions')
            .get()
            .then(doc => {
                if (doc.exists) {
                    return ((doc.data().questions));
                }
            });
        return questions;
    }

  function setDataWheel(result, userId) {
        db.collection('wheels')
            .doc(`${userId}`)
            .set(result)
            .then(function() {
                console.log('Test successfully written!');
            })
            .catch(function(error) {
                console.error('Error writing document: ', error);
            });
    }

    function setTestDone(uid) {
          db.collection('users')
              .doc('usersData')
              .get()
              .then(doc => {
                const data = doc.data().users;
                data.forEach(user => {
                    if (user.id == uid) {
                        user.testDone = true;
                    }
                });
                db.collection('users')
                    .doc('usersData')
                    .update({
                        users: data
                    });
            });
      }

export { getQuestionsFromDB, setDataWheel, setTestDone };