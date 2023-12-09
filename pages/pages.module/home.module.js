import { getClassesFromLocalStorage, getStudentsFromLocalStorage, getTeachersFromLocalStorage } from './local-storage-handler.js';

const storedClasses = getClassesFromLocalStorage();
const storedStudents = getStudentsFromLocalStorage();
const storedTeachers = getTeachersFromLocalStorage();

function countElements(elements) {
    return elements.length;
}
