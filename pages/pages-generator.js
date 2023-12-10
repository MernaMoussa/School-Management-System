import { getClassesFromLocalStorage, getTeachersFromLocalStorage, getStudentsFromLocalStorage } from '../local-storage/data-importer.js';
import { initializeMainTemplate } from './pages.main-template.js';
import { genericTemplate } from './generic.template.js';

const storedTeachers = getTeachersFromLocalStorage();

function initializePages(storedData, templateFunction) {
    return storedData.map(templateFunction).join('');
}
function classesPage() {
    const storedClasses = getClassesFromLocalStorage();
    return initializePages(storedClasses, genericTemplate);
}

function initializeClasses() {
    return initializeMainTemplate(classesPage());
}

function studentesPage() {
    const storedStudents = getStudentsFromLocalStorage();
    return initializePages(storedStudents, genericTemplate);
}

function initializeStudents() {
    return initializeMainTemplate(studentesPage());
}



export { initializeClasses, initializeStudents };