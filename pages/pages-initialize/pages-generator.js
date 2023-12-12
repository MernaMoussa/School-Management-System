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

function initializeClasses(storedClasses, storedStudents, storedTeachers) {
    return initializeMainTemplate(classesPage(storedClasses), 'Classes', storedClasses, storedStudents, storedTeachers);
}

function initializeStudents(storedClasses, storedStudents, storedTeachers) {
    return initializeMainTemplate(studentesPage(storedStudents), 'Students', storedClasses, storedStudents, storedTeachers);
}

function initializeTeachers(storedClasses, storedStudents, storedTeachers) {
    return initializeMainTemplate(teachersPage(storedTeachers), 'Teachers', storedClasses, storedStudents, storedTeachers);
}

export { initializeClasses, initializeStudents, initializeTeachers };