import { homeTemplate } from './home.template.js';


function countElements(elements) {
    return elements.length;
}

export function initializeHome(storedClasses, storedStudents, storedTeachers) {
    const contentSection = document.getElementById('content-section')
    let homeContent = homeTemplate(countElements(storedClasses), countElements(storedStudents), countElements(storedTeachers));
    return contentSection.innerHTML = homeContent
}