import classesData from '../school-data/classes-data.js';
import studentsData from '../school-data/students-data.js';
import teachersData from '../school-data/teachers-data.js';
import { saveDataToLocalStorage, getDataFromLocalStorage } from './local-storage-handler.js';
function saveClassesToLocalStorage() {
    saveDataToLocalStorage('classesData', classesData);
}
function getClassesFromLocalStorage() {
    return getDataFromLocalStorage('classesData');
}
function saveStudentsToLocalStorage() {
    saveDataToLocalStorage('studentsData', studentsData);
}
function getStudentsFromLocalStorage() {
    return getDataFromLocalStorage('studentsData');
}
function saveTeachersToLocalStorage() {
    saveDataToLocalStorage('teachersData', teachersData);
}
function getTeachersFromLocalStorage() {
    return getDataFromLocalStorage('teachersData', teachersData);
}
export {
    saveClassesToLocalStorage,
    getClassesFromLocalStorage,
    saveStudentsToLocalStorage,
    getStudentsFromLocalStorage,
    saveTeachersToLocalStorage,
    getTeachersFromLocalStorage
};