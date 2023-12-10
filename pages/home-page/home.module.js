import { getClassesFromLocalStorage, getStudentsFromLocalStorage, getTeachersFromLocalStorage } from '../../app.js';
import { homeTemplate } from './home.template.js';


function countElements(elements) {
    return elements.length;
}

export function initializeHome() {
    const contentSection = document.getElementById('content-section')
    const storedClasses = getClassesFromLocalStorage();
    const storedStudents = getStudentsFromLocalStorage();
    const storedTeachers = getTeachersFromLocalStorage();
    let homeContent = homeTemplate(countElements(storedStudents), countElements(storedTeachers), countElements(storedClasses));
    return contentSection.innerHTML = homeContent
}