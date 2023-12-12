import { mainTemplate } from './main.template.js';
import { initializeHome } from '../../pages/home-page/home.module.js';
import { initializeHeader } from '../header/header.module.js';
import { initializeContent } from '../content/content.module.js';
import { initializeFooter } from '../footer/footer.module.js';
export function initialize(
    pages,
    storedClasses,
    storedStudents,
    storedTeachers,
    saveClasses,
    saveStudents,
    saveTeachers,
    retrieveClassesData,
    retrieveStudentsData,
    retrieveTeachersData
) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = mainTemplate();
    initializeHeader(pages);
    initializeContent(
        pages,
        initializeHome(storedClasses, storedStudents, storedTeachers),
        storedClasses,
        storedStudents,
        storedTeachers,
        saveClasses,
        saveStudents,
        saveTeachers,
        retrieveClassesData,
        retrieveStudentsData,
        retrieveTeachersData
    );
    initializeFooter();
}