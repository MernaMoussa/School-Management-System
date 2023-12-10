import { getClassesFromLocalStorage, getTeachersFromLocalStorage, getStudentsFromLocalStorage } from '../local-storage/data-importer.js';
const storedClasses = getClassesFromLocalStorage();
const storedStudents = getStudentsFromLocalStorage();
const storedTeachers = getTeachersFromLocalStorage();
function initializePages(storedData) {
    return storedData.map(template).join('');
}