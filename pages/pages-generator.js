import { getClassesFromLocalStorage, getTeachersFromLocalStorage, getStudentsFromLocalStorage } from '../local-storage/data-importer.js';
import { initializeMainTemplate } from './pages.main-template.js';
import { classesTemplate } from './pages.templates/classes.template.js';
const storedStudents = getStudentsFromLocalStorage();
const storedTeachers = getTeachersFromLocalStorage();

function initializePages(storedData, templateFunction) {
    return storedData.map(templateFunction).join('');
}


function initializeClasses() {
    const storedClasses = getClassesFromLocalStorage();
    return initializeMainTemplate(initializePages(storedClasses, classesTemplate));
}

export { initializeClasses };