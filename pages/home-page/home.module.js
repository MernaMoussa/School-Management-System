import { getClassesFromLocalStorage, getStudentsFromLocalStorage, getTeachersFromLocalStorage } from '../../local-storage/data-importer.js';
import { homeTemplate } from './home.template.js';
const storedClasses = getClassesFromLocalStorage();
const storedStudents = getStudentsFromLocalStorage();
const storedTeachers = getTeachersFromLocalStorage();

function countElements(elements) {
    return elements.length;
}

const countedStoredStudents = countElements(storedStudents);
const countedStoredTeachers = countElements(storedTeachers);
const countedStoredClasses = countElements(storedClasses);

export function initializeHome() {
    const contentSection = document.getElementById('content-section')
    let homeContent = homeTemplate(countedStoredStudents, countedStoredTeachers, countedStoredClasses);
    return contentSection.innerHTML = homeContent
}