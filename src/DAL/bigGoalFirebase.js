import firebase from 'firebase';
import {
    db
} from '../config';

const getBigGoalsPersonal = collection => {
    const userId = localStorage.getItem('userId');
    return db
        .collection(`${collection}`)
        .doc(`${userId}`)
        .get()
        .then(doc => doc.data().bigGoals);
};

const getBigGoalsCommunity = collection => {
    return db
        .collection(`${collection}`)
        .doc(`${collection}`)
        .get()
        .then(doc => doc.data()[collection]);
};

const createBigGoal = e => {
    const userId = localStorage.getItem('userId');
    const bigGoalPattern = {
        title: e.target[0].value,
        description: e.target[1].value,
        tasks: [],
        id: Date.now()
    };
    const bigGoalonServer = db.collection('bigGoalPersonal').doc(`${userId}`);

    bigGoalonServer.update({
        bigGoals: firebase.firestore.FieldValue.arrayUnion(bigGoalPattern)
    });
    e.preventDefault();
    e.target.reset();
};

const importBGToUser = goals => {
    const userId = localStorage.getItem('userId');
    db.collection('bigGoalPersonal')
        .doc(`${userId}`)
        .update({
            bigGoals: firebase.firestore.FieldValue.arrayUnion(...goals)
        });
};
const fillGoalWithTasks = (goal, allUserTasks) => {
    goal.tasks = allUserTasks.filter(task => {
        return +task.goalId === +goal.id;
    });
    return goal;
};
const exportBGToCommunity = goals => {
    const userId = localStorage.getItem('userId');
    db.collection('weekTasks')
        .doc(`${userId}`)
        .get()
        .then(doc => {
            const fillfullGoals = goals.map(el => {
                return fillGoalWithTasks(el, doc.data().weekTasks);
            });
            db.collection(`bigGoalСommunity`)
                .doc(`bigGoalСommunity`)
                .update({
                    bigGoalСommunity: firebase.firestore.FieldValue.arrayUnion(
                        ...fillfullGoals
                    )
                });
        });
};

const useBG = (goals) => {
    const userId = localStorage.getItem('userId');
    const tasksList = [];
    goals.forEach(el => {
        tasksList.push(...el.tasks);
    });
    if (tasksList.length > 0) {
        db.collection('weekTasks')
            .doc(`${userId}`)
            .update({
                weekTasks: firebase.firestore.FieldValue.arrayUnion(
                    ...tasksList
                )
            });
    }
};

const deleteBG = goals => {
    const userId = localStorage.getItem('userId');
    const bigGoalonServer = db.collection('bigGoalPersonal').doc(`${userId}`);

    bigGoalonServer.get().then(doc => {
        const base = doc
            .data()
            .bigGoals.filter(el => !goals.some(goal => +goal.id === +el.id));
        bigGoalonServer.update({
            bigGoals: base
        });
    });
};

const getData = (collection, document) => {
    return db
        .collection(`${collection}`)
        .doc(`${document}`)
        .get()
        .then(doc => doc.data());
};

export {
    getData,
    getBigGoalsPersonal,
    getBigGoalsCommunity,
    createBigGoal,
    importBGToUser,
    exportBGToCommunity,
    useBG,
    deleteBG
};