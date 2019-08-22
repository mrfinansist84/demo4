import firebase from 'firebase';
import {
    db
} from '../config';

function updateBigGoal(task, setData) {
    const userId = localStorage.getItem('userId');
    const bigGoalonServer = db.collection('bigGoalPersonal').doc(`${userId}`);
    bigGoalonServer
        .get()
        .then(doc => {
            const newBigGoals = doc.data().bigGoals.map(el => {
                if (+el.id === +task.goalId) {
                    el.tasks.push(task);
                }
                return el;
            });
            bigGoalonServer.update({
                bigGoals: newBigGoals
            })
            .then(setData(newBigGoals, 'bigGoalPersonal'));
        })
}

function addTasksToServer(task, action, setData) {
    updateBigGoal(task, setData);
    const weekTasksonServer = db.collection('weekTasks').doc(`${task.userId}`);
    weekTasksonServer
        .update({
            weekTasks: firebase.firestore.FieldValue.arrayUnion(task)
        })
        .then(action(task, 'weekTasks'));
}

function getData(collection, document) {
    return db
        .collection(`${collection}`)
        .doc(`${document}`)
        .get()
        .then(doc => doc.data());
}

function changeTaskFlag(taskId, oldTasks) {
    return oldTasks.weekTasks.map(task => {
        if (task.id == taskId) {
            task.isDone = !task.isDone;
        }
        return task;
    });
}

function setFlagFinished(taskId, oldTasks, userId) {
    const newTasks = changeTaskFlag(taskId, oldTasks);
    const weekTasksonServer = db.collection('weekTasks').doc(`${userId}`);
    weekTasksonServer.update({
        weekTasks: newTasks
    });
}

function findWeightAndCategory(taskId, oldTasks) {
    const res = {};
    oldTasks.weekTasks.map(task => {
        if (+task.id === +taskId) {
            res.category = task.category;
            res.upgradeWeight = task.isDone ?
                +task.weight :
                +(task.weight * -1);
        }
    });
    return res;
}

function upgradeWheel(taskId, oldTasks, userId) {
    const upgradeValue = findWeightAndCategory(taskId, oldTasks);
    db.collection('wheels')
        .doc(`${userId}`)
        .get()
        .then(doc =>
            db
            .collection('wheels')
            .doc(`${userId}`)
            .update({
                [upgradeValue.category]: doc.data()[upgradeValue.category] +
                    upgradeValue.upgradeWeight
            })
        );
}

function deleteTask(taskId, userId, action) {
    let taskIndex;
    let newUserTasks;

    db.collection('weekTasks')
        .doc(`${userId}`)
        .get()
        .then(doc => {
            newUserTasks = doc.data().weekTasks;
            newUserTasks.forEach((el, i) => {
                if (el.id == taskId) {
                    taskIndex = i;
                }
            });
            newUserTasks.splice(taskIndex, 1);
            db.collection('weekTasks')
                .doc(`${userId}`)
                .update({
                    weekTasks: newUserTasks
                })
                .then(
                    action(
                        {
                            weekTasks: newUserTasks
                        },
                        'weekTasks'
                    )
                );
        });
}

export {
    addTasksToServer,
    getData,
    setFlagFinished,
    deleteTask,
    upgradeWheel
};