import { initializeMainTemplate } from '../pages.main-template.js';
import { genericTemplate } from './generic.template.js';

function initializePages(storedData, templateFunction) {
    return storedData.map(templateFunction).join('');
}
function classesPage(storedClasses) {
    return initializePages(storedClasses, genericTemplate);
}

function studentesPage(storedStudents) {
    return initializePages(storedStudents, genericTemplate);
}

function teachersPage(storedTeachers) {
    return initializePages(storedTeachers, genericTemplate);
}

function initializeClasses(storedClasses) {
    return initializeMainTemplate(classesPage(storedClasses), 'Classes');
}

function initializeStudents(storedStudents) {
    return initializeMainTemplate(studentesPage(storedStudents), 'Students');
}

function initializeTeachers(storedTeachers) {
    return initializeMainTemplate(teachersPage(storedTeachers), 'Teachers');
}

export { initializeClasses, initializeStudents, initializeTeachers };