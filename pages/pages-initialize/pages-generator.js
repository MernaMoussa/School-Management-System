import { initializeMainTemplate } from '../pages.main-template.js';
import { genericTemplate } from './generic.template.js';
import { addNewElement } from '../event-listener/event-listener.js';

function initializePages(storedData, templateFunction) {
    return storedData.map(templateFunction).join('');
}
function classesPage(storedClasses) {
    return initializePages(storedClasses, genericTemplate);
}

function initializeClasses(storedClasses) {
    return initializeMainTemplate(classesPage(storedClasses), 'Classes');
}

function studentesPage(storedStudents) {
    return initializePages(storedStudents, genericTemplate);
}

function initializeStudents(storedStudents) {
    return initializeMainTemplate(studentesPage(storedStudents), 'Students');
}
function teachersPage(storedTeachers) {
    return initializePages(storedTeachers, genericTemplate);
}

function initializeTeachers(storedTeachers) {
    return initializeMainTemplate(teachersPage(storedTeachers), 'Teachers');
}

export { initializeClasses, initializeStudents, initializeTeachers };