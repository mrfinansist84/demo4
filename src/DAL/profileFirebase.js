import { db, database, storage } from '../config';

function getData(collection, document) {
    return db
        .collection(`${collection}`)
        .doc(`${document}`)
        .get()
        .then(doc => doc.data());
}

function setDataWheel(result, userId) {
    db.collection('wheels')
        .doc(userId)
        .set(result);
}

function refreshTasksOnServer(unDoneTasks, userId) {
    const weekTasksonServer = db.collection('weekTasks').doc(`${userId}`);
    weekTasksonServer.update({
        weekTasks: unDoneTasks
    });
}

function refresWeekNumberOnServer(currWeekNum, userId) {
    db.collection('users')
        .doc('usersData')
        .get()
        .then(doc => {
            const data = doc.data().users;
            data.forEach(user => {
                if (user.id == userId) {
                    user.weekNumber = currWeekNum;
                }
            });
            db.collection('users')
                .doc('usersData')
                .update({
                    users: data
                });
        });
}

function storePhoto(uid, file) {
    const key = database.ref().child(String(uid)).push().key;
    const img = storage.ref().child(String(uid)).child(key);

    img.put(file).then((snap) => {
        snap.ref.getDownloadURL().then((url) => {
            db.collection('users')
                .doc('usersData')
                .get()
                .then(doc => {
                    const data = doc.data().users;
                    data.forEach(user => {
                        if (user.id == uid) {
                            user.photoURL = url;
                        }
                    });
                    db.collection('users')
                        .doc('usersData')
                        .update({
                            users: data
                        });
                });
        });
    });
}

 function saveNewProfileFieldValue(uid, fieldName, fieldValue){
    db.collection('users')
        .doc('usersData')
        .get()
        .then(doc => {
            const data = doc.data().users;
            data.forEach(user => {
                if (user.id == uid) {
                    user[fieldName] = fieldValue;
                }
            });
            db.collection('users')
                .doc('usersData')
                .update({
                    users: data
                });
        });
 }
 
 async function getUserInfo(uid) {
     uid = Number(uid);
     let userInfo = {};
     await db.collection('users')
        .doc('usersData')
        .get()
        .then(doc => {
            doc.data().users.forEach(user => {
                if (user.id === uid) {
                    userInfo.userImage = user.photoURL;
                    userInfo.userName = user.name;
                    userInfo.userAge = user.age;
                    userInfo.userNickname = user.nickname;
                }
            })
            ;
        });
            return userInfo;
    }

    async function getUserWheel(uid) {
        let userWheel = '';
        await db.collection('wheels')
           .doc(uid).get().then(doc=>{
               userWheel = doc.data();
           });
               return userWheel;
       }

    async function getAllUserNicknames(){
        let nicknames = [];
         await db.collection('users')
        .doc('usersData')
        .get()
        .then(doc => {
            doc.data().users.filter(user => {
                if (user.nickname!==undefined){
                    nicknames.push({
                        nickname: user.nickname,
                        uid: user.id});
                } 
            }
                
            );
        });
        return nicknames;
    }
      

export {
    getData,
    setDataWheel,
    refreshTasksOnServer,
    refresWeekNumberOnServer,
    storePhoto,
    getUserInfo,
    saveNewProfileFieldValue,
    getUserWheel,
    getAllUserNicknames
};

