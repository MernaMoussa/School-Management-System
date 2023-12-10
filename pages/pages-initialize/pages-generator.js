import { getClassesFromLocalStorage, getTeachersFromLocalStorage, getStudentsFromLocalStorage } from '../../app.js';
import { initializeMainTemplate } from '../pages.main-template.js';
import { genericTemplate } from './generic.template.js';

function initializePages(storedData, templateFunction) {
    return storedData.map(templateFunction).join('');
}
function classesPage() {
    const storedClasses = getClassesFromLocalStorage();
    return initializePages(storedClasses, genericTemplate);
}

function initializeClasses() {
    return initializeMainTemplate(classesPage(), 'Classes');
}

function studentesPage() {
    const storedStudents = getStudentsFromLocalStorage();
    return initializePages(storedStudents, genericTemplate);
}

function initializeStudents() {
    return initializeMainTemplate(studentesPage(), 'Students');
}
function teachersPage() {
    const storedTeachers = getTeachersFromLocalStorage();
    return initializePages(storedTeachers, genericTemplate);
}

function initializeTeachers() {
    return initializeMainTemplate(teachersPage(), 'Teachers');
}

export { initializeClasses, initializeStudents, initializeTeachers };