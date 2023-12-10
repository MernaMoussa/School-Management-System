import { initializeHome } from './pages.module/home.module.js'
// import { initializeClasses } from './pages.module/classes.module.js';
import { initializeMainTemplate } from './pages.main-template.js';
import { getClassesFromLocalStorage, getTeachersFromLocalStorage, getStudentsFromLocalStorage } from '../local-storage/data-importer.js';
import { classesTemplate } from './pages.templates/classes.template.js';
const storedClasses = getClassesFromLocalStorage();
const storedStudents = getStudentsFromLocalStorage();
const storedTeachers = getTeachersFromLocalStorage();

export const pages = [
    { pageName: "Home", pageTemplate: initializeHome },
    { pageName: "Classes", pageTemplate: initializeMainTemplate(initializePages(storedClasses, classesTemplate)) },
    { pageName: "Teachers", pageTemplate: "teachers" },
    { pageName: "Students", pageTemplate: "students" }
];


function initializePages(storedData, templateFunction) {
    return storedData.map(templateFunction).join('');
}