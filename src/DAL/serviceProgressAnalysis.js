import { db } from '../config';
import {
    refreshTasksOnServer,
    refresWeekNumberOnServer
} from './profileFirebase';

 function getTaskEndingWeek(userId, currWeekNum, action) {
             db
            .collection('weekTasks')
            .doc(`${userId}`)
            .get()
            .then(doc => {
                const taskEndingWeek = doc.data().weekTasks;
                const completedTasks = (taskEndingWeek || []).filter(
                    el => el.isDone === true
                );
                const unDoneTasks = (taskEndingWeek || []).filter(
                    el => el.isDone === false
                );
                const health = calcProgress(completedTasks, 'health');
                const finance = calcProgress(completedTasks, 'finance');
                const career = calcProgress(completedTasks, 'career');
                const leisure = calcProgress(completedTasks, 'leisure');
                const relatives = calcProgress(
                    completedTasks,
                    'relatives'
                );
                const userProgressData = {
                    totalTaskNum: (taskEndingWeek||[]).length,
                    completedTasks: completedTasks.length,
                    unDoneTasks: unDoneTasks.length,
                    progressOnWheel: {
                        health,
                        finance,
                        career,
                        leisure,
                        relatives
                    }
                };
                refreshTasksOnServer(unDoneTasks, userId);
                refresWeekNumberOnServer(currWeekNum, userId);
                action(userProgressData, 'userProgressData') ;
            });
    }

    function calcProgress(task, category) {
        return task
            .filter(el => el.category == category)
            .reduce((acc, cur) => acc + +cur.weight, 0);
    }

    function checkCurrentWeek(action) {
        const currWeekNum = getWeekNumber();
        const userId = localStorage.getItem('userId');
        db.collection('users')
            .doc('usersData')
            .get()
            .then(doc => {
                doc.data().users.forEach(user => {
                    if (user.id == userId) {
                        if (!(user.weekNumber == currWeekNum)) {
                            getTaskEndingWeek(userId, currWeekNum, action);
                        }
                    }
                });
            });
    }

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


export {checkCurrentWeek};