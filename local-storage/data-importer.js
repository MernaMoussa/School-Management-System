import { saveDataToLocalStorage, getDataFromLocalStorage } from './local-storage-handler.js';
function saveClassesToLocalStorage(key, classesData) {
    saveDataToLocalStorage(key, classesData);
}

function saveStudentsToLocalStorage(key, studentsData) {
    saveDataToLocalStorage(key, studentsData);
}

function saveTeachersToLocalStorage(key, teachersData) {
    saveDataToLocalStorage(key, teachersData);
}

function getClassesFromLocalStorage() {
    return getDataFromLocalStorage('classesData');
}

function getStudentsFromLocalStorage() {
    return getDataFromLocalStorage('studentsData');
}

function getTeachersFromLocalStorage() {
    return getDataFromLocalStorage('teachersData');
}

export {
    saveClassesToLocalStorage,
    getClassesFromLocalStorage,
    saveStudentsToLocalStorage,
    getStudentsFromLocalStorage,
    saveTeachersToLocalStorage,
    getTeachersFromLocalStorage
};